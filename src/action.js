
import axios from "axios";
export const newUser =(name,family,mobile,id,birth,address,image,status,chosen)  => async (dispatch, getState) => {
 const user=getState().user
  const help={name,family,mobile,id,birth,address,image,status,chosen}
    dispatch({ type: "newuser", payload: [...user,help] });   
};
export const checkData = (name,family,mobile,id,birth,address,image,status,chosen,index) => async (dispatch, getState) => {
  const help={name,family,mobile,id,birth,address,image,status,chosen,index}
  dispatch({ type: "check", payload: help });
 
};
export const statusCheck = (count,index) => async (dispatch, getState) => {
  const user=getState().user
  if (count==7){ 
    user[index].status = true
  }
  dispatch({ type: "status", payload: [...user] }); 
};
export const editUser = (name,family,mobile,id,birth,address,image,status,chosen,index) => async (dispatch, getState) => {
  const help={name,family,mobile,id,birth,address,image,status,chosen,index}
  const user=getState().user
  user[index]=help
  dispatch({ type: "edit", payload: [...user] });  
};

export const chooseItem = (name,family,mobile,id,birth,address,image,status,chosen,index) => (dispatch, getState) => {
const help={name,family,mobile,id,birth,address,image,status,chosen,index}
const user=getState().user
const pinuser=getState().pinuser
user.splice(index,1)
dispatch({ type: "pinuser", payload: [...pinuser,help] });
};
export const nochooseItem = (name,family,mobile,id,birth,address,image,status,chosen,index) => (dispatch, getState) => {
  const help={name,family,mobile,id,birth,address,image,status,chosen,index}
  const user=getState().user
  const pinuser=getState().pinuser
  pinuser.splice(index,1)
  dispatch({ type: "nochoose", payload: [...user,help]  });
  };
export const deleteItem = () => (dispatch, getState) => {
  dispatch({ type: "delete", payload: [] });
};
