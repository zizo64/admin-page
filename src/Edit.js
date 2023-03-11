import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './action';
import { useNavigate } from 'react-router-dom';

export const Edit = () => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [mobile, setMobile] = useState("");
    const [id,setId] = useState("");
    const [birth,setBirth] = useState("");
    const [address,setAddress] = useState("");
    const [chosen] = useState(false);
    const [status] = useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
     }
     const check= useSelector((state)=>state.check);
  return (
    <div style={{backgroundColor:"lightgrey",width:"500px",height:"850px",margin:"auto",border:"solid 2px grey"}}>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}> Name</span>
    <input type="text" style={{width:"300px",marginRight:"30px"}}
    value={name}  placeholder={check.name} onChange= {(e) => {
              setName(e.target.value)}}
              >
    </input>
    </div> 
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}>Family Name</span>
    <input type="text" style={{width:"300px",marginRight:"30px"}}
    value={family} placeholder={check.family} onChange= {(e) => {
              setFamily(e.target.value)}}
              >
    </input>
    </div> <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}> Mobile</span>
    <input type="number" style={{width:"300px",marginRight:"30px"}}
    value={mobile}placeholder={check.mobile} onChange= {(e) => {
              setMobile(e.target.value)}}
              >
    </input>
    </div> <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}> ID No</span>
    <input type="number" style={{width:"300px",marginRight:"30px"}}
    value={id}  placeholder={check.id} onChange= {(e) => {
              setId(e.target.value)}}
              >
    </input>
    </div> <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}> Birth date</span>
    <input type="date" style={{width:"300px",marginRight:"30px"}}
    value={birth} placeholder={check.birth} onChange= {(e) => {
              setBirth(e.target.value)}}
              >
    </input>
    </div> <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
     <span style={{marginLeft:"30px"}}> Address</span>
    <input type="text" style={{width:"300px",marginRight:"30px"}}
    value={address} placeholder={check.address} onChange= {(e) => {
              setAddress(e.target.value)}}
              >
    </input>
    </div> <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px",marginTop:"30px"}}>
     <span style={{marginLeft:"30px"}}>Profile Pic</span>
    
    <div>
    <input type="file" multiple accept="image/*" 
    onChange={(event) => {onImageChange(event)}} className="filetype" />
    <img style={{width:"150px",height:"200px",marginRight:"180px"}}  src={check.image}  />
     </div>
    
    </div> 
    {(name && family && mobile && id && birth && address && image)?
    <button style={{ float:"right",marginRight:"10px",padding:"0 25px",marginTop:"70px",color:"white",backgroundColor:"aqua",border:"none",borderRadius:"7px"}} 
    onClick={()=>{
      dispatch(editUser(name,family,mobile,id,birth,address,image,status,chosen,check.index));
      navigate("/")
       ;
      }}
    > save </button>:
      <button style={{ float:"right",marginRight:"10px",padding:"0 25px",marginTop:"70px",color:"white",backgroundColor:"aqua",border:"none",borderRadius:"7px"}} 
    onClick={()=>{
      alert("all feilds are requierd")
      }}
    > save </button>
  }
    <button style={{ float:"right",marginRight:"10px",padding:"0 25px",marginTop:"70px",color:"white",backgroundColor:"red",border:"none",borderRadius:"7px"}}
     onClick={()=>navigate("/")}
     >back</button>
    </div>
    
  )
}