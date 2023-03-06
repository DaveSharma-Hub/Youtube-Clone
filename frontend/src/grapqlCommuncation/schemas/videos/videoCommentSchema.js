import { gql } from '@apollo/client';

const GET_VIDEO_COMMENTS = gql`
query videoComments($videoId:String){
    videoComments(videoId:$videoId){
		id,
        videoId,
        comments{
        id,
        comment,
        user,
        like,
        dislikes
        }
    }
  }
`;

export default GET_VIDEO_COMMENTS;