import React from "react";
import '../stylesheets/Header.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function ResponsiveSidebar( {headerText, footerText} ){
  return(
    <div style={{position:'absolute', display: 'flex', height: '100vh', 
         overflow: 'scroll initial',  fontFamily: 'Work Sans'}}>
      <CDBSidebar textColor= "#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ fontSize: '28px'}}></i>}>
                {headerText}
            </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Inicio</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/tables" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Formulario</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="sticky-note">Salir</CDBSidebarMenuItem>
                </NavLink>
            </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper" style={{padding: '20px 5px',}}>
            {footerText}
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default ResponsiveSidebar;