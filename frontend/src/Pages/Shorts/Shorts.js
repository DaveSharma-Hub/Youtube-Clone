import InfiniteScroll from 'react-infinite-scroll-component';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './shorts.scss';
import ScrollVideo from '../../Components/ScrollVideo/ScrollVideo';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {v4 as uuid} from 'uuid';
import useGetRecommendedShorts from '../../grapqlCommuncation/queries/shorts/useGetRecommendedShorts';
function Shorts({collapsed,setCollapsed}){
    const {data,loading,error,fetchMore} = useGetRecommendedShorts("123",0);
    const [currentView, setCurrentView] = React.useState(0);
    const getPerRequest = 20;
    const history = useNavigate();
    const [currentData, setCurrentData] = React.useState([]);
    
    // const [page, setPage] = React.useState(0);
    
    if(error) return <h1>Error...</h1>
    if(loading) return <h1>Loading...</h1>
    // const refreshFunction = () => {
    //     // setPage(0);
    //     handleGetData();
    // }
    const handleGetData = async(position) => {
       const value = await fetchMore({
            variables:{
                userId:"123",
                pageStartingPosition:position
            }
       })

       if(!value.loading && !value.error){
            console.log(value);
            if(currentData.length==0){
                const tmp = [...data.recommendedShorts,...value.data.recommendedShorts]
                setCurrentData(tmp);
            }else{
                setCurrentData([...currentData,...value.data.recommendedShorts]);
            }
       }
    }

    const fetchData = () => {
        handleGetData(currentData.length+10)
    }

    return(
        <div className="main">
            <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
            <div className="mainContainer">
                <Sidebar collapsed={collapsed}/>
                <div className='infiniteScrollShort'>
                    <InfiniteScroll
                    dataLength={currentData.length<=0 ? data.recommendedShorts.length : currentData.length} //This is important field to render the next data
                    next={()=>{fetchData()}}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    // refreshFunction={refreshFunction}
                    // pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                    >
                        {
                            currentData.length>0 ? 
                            currentData?.map((item,index)=>(
                                <div key={item.id} className='outerVideo'>
                                    <div id={index} className='upperVideo'></div>
                                    <ScrollVideo
                                        image={item.image}
                                    />
                                </div>
                            ))
                            :
                            data.recommendedShorts.map((item,index)=>(
                                <div key={item.id} className='outerVideo'>
                                    <div id={index} className='upperVideo'></div>
                                    <ScrollVideo
                                        image={item.image}
                                    />
                                </div>
                            ))
                        }
                    </InfiniteScroll> 
                    <div className='selectButton'>
                        <button onClick={()=>{
                            setCurrentView(currentView-1>=0 ? currentView-1 : 0);
                            history(`/${currentView}`);
                            }}>Previous</button>
                        <button onClick={()=>{
                            setCurrentView(currentView+1);
                            history(`/#${currentView}`);
                            }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shorts;