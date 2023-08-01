function Display({data}) {

    return(
        <div className="display">
            <h1>{data.firstName} {data.lastName}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>

           <h2>Education</h2>
           <p>{data.schoolName}</p>
           <p>{data.schoolField}</p>
           <p>From {data.schoolStart} to {data.schoolEnd}</p>

            <h2>Work Experience</h2>
            <p>{data.workName}</p>
            <p>{data.workPosition}</p>
            <p>{data.workDescription}</p>
            <p>From {data.workStart} to {data.workEnd}</p>
        </div>
    )
}

export default Display;