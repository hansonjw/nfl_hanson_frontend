import * as React from "react";
import { NavLink } from "react-router-dom";


function NavBar (props){

    let activeStyle = {
        background:'blue',
        color:'white'
    };

    let activeYes = "nav-item nav-link active";
    let activeNo = "nav-item nav-link";


    return <div class="">
        <div class="bg-light pt-md-3 pb-md-0 py-2 fixed-top">

            {/* // Nav shown only in Medium size screens and obove...hidden for mobile */}
            <ul class="nav nav-pills nav-fill">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? activeYes : activeNo
                    }
                >Home</NavLink>
                <NavLink
                    to="scoreboard"
                    className={({ isActive }) =>
                    isActive ? activeYes : activeNo
                    }
                >Scoreboard</NavLink>
                <NavLink
                    to="brackets"
                    className={({ isActive }) =>
                    isActive ? activeYes : activeNo
                    }
                >Brackets</NavLink>
            </ul>

        </div>
    </div>
}

export default NavBar