const {v4:uuid} = require('uuid')
const searchFunction = require('../utils/searchFunction').searchFunction;


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
    }
  };

module.exports=(root);

const videos = [
    {
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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
        id:uuid(),
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