function Button({type}) {

    if(type === 'submit'){
        return <button>Submit</button>
    }
    else if(type === 'edit'){
        return <button>Edit</button>
    }
    
}

export default Button;