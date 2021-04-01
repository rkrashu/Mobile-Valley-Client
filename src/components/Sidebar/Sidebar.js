import React, { useContext, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { RiAdminLine } from "react-icons/ri";
import { AiFillFileAdd } from "react-icons/ai";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { userContext } from "../../App";


const Sidebar = () => {
  
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [ setLoggedInUser] = useContext(userContext)

    const handleLogOut = () =>{
        setLoggedInUser({ })
    }

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <p>{menuCollapse ? "Admin" : "Admin"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )} 
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
            <Link to="/"><MenuItem active={true} icon={<FiHome />}>
                Home
                <Link to="/" />
              </MenuItem></Link>
              <MenuItem active={true} icon={<AiFillFileAdd />}>Add Product <Link to="/admin" /></MenuItem>
              <MenuItem active={true} icon={<RiAdminLine />}>Manage <Link to="/manageProduct" /></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
         <MenuItem icon={<FiLogOut />} onClick={()=>handleLogOut()}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;