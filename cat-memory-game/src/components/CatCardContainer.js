export default function CatCardContainer(props) {

    return <div className="card" id={props.idNumber}>
        <h2> Cat number {props.idNumber}</h2>
        <img src={props.imgSRC}/>
    </div>
}