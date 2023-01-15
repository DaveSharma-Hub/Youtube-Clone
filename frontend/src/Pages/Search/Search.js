import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Thumbnails from '../../Components/Thumbnails/Thumbnails';
import './search.scss';
import { useState } from 'react';
import Player from '../../Components/Player/Player';
import { useSearchParams } from 'react-router-dom';
import useGetSearchResults from '../../grapqlCommuncation/queries/videos/useGetSearchResults';
import SearchResults from '../../Components/SearchResults/SearchResults';

function Search({collapsed,setCollapsed,clicked,setClicked}){

    const [searchParams] = useSearchParams();
    const {data,loading,error} = useGetSearchResults(searchParams.get("value")|| "");
    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>
    return(
        <div className="search">
            <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
            <div className="searchContainer">
                <div>
                    <Sidebar collapsed={collapsed}/>
                </div>
                <div>
                    <SearchResults data={data.searchResults}/>
                </div>
                {/* <Thumbnails setClicked={setClicked}/>
                {
                    clicked ?
                    <div className="playerCorner">
                        <Player 
                            className="innerPlayer" 
                            img="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg"
                            title="Cool Video in 1 hour fun check it out Now!!!!Link in the description"
                            setClicked={setClicked}
                        />
                    </div>
                    : 
                    null
                } */}
            </div>
        </div>
    )
};

export default Search;