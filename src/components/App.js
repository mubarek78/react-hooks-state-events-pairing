import video from "../data/video.js";
import React from "react";
import Iframe from "./IFrame";
import Buttons from "./Buttons";
import VideoDescription from "./VideoDescription";

function App() {
  console.log("Here's your data:", video);


   return (
    <div className="App">
      <Iframe video={video} />
      <VideoDescription video={video} />
      <Buttons video={video}/>
    </div>
     
  );
}

export default App;
