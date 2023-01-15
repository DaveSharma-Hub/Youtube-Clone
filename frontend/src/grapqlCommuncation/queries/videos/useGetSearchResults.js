import SEARCH_VIDEO_RESULTS from "../../schemas/videos/searchVideoSchema";
const { useQuery } = require("@apollo/client");

function useGetSearchResults(searchString){
    return useQuery(SEARCH_VIDEO_RESULTS,{
        variables:{
            searchString:searchString
        }
    })
}

export default useGetSearchResults;