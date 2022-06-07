function Comments({video}) {

    const renderComments = video.comments.map(comment => {
        return (
            <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div>
        )
    })
    
    return (
        <div>
            <h3>{video.comments.length} Comments</h3>
            {renderComments}
        </div>
    )
}

export default Comments;