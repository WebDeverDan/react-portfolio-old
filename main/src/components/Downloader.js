import React from 'react';
import Resume2 from '../Images/Daniel Bradley Resume (1).pdf';
import Download from '../Images/download.png';


const Downloader = () => {
    return (

<div className="resume-download-div ">
      <h2>Download My Resume</h2>
      <a href={Resume2} target="_blank" >
        <img src={Download} alt="download-arrow"></img>
      </a>
      </div>
    
    );
};
    
export default Downloader;