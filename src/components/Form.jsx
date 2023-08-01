import {useState} from 'react'
import FormSection from './FormSection.jsx'
import Button from './Button.jsx'

function Form(){

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`Form submitted`);
    }

    const editHandler = (e) => {
        e.preventDefault();
        console.log(`Form editing`);
    }

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="form" id="form">
            <FormSection 
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                legend="Personal"
            />
            <FormSection 
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                legend="Education"
            />
            <FormSection 
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
                legend="Work"
            />

            <div className="btn-container">
                <Button type="Edit" onClick={editHandler}/>
                <Button type="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export default Form;