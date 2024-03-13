import React, { Fragment } from 'react'
import {Form, Input, message} from 'antd'
import axios from 'axios'

const App = () => {

  const submitForm=async(values)=>{
    try {
      let data=await axios.post("http://localhost:8000/form", values)
      console.log(data);
      
        message.success(data.data.message)
      
    } catch (error) {
      message.error(`${error}`)
      console.log(error.message);
    }
  }


  return (
    <Fragment>
      <Form layout='vetrtical' onFinish={submitForm}>
        <Form.Item label="User Name" name='username' >
          <Input type='text' required={true}/>
        </Form.Item>
        <Form.Item label="Email" name='email' >
          <Input type='text' required={true}/>
        </Form.Item>
        <Form.Item label="Password" name='pass' >
          <Input type='text' required={true}/>
        </Form.Item>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </Form>
    </Fragment>
  )
}

export default App