import React, { useState } from "react";
import Comments from "./Comments"

function Buttons( { video } ) {

  const [ upVote , setUpVote ] = useState(video.upvotes)
  const [ downVote , setDownVote ] = useState(video.downvotes)
  const [ hideComments, setHideComments ] = useState(false) //initial render is false
  
  function handleUpVote() {
    setUpVote(upVote => upVote + 1)
  }

  function handleDownVote() {
    setDownVote(downVote => downVote + 1)
  }

  function handleHideComments() {
    setHideComments(hideComments => !hideComments)
  }

  return (
    <>
      <div className="buttonsDiv">
        <button onClick={handleUpVote} name="up">{upVote}👍</button>  
        <button onClick={handleDownVote} name="down">{downVote}👎</button>
      </div>
      <div>
        <button onClick={handleHideComments} id="hideComments">{hideComments ? "Hide" : "Show"} Comments</button>
        {hideComments ? <Comments video={video} /> : null}
      </div>
    </>
      
  )
}
  
export default Buttons;