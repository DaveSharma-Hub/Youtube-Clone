import {gql} from '@apollo/client';

const RECOMMENDED_SHORTS = gql`
    query recommendedShorts($userId:String,$pageStartingPosition:Int){
        recommendedShorts(userId:$userId,pageStartingPosition:$pageStartingPosition){
            id,
            title,
            image,
            creatorIcon,
            channel
        }
    }
`;

export default RECOMMENDED_SHORTS;