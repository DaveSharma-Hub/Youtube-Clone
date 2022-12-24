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
  }
  type Query {
    recommendedVideos(userId:String):[Video]
  }
`);

module.exports=(schema);