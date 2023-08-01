import {useState} from 'react'
import FormSection from './FormSection.jsx'
import Button from './Button.jsx'

function Form({editHandler, submitHandler}){

    return(
        <div className="form" id="form">
            <FormSection 
                legend="Personal"
            />
            <FormSection 
                legend="Education"
            />
            <FormSection 
                legend="Work"
            />

            <div className="btn-container">
                <Button 
                    type="Edit" 
                    onClick={editHandler}
                />
                <Button 
                    type="Submit" 
                    onClick={submitHandler}
                />
            </div>
        </div>
    )
}

export default Form;