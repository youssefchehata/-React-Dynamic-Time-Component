import React from 'react';
import "./Time.css";

const Time = ({ms}) => { //  props au Time mettez le dans variable ms
    const msPerSec= 1000
    const msPerMin= msPerSec * 60
    const msPerHour =msPerMin * 60
    const Hours =(Math.floor(ms / msPerHour)<10 ? '0'+Math.floor(ms / msPerHour) : Math.floor(ms / msPerHour))
    const restHours =ms % msPerHour;
    const minutes = (Math.floor(restHours / msPerMin)<10 ?'0'+Math.floor(restHours / msPerMin) :Math.floor(restHours / msPerMin));
    const restMin= restHours % msPerMin;
    const second = (Math.floor(restMin / msPerSec)<10 ? '0'+ Math.floor(restMin / msPerSec) : Math.floor(restMin / msPerSec))
    

     
      return (
        <div className="container">
      <div className="hours">
        <span className="sec1">{Hours}:</span>
        <span className="sec2 ">Hour</span>
      </div>
      <div className="minutes">
        <span className="sec1">{minutes}:</span>
        <span className="sec2">Minute</span>
      </div>
      <div className="seconds">
        <span className="sec1">{second}</span>
        <span className="sec2">Second</span>
      </div>
     
    </div>
      );
    
  }

export default Time;