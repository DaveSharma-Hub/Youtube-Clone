import './videocomments.scss';

function VideoComments({commentList}){
    return(
        <div className="videoCommentSection">
            {
                commentList.comments.map((videoComment)=>{
                    return (
                        <div className="videoCommentSectionCard">
                           <div className="videoCommentSectionAvatar">
                                <img 
                                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                                />
                           </div>
                           <div className="videoCommentSectionInformation">
                                <div className="videoCommentSectionUser">
                                        @{videoComment.user}
                                </div>
                                <div className="videoCommentSectionComment">
                                        {videoComment.comment}
                                </div>
                                <div className="videoCommentSectionPopularity">
                                    Likes: {videoComment.like}
                                    Dislikes{videoComment.dislikes}
                                </div>
                           </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default VideoComments;