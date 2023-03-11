import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from './action';
import { useNavigate } from 'react-router-dom';

export const Check = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);
    const [reject,setReject] = useState(0);
    const check= useSelector((state)=>state.check);
    const navigate=useNavigate();
    const dispatch=useDispatch()
  return (<>
  <div style={{backgroundColor:"lightgrey",width:"500px",height:"850px",margin:"auto",border:"solid 2px grey"}}>
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px",marginTop:"20px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}> Name</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.name} </span>
   <button disabled={flag} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag(true)
     ;}}
   >check_circle</button>
   </div> 
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>Family Name</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.family} </span>
   <button disabled={flag1} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag1(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag1}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag1(true)
     ;}}
   >check_circle</button>
   </div> 
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>Mobile</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.mobile} </span>
   <button disabled={flag2} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag2(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag2}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag2(true)
     ;}}
   >check_circle</button>
   </div> 
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>ID No</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.id} </span>
   <button disabled={flag3} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag3(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag3}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag3(true)
     ;}}
   >check_circle</button>
   </div>  
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>Birth date</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.birth} </span>
   <button disabled={flag4} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag4(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag4}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag4(true)
     ;}}
   >check_circle</button>
   </div> 
   <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>Address</span>
    <span style={{width:"292px",fontWeight:"bold"}}> {check.address} </span>
   <button disabled={flag5} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag5(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag5}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag5(true)
     ;}}
   >check_circle</button>
   </div> 
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",padding:"10px",marginTop:"30px"}}>
    <span style={{marginLeft:"30px",width:"115px"}}>Profile Pic</span>
    <div style={{width:"250px",height:"200px"}}>
     <div style={{width:"150px",display:"inline-block"}}> <img src={check.image} style={{ height:"200px",width:"150px",marginTop:"-175px"}}></img>
    </div>
    <button disabled={flag6} className="material-icons-outlined"style={{color:"black",padding:"0px",border:"none",backgroundColor:"lightgrey",marginTop:"175px",marginLeft:"0px",marginRight:"50"}}
   onClick={()=>{ 
    setReject(reject+1);
    setFlag6(true)
     ;}}
   >highlight_off</button>
   <button disabled={flag6}  className="material-icons-outlined"style={{color:"green",padding:"0px",border:"none",backgroundColor:"lightgrey",marginTop:"175px",marginLeft:"5px",marginRight:"0"}}
   onClick={()=>{ 
    setCount(count+1)
    setFlag6(true)
     ;}}
   >check_circle</button>
   </div>
   </div> 
   <button style={{ float:"right",marginRight:"10px",padding:"0 25px",marginTop:"70px",color:"white",backgroundColor:"aqua",border:"none",borderRadius:"7px"}}
    onClick={()=>{
    dispatch(statusCheck(count,check.index)); 
    navigate("/")
  }}
    >save</button>
   <button style={{ float:"right",marginRight:"10px",padding:"0 25px",marginTop:"70px",color:"white",backgroundColor:"red",border:"none",borderRadius:"7px"}}
    onClick={()=>navigate("/")}
    >back</button>
   </div>
  </>
   
  )
}