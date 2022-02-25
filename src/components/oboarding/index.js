import React,{useState} from "react";
import eclipse1 from "../assets/img/pablo-sign.png";
import logo from "../assets/svg/Group.svg";
import { useHistory } from "react-router-dom";

import "./index.scss";
const Login=()=> {
    const history = useHistory();
    const [hider, setHider] = useState("hide");
  
  return (
        <div className="Section">
            <div className="left_section">
                <div className="top">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flow">
                    <div className="flow1">
                        <img src={eclipse1} alt="eclipse"/>
                    </div>
           
                </div>
            </div>
            <div className="right_section">
                <div className="form_section">
                    <form>
                        <div className="top">
                             <h3>Welcome!</h3>
                             <p>Enter Details to login</p>
                        </div>
                      
                        <div className="forms">
                        <div className="former">
                            <input type="text" name="username" placeholder="Email"/>
                        </div>
                        </div>
                        <div className="forms">
                            <div className="former">
                             
                            <input type={hider==="show"?"text":"password"} name="password" placeholder="Password"/>
                            {hider==="hide"?
                            <span ><p onClick={()=>setHider("show")}>Show</p></span>
                            :
                            <span><p onClick={()=>setHider("hide")}>Hide</p></span>
                            }
                            </div>
                           
                        </div>
                        <div className="scorp">
                            <a href="/forgot">Forgot Password?</a>
                            </div>
                        <div className="forms">
                            
                            <button onClick={()=>history.push(`/users`)}>LOG IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Login;
