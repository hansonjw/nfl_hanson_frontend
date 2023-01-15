// modules
import * as React from "react";
import { Link } from "react-router-dom";

// content
import nflLogos from './../assets/nflLogos'

// data
import userData from '../data/userData.js'
import bracketPicksData from '../data/bracketPicksData.js'
import bracketResults from '../data/bracketResults.js'

// components
import UserBracket from './components/UserBracket'


function Brackets () {
    return <div class="container row-col">
        <div>
            <UserBracket user={bracketResults} />
        </div>
        <div class="row row-cols-1 row-cols-md-2">
        {bracketPicksData.map(u=>
            <div class="col">
                <UserBracket user={u}/>
            </div>
        )}
        </div>
    </div>
}

export default Brackets;