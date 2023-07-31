import {useState} from 'react'
import PersonalInfo from './PersonalInfo.jsx'
import EducationInfo from './EducationInfo.jsx'
import WorkInfo from './WorkInfo.jsx'
import Button from './Button.jsx'

function Form(){
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="form">

            <div className="sections">
                <PersonalInfo 
                    isActive={activeIndex === 0}
                    onShow={() => setActiveIndex(0)}
                />
                <EducationInfo 
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                />
                <WorkInfo 
                    isActive={activeIndex === 2}
                    onShow={() => setActiveIndex(2)}
                />
            </div>

            <div className="form-btn-group">
                <Button type="edit" />
                <Button type="submit" />
            </div>

        </div>
    )
}

export default Form;