const { gql } = require("@apollo/client");

const SEARCH_VIDEO_RESULTS = gql`
    query searchResults($searchString:String!){
        searchResults(searchString:$searchString){
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
            description
        }
    }
`;

export default SEARCH_VIDEO_RESULTS;