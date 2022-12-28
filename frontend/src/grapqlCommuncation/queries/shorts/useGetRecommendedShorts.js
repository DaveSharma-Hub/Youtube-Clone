import { useQuery } from "@apollo/client";
import RECOMMENDED_SHORTS from "../../schemas/shorts/recommendedShorts";

function useGetRecommendedShorts(userId,pageStartingPosition){
    return useQuery(RECOMMENDED_SHORTS,{
        variables:{
            userId:userId,
            pageStartingPosition:pageStartingPosition
        }
    })
}

export default useGetRecommendedShorts;