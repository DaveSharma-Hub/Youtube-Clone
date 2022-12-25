import InfiniteScroll from 'react-infinite-scroll-component';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './shorts.scss';
import ScrollVideo from '../../Components/ScrollVideo/ScrollVideo';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {v4 as uuid} from 'uuid';
function Shorts({collapsed,setCollapsed}){
    const [currentData, setCurrentData] = React.useState([
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
            {
                id:uuid(),
                image:'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?ssl=1'
            },
        ]);

    const [page, setPage] = React.useState(0);
    const [currentView, setCurrentView] = React.useState(0);
    const getPerRequest = 20;
    const history = useNavigate();

    // React.useEffect(()=>{
    //     handleGetData(page);
    // },[])

    // const refreshFunction = () => {
    //     setPage(0);
    //     handleGetData(page);
    // }
    // const handleGetData = (index) =>{
    //     const url = `http://localhost:8000/get?page=${index}`;
    //     console.log(url);
    //     axios.get(url).then((res)=>setCurrentData([...currentData,...res.data]))
    // }

    // const fetchData = () => {
    //     console.log('Fetch')
    //     const index = page+getPerRequest;
    //     setPage(index);
    //     handleGetData(page);
    // }

    return(
        <div className="main">
            <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
            <div className="mainContainer">
                <Sidebar collapsed={collapsed}/>
                <div className='infiniteScrollShort'>
                    <InfiniteScroll
                    dataLength={currentData.length} //This is important field to render the next data
                    // next={()=>{fetchData()}}
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
                            currentData?.map((item,index)=>(
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