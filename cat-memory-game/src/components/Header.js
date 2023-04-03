export default function Header(props) {

    return <div className="topHeader">
        <h1> Cat Memory Game</h1>
        <h3> Score: {props.score}</h3>
        <h3> High Score: {props.highestScore}</h3>
    </div>
}