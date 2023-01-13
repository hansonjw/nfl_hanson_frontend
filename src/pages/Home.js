import * as React from "react";
import { Link } from "react-router-dom";

// content
import NFL from './../assets/content/images/NFL.svg'


function Home () {
    return <div class="row py-5">
        <h1 class="text-center">Homepage</h1>
        <p class="text-center"></p>
        <Link to={"/scoreboard"} class="text-center">Scoreboard</Link>
        <Link to={"/bracket"} class="text-center">Brackets</Link>
        <img src={NFL} alt="nfl-logo" />
    </div>;
}

export default Home;