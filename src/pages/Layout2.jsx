import React from 'react';
import { Outlet ,Link } from 'react-router-dom';




function Layout2 (){



    return(
        <>

        <div>
        <Link to="/"  className="nav-link" > Home </Link>
        <Link to="/livres" className="nav-link" >Livres</Link>
        </div>


        <Outlet />




        </>
    )






}

export default Layout2