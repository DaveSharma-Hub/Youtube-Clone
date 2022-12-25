import { useState } from "react";
import useGetRecommendedVideos from "../../grapqlCommuncation/queries/videos/getRecommendedVideos";
import Card from "../Card/Card";
import LoadingCard from "../Card/LoadingCard/LoadingCard";
import './thumbnails.scss';

function Thumbnails({setClicked}){
    const recommendedVideoList = useGetRecommendedVideos("123");
    if(recommendedVideoList.error) return <h1>Error</h1>
    if(recommendedVideoList.loading) return <h1>Loading...</h1>
    const recommendedVideoListData = recommendedVideoList?.data?.recommendedVideos;
    
    const convertNumberToString = (numberValue) => {
        let value = numberValue;
        if(numberValue/1000>=1 && numberValue/1000<1000){
            value = numberValue.toString()+"K";
        }
        else if(numberValue/1000000>=1 && numberValue/1000000<=1000){
            value = numberValue.toString()+"M";
        }
        else if(numberValue/1000000000>=1 && numberValue/1000000000<=1000){
            value = numberValue.toString()+"B";
        }
        return value;
    }
    return(
        <div className="thumbnails">
            {
            recommendedVideoList.loading ? 
            [...Array(4*9)]?.map((item,index)=>{
                return(
                    <LoadingCard key={index}/>
                )
            }) 
            :
            recommendedVideoListData?.map((item,index)=>{
                return (
                        <Card 
                            key={item.id}
                            img={item.thumbnail}
                            title={item.title}
                            avatar={item.creatorIcon}
                            views={convertNumberToString(item.views)}
                            channel={item.channel}
                            date="2 months"
                            setClicked={setClicked}
                        />
                )
            })
            }
        </div>
    )
}

export default Thumbnails;