import React, {useContext, useState, useRef} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default function LoginPage() {
    let {loginUser} = useContext(AuthContext)
    return (
        <div>
            <h1 className='my-3'>Login Page</h1>
            <div className='m-5'>
            <Form onSubmit={loginUser} >
                <Form.Group className="mb-3">
                    <Form.Control name = "email" type="text" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name = "password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
            </div>
            
        </div>
    )
}
