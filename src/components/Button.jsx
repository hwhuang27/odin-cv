function Button({type}) {

    if(type === 'submit'){
        return <button className="submit">Submit</button>
    }
    else if(type === 'edit'){
        return <button className = "edit">Edit</button>
    }
    
}

export default Button;