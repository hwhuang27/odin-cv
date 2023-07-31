function EducationInfo({ isActive, onShow }) {
    if (!isActive) {
        return(
        <div>
            <button className="info-btn" onClick={onShow}>Education</button>
        </div>
        )
    }
    else{
        return (
            <div className="section">
                <form action="">
                    <fieldset>
                        <legend>Education</legend>

                        <label htmlFor="schoolName">School Name </label>
                        <input type="text" name="schoolName" id="schoolName" />

                        <label htmlFor="studyField">Field of Study </label>
                        <input type="text" name="studyField" id="studyField" />

                        <label htmlFor="schoolStart">Start Date </label>
                        <input type="date" name="schoolStart" id="schoolStart" />

                        <label htmlFor="schoolEnd">End Date </label>
                        <input type="date" name="schoolEnd" id="schoolEnd" />
                    </fieldset>
                </form>
            </div>
        )
    }

}

export default EducationInfo;