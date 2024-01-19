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
/*  Icons are taken from: https://fontawesome.com/v4/icons/ */

function ResponsiveSidebar( {headerText, footerText} ){
  return(
    <div style={{position:'fixed', display: 'flex', height: '100vh', 
         overflow: 'scroll initial',  fontFamily: 'Work Sans'}}>
      <CDBSidebar textColor= "#fff" backgroundColor="#333" toggled={true}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ fontSize: '28px'}}></i>}>
                {headerText}
            </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="th-large">Inicio</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/" activeClassName="activeClicked" hrefLang="">
                    <CDBSidebarMenuItem icon="address-card">Formulario</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user-times">Salir</CDBSidebarMenuItem>
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