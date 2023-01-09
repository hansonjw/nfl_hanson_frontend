import nflLogos from './../../assets/nflLogos.js'


function Logo (props){
    return <div class="mx-auto">
        <img src={nflLogos[props.team]} class="img-fluid mx-auto d-block"/>
    </div>
}

export default Logo

