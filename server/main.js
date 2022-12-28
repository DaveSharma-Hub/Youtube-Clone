const app = require('express')();
const cors = require('cors');
const cluster = require('cluster');
var { graphqlHTTP } = require('express-graphql');
const numberOfCPU = require('os').cpus().length;
const schema = require('./graphql/schema');
const root = require('./graphql/resolver');

// const restfulPORT = 8000;
const graphqlPORT = 4000;

app.use(cors());

function graphqlEndpoint(){
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
      }));
    app.listen(graphqlPORT,()=>{console.log(`Listening on port ${graphqlPORT}`)});
}

function apis(){
    graphqlEndpoint();
    //restfulEndpoint();
}

function loadbalancerRunner(){
    if(cluster.isMaster){
        console.log(`Parent process ${process.pid}`);

        for(let i=0;i<numberOfCPU;i=i+1){
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died`);
        });
    }
    else{
        console.log(`Child process ${process.pid}`);
        apis();
    }
}

loadbalancerRunner();