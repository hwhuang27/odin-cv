function PersonalInfo({isActive, onShow}) {
    if(!isActive){
        return (
            <div>
                <button className="info-btn" onClick={onShow}>Personal</button>
            </div>
        )
    }
    else{
        return (
            <div className="section">
                <form action="">
                    <fieldset>
                        <legend>Personal</legend>

                        <label htmlFor="firstName">First Name </label>
                        <input type="text" name="firstName" id="firstName" />
                        <label htmlFor="lastName">Last Name </label>
                        <input type="text" name="lastName" id="lastName" />

                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="email" />

                        <label htmlFor="phone">Phone </label>
                        <input type="tel" name="phone" id="phone" />

                    </fieldset>
                </form>

            </div>
        )
    }

}

export default PersonalInfo;