import React from 'react';
import "./index.scss";
import group1 from "../../assets/svg/Group(1).svg";
import group2 from "../../assets/svg/Group(2).svg";
import group3 from "../../assets/svg/Group(3).svg";
import group4 from "../../assets/svg/Group(4).svg";
import Table from "./table";


const Users=()=> {

  return (
        <div className="Section">
            
            <div className="section_Section">
              <div className="front">
                <h3>Users</h3>
              </div>
              <div className="middlers">
                <div className="prosper">
                  <div className="circle circle1">
                    <img src={group1} alt="circ1"/>
                  </div>
                  <div>
                    <p>USERS</p>
                  </div>
                  <div>
                    <h3>2,453</h3>
                  </div>
                </div>
                <div className="prosper">
                  <div className="circle circle2">
                    <img src={group2} alt="circ1"/>
                  </div>
                  <div>
                    <p>ACTIVE USERS</p>
                  </div>
                  <div>
                    <h3>2,453</h3>
                  </div>
                </div>
                <div className="prosper">
                  <div className="circle circle3">
                    <img src={group3} alt="circ1"/>
                  </div>
                  <div>
                    <p>USERS WITH LOANS</p>
                  </div>
                  <div>
                    <h3>12,453</h3>
                  </div>
                </div>
                <div className="prosper">
                  <div className="circle circle4">
                    <img src={group4} alt="circ1"/>
                  </div>
                  <div>
                    <p>USERS WITH SAVINGS</p>
                  </div>
                  <div>
                    <h3>102,453</h3>
                  </div>
                </div>

               
              </div>
              <div className="footlers">
                <Table/>
              </div>
            </div>
            
        </div>
  );
}

export default Users;
