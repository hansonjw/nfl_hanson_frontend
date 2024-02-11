import React from 'react';

// import content
import Logo from './components/Logo.js'
import gameData from '../data/gameData.js'
import userData from '../data/userData.js'


function ScoreBoard() {
    return <div>
        <div>{TallyScores()}</div>
        <div class="container">
            <div class="row pt-md-5 pt-2">
                <h3>{"Games / Picks"}</h3>
            </div>
        </div>
        <div class="container">
            {gameData.map(r =>
                <div>
                    <Round data={r} />
                </div>
                )}
        </div>
    </div>;
}

function TallyScores() {
    let uDat = userData
    let gDat = gameData
    let userScores = {}

    uDat.map(u=>userScores[u.username]=0)

    gDat.map(round=>round.leagues.map(league=>league.games.map(game=>game.picks.map(pick=>
        {if(game.winner == pick.team){
            userScores[pick.username] += 1
        }}
    ))));

    const sorted = Object.entries(userScores).sort(([c1, v1], [c2, v2]) => {
        return v2 - v1;
    })

    return <div class="container">
        <div class="row pt-md-5 pt-2">
            <h3>{"Scores / Standings"}</h3>
        </div>
        <div class="row border-bottom">
            {sorted.map(u => 
                <div class="col my-md-auto">
                    <h6 class="text-center d-none d-md-block">{u[0]}</h6>
                    <h6 class="text-center d-none d-md-block">{u[1]}</h6>
                </div>
            )}
        </div>
    </div>
}


function Round(props) {

    let data = userData

    let userList = []
    data.map(u =>
        userList.push(u.username)    
    )

    return <div>
        <div class="row pt-md-5 pt-2">
            <h3>{props.data.round}</h3>
        </div>
        <div>
            <div>
                <div class="row border-bottom">
                    <div class="col my-md-auto">
                        <h6 class="text-center d-none d-sm-block">Game</h6>
                        <p class="text-center d-sm-none fs-6 fw-lighter">g</p>
                    </div>
                    <div class="col my-md-auto">
                        <h6 class="text-center d-none d-sm-block">Winner</h6>
                        <p class="text-center d-sm-none fs-6 fw-lighter">w</p>
                    </div>
                    
                    {userList.map(u =>
                        <div class="col my-md-auto">
                            <h6 class="text-center d-none d-md-block">{u}</h6>
                            <p class="text-center d-md-none fs-6 fw-lighter">{u[0]}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {props.data.leagues.map(l =>
            <League data={l} userList={userList}/>
        )}
    </div>

}

function League(props) {
    return <div>
        <div class="border-bottom bg-light">{props.data.league}</div>
        {props.data.games.map(g =>
            <Game data={g} userList={props.userList}/>    
        )}
    </div>
}

function Game(props){
    
    let picksObj = {}
    props.data.picks.map(p => {
        picksObj[p.username] = p.team
    })

    // establish variables for class and coloring winning row
    let awayRow = "row";
    let homeRow = "row";

    // make row green if winner = away team
    if (props.data.winner == props.data.away && props.data.winner != "NFL"){
        awayRow = "row bg-success bg-opacity-10"
    }
    // make row green if winner = home team
    if (props.data.winner == props.data.home && props.data.winner != "NFL"){
        homeRow = "row bg-success bg-opacity-10"
    }

    return <div class="border-bottom py-md-4">
        
        {/* AWAY row */}
        <div class={awayRow}>
            <div class="col">
                <Logo team={props.data.away} />
            </div>
            {(props.data.away == props.data.winner && props.data.winner != "NFL")
                ? <div class="col border-end"><Logo team={props.data.winner}/></div>
                : <div class="col border-end"><Logo team={"X"}/></div>
            }
            {props.userList.map(u =>
                (picksObj[u] == props.data.away && props.data.away != "NFL")
                    ? <div class="col"><Logo team={picksObj[u]}/></div>
                    : <div class="col"><Logo team={"X"}/></div>
            )}
        </div>

        {/* HOME row */}
        <div class={homeRow}>
            <div class="col">
                <Logo team={props.data.home} />
            </div>
            {(props.data.home == props.data.winner && props.data.winner != "NFL")
                ? <div class="col border-end"><Logo team={props.data.winner}/></div>
                : <div class="col border-end"><Logo team={"X"}/></div>
            }
            {props.userList.map(u =>
                (picksObj[u] == props.data.home && props.data.home != "NFL")
                    ? <div class="col"><Logo team={picksObj[u]}/></div>
                    : <div class="col"><Logo team={"X"}/></div>
            )}
        </div>
    </div>
}


export default ScoreBoard;