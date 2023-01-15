import './searchresults.scss';

function SearchResults({data}){
    const convertNumberToString = (numberValue) => {
        let value = numberValue;
        if(numberValue/1000>=1 && numberValue/1000<1000){
            value = (numberValue/1000).toString()+"K";
        }
        if(numberValue/1000000>=1 && numberValue/1000000<=1000){
            value = (numberValue/1000000).toString()+"M";
        }
        if(numberValue/1000000000>=1 && numberValue/1000000000<=1000){
            value = (numberValue/1000000000).toString()+"B";
        }
        return value;
    }
    return(
        <div className="searchResult">
            {
                data.map((video)=>{
                    return(
                        <div key={video.id} className="individualSearchVideo">
                            <div>
                                <img
                                    src={video.thumbnail}

                                />
                            </div>
                            <div className="searchVideoInfo">
                                <div className="searchVideoTitle">
                                    {video.title}
                                </div>
                                <div className="searchVideoViewCount">
                                    {convertNumberToString(video.viewCount)}
                                </div>
                                <div className="searchVideoChannel">
                                    <div>
                                        <img
                                            src={video.creatorIcon}
                                        />
                                    </div>
                                    <div className="searchVideoChannel">
                                        {video.channel}
                                    </div>
                                </div>
                                <div className='searchVideoDescription'>
                                    {video.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResults;