import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import TextFieldGroup from '../common/TextFieldGroup'

const Register = () => {

  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef()

  const navigate = useNavigate()

  const [modalTitle, setModalTitle] = useState('')
  const [modalBody, setModalBody] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => {

    if(modalTitle === 'Success') navigate('/login')
    
    setShow(false)
    setModalTitle('')
    setModalBody('')
  }

  let showModal;

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
      confirmPassword: confirmPasswordInput.current.value
    }

    console.log(user)
    if (user.email !== '' && user.password !== '') {
      setShow(true)
      setModalTitle('Success')
      setModalBody('Account created...')
    }

    if (user.password !== user.confirmPassword) {
      setShow(true)
      setModalTitle('Error')
      setModalBody('Password did not match...')
    }
  }

  if (show) {
    showModal = (
      <ShowModalSingleAction
        show={show}
        title={modalTitle}
        body={modalBody}
        handler={handleClose}
      />
    )
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Register</h1>
            <p className="lead text-center">Create your Afrilearn account</p>
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

              <TextFieldGroup
                placeholder='Confirm Password'
                type='password'
                name='confimpassword'
                refInput={confirmPasswordInput}
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

export default Register