import './styles/App.css'
import Form from './components/Form.jsx'
import Display from './components/Display.jsx'

function App() {

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

  return (
    <div className="content">
      <Form />
      <Display data={data}/>
    </div>
  )
}

export default App;
