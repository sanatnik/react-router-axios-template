import React, {useContext} from 'react'
import { Container, Navbar } from 'react-bootstrap'
import AddPost from './AddPost'
import AuthContext from '../context/AuthContext'

export default function Footer() {
    let {user} = useContext(AuthContext)
    return (
        <div>
            <Container>
            <Navbar fixed="bottom"  expand="lg" variant="light" bg="light">
                <Container className='d-flex justify-content-center'>
                { user? < AddPost/> : 'Please Login' }
                
                </Container>
            </Navbar>
            </Container>
        </div>
    )
}
