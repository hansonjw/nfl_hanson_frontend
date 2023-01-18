import * as React from "react";
import { Link } from "react-router-dom";

// content
import nflLogos from './../../assets/nflLogos'


function UserBracket (props) {
    return <div class="col border border-dark-subtle rounded-4 my-3">
        <div class="row">
            <h4 class="text-center">{props.user.username}</h4>
        </div>
        <div class="row">
            <div class="col">
                <h5 class="text-center">NFC</h5>
            </div>
            <div class="col">
                <h5 class="text-center">AFC</h5>
            </div>
        </div>
        <div class="row">
            {/* NFC */}
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos["DAL"]} />
                <img class="img-fluid" src={nflLogos["SF"]} />
                <img class="img-fluid" src={nflLogos["NYG"]} />
                <img class="img-fluid" src={nflLogos["PHI"]} />
            </div>
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos[props.user.ND2]} />
                <img class="img-fluid" src={nflLogos["X"]} />
                <img class="img-fluid" src={nflLogos[props.user.ND1]} />
            </div>
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos[props.user.NC1]} />
            </div>

            {/* Super Bowl */}
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos[props.user.SB]} />
                <img class="img-fluid" src={nflLogos["X"]} />
            </div>

            {/* AFC */}
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos[props.user.AC1]} />
            </div>
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos[props.user.AD2]} />
                <img class="img-fluid" src={nflLogos["X"]} />
                <img class="img-fluid" src={nflLogos[props.user.AD1]} />
            </div>
            <div class="col my-auto">
                <img class="img-fluid" src={nflLogos["CIN"]} />
                <img class="img-fluid" src={nflLogos["BUF"]} />
                <img class="img-fluid" src={nflLogos["JAX"]} />
                <img class="img-fluid" src={nflLogos["KC"]} />
            </div>

        </div>
    </div>;
}

export default UserBracket;