import React, { useRef, useState } from 'react'
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import TextFieldGroup from '../common/TextFieldGroup'

const Login = () => {

    const emailInput = useRef();
    const passwordInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const user = {
            email: emailInput.current.value,
            password: passwordInput.current.value
        }

        console.log(user)
        if(user.email !== '' && user.password !== '') setShow(true)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

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

                            {showModal}

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login