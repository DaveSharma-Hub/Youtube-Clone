const express = require('express');
const cors = require('cors');
const cores = require('os').cpus().length;
const cluster = require('cluster');
const {v4:uuid} = require('uuid')

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.urlencoded({extended:false}));

function apiService(){
    app.get('/getComments',(req,res)=>{
        try {
            const videoId = parseInt(req.query.videoId);
            const commentOnVideo = comments.find(commentItem=>commentItem.videoId===videoId);
            
            res.send(commentOnVideo || []);
        }catch(err){
            console.log(err);
        }
    });

    app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});
}

function mainService(){
    if(cluster.isMaster){
        for(let i=0;i<cores;i=i+1){
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
        });
    }
    else{
        console.log(`Child process ${process.pid}`);
        apiService();
    }
}

mainService();

const comments = [
    {
        id:uuid(),
        videoId:1,
        comments:[
            {
                id:uuid(),
                comment:'Great Video, Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video, Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video, Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video, Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video, Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.Watching this channel has been my turning point.',
                user:'Rahul',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:2,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:3,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:4,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:5,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:6,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:7,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:8,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:9,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:10,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:11,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:12,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:13,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:14,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:15,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:16,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:17,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:18,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:19,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:20,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:21,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:22,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:23,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:24,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:25,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:26,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:27,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:28,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:29,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:30,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:31,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
    {
        id:uuid(),
        videoId:32,
        comments:[
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Bob C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Teller',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Jamie C',
                like:10,
                dislikes:1
            },
            {
                id:uuid(),
                comment:'Great Video',
                user:'Krishna',
                like:110,
                dislikes:1
            },
        ]
    },
]