import { useQuery } from "@apollo/client";
import GET_RECOMMENDED_VIDEOS from "../../schemas/videos/recommendedVideoSchema";

function useGetRecommendedVideos(userId){
    return useQuery(GET_RECOMMENDED_VIDEOS,{
            variables:{
                userId:userId
            }
        })
}

export default useGetRecommendedVideos;