import React, { useRef, useState } from 'react'
import { Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import TextFieldGroup from '../common/TextFieldGroup'

const Login = () => {

    const emailInput = useRef();
    const passwordInput = useRef();

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        }

        console.log(user)
        if (user.email !== '' && user.password !== '') setShow(true)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        if (show) navigate('/')
        setShow(false)
    }

    let showModal;

    if (show) {
        showModal = (
            <ShowModalSingleAction
                show={show}
                title='Successful'
                body='Logged in...'
                handler={handleClose}
            />
        )
    }

    let toast;

    if (show) {
        toast = (
            <Toast onClose={handleClose} show={show} delay={5000} autohide className='w-100 mt-50'>
                <Toast.Header closeButton={false}>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Success</strong>
                    <small>{new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</small>
                </Toast.Header>
                <Toast.Body>Logged in...</Toast.Body>
            </Toast>
        )
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your Afrilearn account</p>
                        <form onSubmit={submitHandler}>

                            <TextFieldGroup
                                placeholder='Email Address'
                                type='email'
                                name='email'
                                refInput={emailInput}
                            // error='Error'
                            />

                            <TextFieldGroup
                                placeholder='Password'
                                type='password'
                                name='password'
                                refInput={passwordInput}
                            // error='Error'
                            />

                            {/* {showModal} */}

                            <input type="submit" className="btn btn-info btn-block mt-4" />

                            {toast}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login