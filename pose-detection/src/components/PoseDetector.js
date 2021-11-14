import React from 'react';
import PoseNet from "react-posenet";

export default function PoseDetector() {
 return (
     <div className = "mainDiv">
          <div className = "camera">
         <PoseNet />
         </div>
     </div>
    
   
 );
}
