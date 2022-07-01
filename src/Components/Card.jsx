const Card = (props) => {
    return(
        <div className="Card" style={{backgroundColor:props.color}}>
            {props.text}
        </div>
    )
}
export default Card;