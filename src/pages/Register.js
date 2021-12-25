import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { Form, Button } from 'react-bootstrap';



export default function Register() {
    let {registerUser} = useContext(AuthContext)
    return (
        <div>
            <h1>Register Page</h1>
            <div>
            <Form onSubmit = {registerUser}>
                <Form.Group className="mb-3">
                    <Form.Control name = "email" type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name = "username" type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name = "password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name = "confirmpassword" type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Select className='mb-3' name= 'branch'>
                    <option>Select Branch</option>
                    <option value="ARCH">ARCH</option>
                    <option value="BME">BME</option>
                    <option value="BIOTECH">BIOTECH</option>
                    <option value="CHEM">CHEM</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EE">EE</option>
                    <option value="IT">IT</option>
                    <option value="MECH">MECH</option>
                    <option value="META">META</option>
                    <option value="MINING">MINING</option>
                </Form.Select>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
            
        </div>
    )
}
