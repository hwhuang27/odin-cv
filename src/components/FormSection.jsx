
function FormSection({isActive, onShow, legend }){

    switch(legend){
        case 'Personal':
            return (
                <div className="section">
                    <fieldset>
                        <legend>{legend}</legend>

                        <label htmlFor="firstName">First Name </label>
                        <input type="text" name="firstName" id="firstName" />

                        <label htmlFor="lastName">Last Name </label>
                        <input type="text" name="lastName" id="lastName" />

                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="email" />

                        <label htmlFor="phone">Phone </label>
                        <input type="tel" name="phone" id="phone" />
                    </fieldset>
                </div>
            )

        case 'Education':
            return (
                <div className="section">
                    <form action="">
                        <fieldset>
                            <legend>Education</legend>

                            <label htmlFor="schoolName">School Name </label>
                            <input type="text" name="schoolName" id="schoolName" />

                            <label htmlFor="schoolField">Field of Study </label>
                            <input type="text" name="schoolField" id="schoolField" />

                            <label htmlFor="schoolStart">Start Date </label>
                            <input type="date" name="schoolStart" id="schoolStart" />

                            <label htmlFor="schoolEnd">End Date </label>
                            <input type="date" name="schoolEnd" id="schoolEnd" />
                        </fieldset>
                    </form>
                </div>
            )

        case 'Work':
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

export default FormSection;