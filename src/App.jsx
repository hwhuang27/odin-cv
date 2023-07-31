import { useState } from 'react'

import './styles/App.css'
import Form from './components/Form.jsx'
import Display from './components/Display.jsx'

function App() {

  return (
    <div className="content">
      <Form />
      <Display />
    </div>
  )
}

export default App;
