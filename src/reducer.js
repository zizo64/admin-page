
export const userReducer = (
  state = [
    {name:"Natasha",family:"Gomez",mobile:"49800111111",id:"49800111111",birth:"1991/01/13",address:"No.60,marzdaran St,Teh",image:"images/pic1.jpg",status:false,chosen:false},
  {name:"Jack",family:"Stewart",mobile:"59600111111",id:"59600111111",birth:"1988/01/25",address:"No.60,marzdaran St,Teh",image:"images/pic2.jpg",status:false,chosen:false},
  {name:"Boshra",family:"Alvahd",mobile:"78200111111",id:"78200111111",birth:"1986/06/06",address:"No.60,marzdaran St,Teh",image:"images/pic4.jpg",status:false,chosen:false}
 ],
  action) => {
  switch (action.type) {
    case "newuser":
      return action.payload; 
    case "edit":
      return action.payload;  
    case "status":
      return action.payload;  
    case "choose":
      return action.payload; 
      case "nochoose":
        return action.payload;
    default:
      return state;
  }
  };
  export const pinuserReducer = (
    state = [],action) => {
    switch (action.type) {
      case "pinuser":
        return action.payload; 
        case "delete":
        return action.payload;
      default:
        return state;
    }
    };
  export const checkReducer = (
    state ={},
    action) => {
    switch (action.type) {
      case "check":
        return action.payload;
      default:
        return state;
    }
    };
   

   