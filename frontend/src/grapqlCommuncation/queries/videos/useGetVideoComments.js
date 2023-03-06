import { useQuery } from "@apollo/client";
import GET_VIDEO_COMMENTS from "../../schemas/videos/videoCommentSchema";

function useGetVideoComments(videoId){
    return useQuery(GET_VIDEO_COMMENTS,{
        variables:{
            videoId:videoId
        }
    })
}
export default useGetVideoComments;