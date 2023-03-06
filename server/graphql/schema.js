var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Popularity {
    likeCount:Int
    dislikeCount:Int
  }
  type Video {
    id:String
    title:String
    channel:String
    thumbnail:String
    creatorIcon:String
    viewCount:String
    popularityCount:Popularity
    subscriberCount:Int
    description:String
  }

  type Shorts {
    id:String
    title:String
    image:String
    creatorIcon:String
    channel:String
  }

  type Comment {
    id:String
    comment:String
    user:String
    like:Int
    dislikes:Int
  }

  type VideoComments {
    id:String
    videoId:String
    comments:[Comment]
  }

  type Query {
    recommendedVideos(userId:String):[Video]
    recommendedShorts(userId:String,pageStartingPosition:Int):[Shorts]
    searchResults(searchString:String):[Video]
    videoComments(videoId:String):VideoComments
  }

`);

module.exports=(schema);