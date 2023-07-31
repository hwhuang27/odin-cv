function WorkInfo({ isActive, onShow }) {
    if(!isActive){
        return (
            <div>
                <button className="info-btn" onClick={onShow}>Work</button>
            </div>
        )
    }
    else{
        return (
            <div className="section">
                <form action="">
                    <fieldset>
                        <legend>Work</legend>

                        <label htmlFor="workName">Company Name </label>
                        <input type="text" name="workName" id="workName" />

                        <label htmlFor="workPosition">Position </label>
                        <input type="text" name="workPosition" id="workPosition" />

                        <label htmlFor="workDescription">Job Description </label>
                        <textarea name="workDescription" id="workDescription" cols="30" rows="6">
                        </textarea>

                        <label htmlFor="workStart">Start Date </label>
                        <input type="date" name="workStart" id="workStart" />

                        <label htmlFor="workEnd">End Date </label>
                        <input type="date" name="workEnd" id="workEnd" />
                    </fieldset>
                </form>

            </div>
        )
    }
}

export default WorkInfo;