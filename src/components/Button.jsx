function Button({type, onClick}) {
    return(
        <button
            form="form"
            className="btn"
            onClick={onClick}>
                {type}
            </button>
    )  
}

export default Button;
