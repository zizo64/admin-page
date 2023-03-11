import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkData, chooseItem, nochooseItem,deleteItem } from './action';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const [search, setSearch] = useState("");
  const user = useSelector((state) =>state.user);
  const pinuser = useSelector((state) =>state.pinuser);
   user.sort(function(a,b){return a.id-b.id})
   pinuser.sort(function(a,b){return a.id-b.id})

  return (
  <div style={{display:"grid", gridTemplateColumns:"1fr", width:"500px",border:"solid 2px grey",margin:"auto",padding:"20px 0"}} >
     <input placeholder="جستجوي نام فرد"  onChange={(e) => setSearch(e.target.value.toLowerCase())} style={{ width:"450px" ,margin:"auto",borderRadius:"5px",borderColor:"lightgray",boxShadow:"5px 5px 5px 0px grey"}}>
     </input>
     <div style={{ width:"450px" ,margin:"auto",marginTop:"10px"}}>
     <span className="material-icons-outlined"style={{color:"red", float:"left"}}
     onClick={()=>dispatch(deleteItem())}
     >delete</span>
     {pinuser.length ?  
     <span className="material-icons-outlined" style={{ float:"right"}}>check_box</span>
     : <span className="material-icons-outlined" style={{ float:"right"}}> check_box_outline_blank
     </span>}
    </div>
    {pinuser
    .map((item, index) => (
      <div key={index} style={{  height:"200px",border:"solid 1px grey",borderRadius:"5px",backgroundColor:"lightgray",boxShadow:"5px 5px 5px 10px grey", width:"450px",margin:"auto",marginTop:"20px"  }}>
        <div style={{ float:"right", display:"inline-block"}}>
        <span className="material-icons-outlined" style={{color:"gray",fontSize:"16px",marginRight:"5px"}}
        onClick={()=>(navigate("edit"),
        dispatch(checkData(
          item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index
          ))
          )}
        >edit</span>
       <input type="checkbox"  checked={item.chosen} style={{marginRight:"5px",marginTop:"-5px"}} onChange=
       {()=>{
         item.chosen=(!item.chosen); 
        dispatch(nochooseItem(item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index))
       }} />
      </div>
      <div  style={{  display:"grid", gridTemplateColumns:"1fr 1fr 1fr",margin:"10px 10px 0px" }}>
    <img src={item.image} style={{ height:"170px",width:"120px"}}></img>
    <div style={{textAlign:"left"}}>
    <p style={{ fontSize:"14px"}}>Name:</p>
    <p style={{ fontSize:"14px"}}> Family Name:</p>
    <p style={{ fontSize:"14px"}}> Birth Date: </p>
    <p style={{ fontSize:"14px"}}> ID Number: </p>
    <span className="material-icons-outlined" style={{rotate:"90deg",fontSize:"15px",backgroundColor:"white", color:item.status? "green": "red"}}>sell</span>
    </div>
    <div style={{textAlign:"left"}}>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.name}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.family}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.birth}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.id}</p>
     </div>
     </div>
    <button style={{ float:"right",marginRight:"10px",color:"white",padding:"0 25px",marginTop:"-25px",backgroundColor:"aqua",border:"none",borderRadius:"7px" ,display:item.status && "none"}}
    onClick={()=>(navigate(`${item.id}`),
    dispatch(checkData(
      item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index
      )))}
     >check</button>
     </div>
      ))}


    {user.filter((item, index) => {
      return item.name.toLowerCase().includes(search) ;
    }).map((item, index) => (
      <div key={index} style={{  height:"200px",border:"solid 1px grey",borderRadius:"5px",backgroundColor:"lightgray",boxShadow:"5px 5px 5px 10px grey", width:"450px",margin:"auto",marginTop:"20px"  }}>
        <div style={{ float:"right", display:"inline-block"}}>
        <span className="material-icons-outlined" style={{color:"gray",fontSize:"16px",marginRight:"5px"}}
        onClick={()=>(navigate("edit"),
        dispatch(checkData(
          item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index
          ))
          )}
        >edit</span>
       <input type="checkbox"  checked={item.chosen} style={{marginRight:"5px",marginTop:"-5px"}} onChange=
       {()=>{
         item.chosen=(!item.chosen);
         {item.chosen&&
         dispatch(chooseItem(item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index))
       }}} />
      </div>
      <div  style={{  display:"grid", gridTemplateColumns:"1fr 1fr 1fr",margin:"10px 10px 0px" }}>
    <img src={item.image} style={{ height:"170px",width:"120px"}}></img>
    <div style={{textAlign:"left"}}>
    <p style={{ fontSize:"14px"}}>Name:</p>
    <p style={{ fontSize:"14px"}}> Family Name:</p>
    <p style={{ fontSize:"14px"}}> Birth Date: </p>
    <p style={{ fontSize:"14px"}}> ID Number: </p>
    <span className="material-icons-outlined" style={{rotate:"90deg",fontSize:"15px",backgroundColor:"white", color:item.status? "green": "red"}}>sell</span>
    </div>
    <div style={{textAlign:"left"}}>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.name}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.family}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.birth}</p>
    <p style={{ fontWeight:"bold",fontSize:"14px"}}> {item.id}</p>
     </div>
     </div>
    <button style={{ float:"right",marginRight:"10px",color:"white",padding:"0 25px",marginTop:"-25px",backgroundColor:"aqua",border:"none",borderRadius:"7px" ,display:item.status && "none"}}
    onClick={()=>(navigate(`${item.id}`),
    dispatch(checkData(
      item.name,item.family,item.mobile,item.id,item.birth,item.address,item.image,item.status,item.chosen,index
      )))}
     >check</button>
     </div>
      ))}
     <div style={{ width:"450px" ,margin:"auto",marginTop:"20px"}}>
     <span className="material-icons-outlined" onClick={()=>navigate("./signup")} style={{color:"aqua",fontSize:"30px",float:"right"}}>add_circle</span>
    </div>
    </div>
  
  )
}