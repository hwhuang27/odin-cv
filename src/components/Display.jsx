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

const data = {
    firstName: 'David',
    lastName: 'Huang',
    email: 'test12345@gmail.com',
    phone: '444-555-666',
    schoolName: 'Test University',
    schoolField: 'Computer Science',
    schoolStart: '1-2-2016',
    schoolEnd: '1-2-2023',
    workName: 'Test Company',
    workPosition: 'Test Position',
    workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus excepturi distinctio tenetur dolor modi officia soluta a magni. Ea?',
    workStart: '1-2-2016',
    workEnd: '1-2-2023'
}