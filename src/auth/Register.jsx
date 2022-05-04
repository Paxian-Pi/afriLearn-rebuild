import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SelectListGroup from '../common/SelectListGroup';
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import TextFieldGroup from '../common/TextFieldGroup'

const Register = () => {

  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef()
  const referalCodeInput = useRef()

  const navigate = useNavigate()

  const [modalTitle, setModalTitle] = useState('')
  const [modalBody, setModalBody] = useState('')

  const [role, setRole] = useState()
  const [level, setLevel] = useState()

  const [show, setShow] = useState(false)

  const handleClose = () => {

    if (modalTitle === 'Success') navigate('/login')

    setShow(false)
    setModalTitle('')
    setModalBody('')
  }

  let showModal;

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      role,
      level,
      email: emailInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      password: passwordInput.current.value,
      confirmPassword: confirmPasswordInput.current.value,
      referalCode: referalCodeInput.current.value
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

  //Select options for role
  const roleOptions = [
    { label: 'Select Role', value: 0 },
    { label: 'Student', value: 'Student' },
    { label: 'Teacher', value: 'Teacher' },
    { label: 'Parent', value: 'Parent' },
    { label: 'School', value: 'School' },
  ]
  
  const levelOptions = [
    { label: 'Select Class', value: 0 },
    { label: 'JSS One', value: 'JSS One' },
    { label: 'JSS Two', value: 'JSS Two' },
    { label: 'JSS Three', value: 'JSS Three' },
    { label: 'SSS One', value: 'SSS One' },
    { label: 'SSS Two', value: 'SSS Two' },
    { label: 'SSS Three', value: 'SSS Three' },
    { label: 'Primary One', value: 'Primary One' },
    { label: 'Primary Two', value: 'Primary Two' },
    { label: 'Primary Three', value: 'Primary Three' },
    { label: 'Primary Four', value: 'Primary Four' },
    { label: 'Primary Five', value: 'Primary Five' },
    { label: 'Primary Six', value: 'Primary Six' },
  ]

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Register</h1>
            <p className="lead text-center">Create your Afrilearn account</p>
            <form onSubmit={submitHandler}>

              <SelectListGroup
                placeholder='Role'
                name='role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={roleOptions}
              // error={errors.status}
              // info='Give us an idea of where you are at in your career'
              />

              <SelectListGroup
                placeholder='Level'
                name='level'
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                options={levelOptions}
              // error={errors.status}
              // info='Give us an idea of where you are at in your career'
              />

              <TextFieldGroup
                placeholder='Email Address'
                type='email'
                name='email'
                refInput={emailInput}
              // error='Error'
              />
              
              <TextFieldGroup
                placeholder='Phone Number'
                type='text'
                name='phoneNumber'
                refInput={phoneNumberInput}
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
              
              <TextFieldGroup
                placeholder='Referal Code'
                type='number'
                name='referalcode'
                refInput={referalCodeInput}
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