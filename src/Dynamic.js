import React from 'react';
import Butchild from './Dynamicchild.js';
import './Dynamic.css';
// button
const Dynamictimer =(props) =>{
return(
    
<div className='timer'>
     <div className="allbutton">

{props.input.map((el,i)=> <Butchild elstab={el} key={i}/>)}

       </div>
   
    

</div>

)
}



export default Dynamictimer;