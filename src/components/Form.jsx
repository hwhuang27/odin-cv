import PersonalInfo from './PersonalInfo.jsx'
import EducationInfo from './EducationInfo.jsx'
import WorkInfo from './WorkInfo.jsx'
import Button from './Button.jsx'

function Form(){
    return(
        <div className="form">

            <div className="sections">
                <PersonalInfo />
                <EducationInfo />
                <WorkInfo />
            </div>

            <div className="buttons">
                <Button type="edit" />
                <Button type="submit" />
            </div>

        </div>
    )
}

export default Form;