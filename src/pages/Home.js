import * as React from "react";
import { Link } from "react-router-dom";

// content
import NFL from './../assets/content/images/NFL.svg'


function Home () {
    return <div class="row py-5">
        <div class="col"></div>
        <div class="col">
            <div class="row"></div>
            <div class="row">
                <h1 class="text-center">Homepage</h1>
                <p class="text-center"></p>
                <Link to={"/scoreboard"} class="text-center">Scoreboard</Link>
                <Link to={"/brackets"} class="text-center">Brackets</Link>
                <img src={NFL} alt="nfl-logo" />
            </div>
            <div class="row"></div>
        </div>
        <div class="col"></div>
    </div>;
}

export default Home;