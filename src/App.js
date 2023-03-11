import "./App.css";
import "./bootstrap.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector}from 'react-redux'
import {Check} from "./Check";
import {Home} from "./Home";
import {Signup} from "./Signup";
import {Edit} from "./Edit";
function App() {
  const {user} = useSelector((state) =>state.user);
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" >
      <Route index  element={<Home/>}/>
      <Route path=":id">
      <Route index  element={<Check/>}/>
      </Route> 
      <Route path="signup" element={<Signup/>}/> 
      <Route path="edit">
      <Route index  element={<Edit/>}/>
      </Route>
      </Route>
    </Routes>  
    </BrowserRouter> 
  )
  }
export default App;
