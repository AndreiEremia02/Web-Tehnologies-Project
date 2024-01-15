import React, {useRef, useState} from 'react'
import {Form, Button, Card, CardBody, FormLabel, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContexts'
import {Link, useNavigate} from "react-router-dom"
import './Signup.css'; 

export default function SingUp() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    async function handleSubmit(e)
    {

      e.preventDefault()
      if(passwordRef.current.value!==passwordConfirmRef.current.value)
      {
        return setError('Passwords do not match')
      }
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      }
      catch(error){
        console.log(error)
        setError('Failed to create an account')
      }
        setLoading(false)
    }

    return (
    <>
    <Card>
        <CardBody>
            <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
               <FormLabel>Password Confirmation</FormLabel>
               <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button  disabled={loading} className="w-100" type="submit">Sign Up</Button>
        </Form>
        </CardBody>

    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
