function Button({type}) {

    if(type === 'submit'){
        return <button className="btn">Submit</button>
    }
    else if(type === 'edit'){
        return <button className="btn">Edit</button>
    }
}

export default Button;