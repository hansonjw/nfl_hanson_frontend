import * as React from "react";
import { Link } from "react-router-dom";

// content
import NFL from './../assets/content/images/NFL.svg'

// other components
// import Home from './Home.js'

function ErrorURL () {
    return <div class="row py-5">
        <h1 class="text-center">ERROR!</h1>
        <p class="text-center">You entered a URL that does not exist...please try one of the following</p>
        <Link to={"/"} class="text-center">Home</Link>
        <Link to={"/scoreboard"} class="text-center">Scoreboard</Link>
        <Link to={"/bracket"} class="text-center">Brackets</Link>
        <img src={NFL} alt="nfl-logo" />
    </div>;
}

export default ErrorURL;