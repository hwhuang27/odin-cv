
import {useState} from 'react'
import Form from './components/Form.jsx'
import Display from './components/Display.jsx'
import './styles/App.css'

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

function App() {

  const [info, setInfo] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newInfo = {
      ...info,
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      schoolName: document.querySelector('#schoolName').value,
      schoolField: document.querySelector('#schoolField').value,
      schoolStart: document.querySelector('#schoolStart').value,
      schoolEnd: document.querySelector('#schoolEnd').value,
      workName: document.querySelector('#workName').value,
      workPosition: document.querySelector('#workPosition').value,
      workDescription: document.querySelector('#workDescription').value,
      workStart: document.querySelector('#workStart').value,
      workEnd: document.querySelector('#workEnd').value,
    }

    setInfo(newInfo);
  }

  const editHandler = (e) => {
    e.preventDefault();

    const newInfo = {
      ...info,
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      schoolName: document.querySelector('#schoolName').value,
      schoolField: document.querySelector('#schoolField').value,
      schoolStart: document.querySelector('#schoolStart').value,
      schoolEnd: document.querySelector('#schoolEnd').value,
      workName: document.querySelector('#workName').value,
      workPosition: document.querySelector('#workPosition').value,
      workDescription: document.querySelector('#workDescription').value,
      workStart: document.querySelector('#workStart').value,
      workEnd: document.querySelector('#workEnd').value,
    }

    setInfo(newInfo);
  }

  return (
    <div className="content">
      <Form editHandler={editHandler} submitHandler={submitHandler}/>
      <Display data={info}/>
    </div>
  )
}

export default App;
