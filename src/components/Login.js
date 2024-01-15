import React, {useRef, useState} from 'react'
import {Form, Button, Card, CardBody, FormLabel, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts';
import {Link, useNavigate} from "react-router-dom"
import './Login.css'; 

export default function Login() {
    const emailRef=useRef()
    const passwordRef=useRef()
   
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e)
    {

      e.preventDefault()
     
      try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate('/')
    }
      catch(error){
        console.log(error)
        if (error.code === 'auth/email-already-in-use') {
            setError('Email is already in use. Please use the "Forgot Password" option if you forgot your password.');
          } else {
            setError('Failed to sign in');
          }
      }
        setLoading(false)
    }

    return (
    <>
    <Card>
        <CardBody>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger" >{error}</Alert>}
        <Form onSubmit ={handleSubmit}>
            <Form.Group id="email">
               <FormLabel>Email</FormLabel>
               <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
               <FormLabel>Password</FormLabel>
               <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button  disabled={loading} className="w-100" type="submit">Log in</Button>
        </Form>
        </CardBody>

    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
