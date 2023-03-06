const {v4:uuid} = require('uuid')
const searchFunction = require('../utils/searchFunction').searchFunction;
const axios = require('axios');

var root = {
    recommendedVideos: (args) => {
      return videos;
    },
    recommendedShorts: (args) => {
        const pageStartingPosition = args.pageStartingPosition;
        return shorts.slice(pageStartingPosition,pageStartingPosition+10);
    },
    searchResults: (args) => {
        const searchToken = args.searchString;
        const videoList = searchFunction(videos,searchToken,["title","channel"],false);
        return videoList;
    },
    videoComments: async(args) => {
        try{
            const videoId = args.videoId;
            const videoComment = await axios.get(`http://localhost:9000/getComments?videoId=${videoId}`);
            return videoComment.data;
        }catch(err){
            console.log(err);
            return [];
        }
    }
  };

module.exports=(root);

const videos = [
    {
        //id:uuid(),
        id:1,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:2,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:3,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:4,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:5,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:6,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:7,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:8,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:9,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:10,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:11,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:12,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:13,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:14,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:15,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:16,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:17,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:18,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:19,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:20,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:21,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:22,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:23,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:24,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:25,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:26,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:27,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:28,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:29,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:30,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:31,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    },
    {
        id:32,
        title:"Video Title Example",
        channel:"Channel",
        thumbnail:"https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
        creatorIcon:"https://tr.rbxcdn.com/8fc7652f210a411f6d07df86e4055958/420/420/Image/Png",
        viewCount:1000000,
        popularityCount:{
            likeCount:1000000,
            dislikeCount:10000
        },
        subscriberCount:17000000,
        description:"Cool video, need to watch now. Great vlog, coming soon.Stay tuned.#New#Cool#Test"
    }, 
]

const shorts = [
    {
        id:uuid(),
        title:"New Shortsjn",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"Before New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"TEST SHORTS",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
    {
        id:uuid(),
        title:"New Shorts",
        image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1',
        creatorIcon:"",
        channel:"channel",
    },
]