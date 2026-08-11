import React, { useState } from 'react'
import { register } from '../Api'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const RegisterUser = (props) => {

    let history = useHistory()

    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        register({
            username: username,
            password: password,
            email: email
        })
        setName('')
        setPassword('')
        setEmail('')
        history.push('/profile')

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(e) => setName(e.currentTarget.value)}
                    value={username}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                />
            </FormGroup>

            <Button>Submit</Button>
        </Form>
    );
}

export default RegisterUser