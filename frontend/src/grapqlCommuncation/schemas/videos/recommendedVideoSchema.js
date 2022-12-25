import { gql } from '@apollo/client';

const GET_RECOMMENDED_VIDEOS = gql`
query recommendedVideoList{
    recommendedVideos(userId:"1234"){
      id
      title
      channel
      thumbnail
      creatorIcon
      viewCount
      popularityCount{
        likeCount
        dislikeCount
      }
      subscriberCount
    }
  }
`;

export default GET_RECOMMENDED_VIDEOS;