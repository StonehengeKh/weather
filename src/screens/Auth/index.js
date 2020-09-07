import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import './style.css'
import {getUser} from '../../redux/actions/auth';
import {selectAuth} from '../../redux/selectors/auth';

function Auth({getUser, user}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isMessage, setIsMessage] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')

    const onChangeLogin = (event) => {
        let login = event.target.value
        if (login.length >= 6 && login.length <= 100) {
            setLogin(login)
            setLoginMessage('')
        }
        if (login.length < 6) {
            setLoginMessage('Your login is short, need min 6 symbols')
            setLogin('')
        }
        if (login.length > 100) {
            setLoginMessage('Your login is too long, need max 100 symbols')
            setLogin('')
        }
        if (login.length === 0) {
            setIsMessage(false)
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const userInfo = {
        login: login,
        password: password
    }

    const signInOrMessage = () => {
        if (login !== '' && password !== '') {
            getUser(userInfo)
            setIsMessage(false)
        } else {
            setIsMessage(true)
        }
    }

    if (user.hasOwnProperty('name')) {
        return <Redirect to="/weather"/>
    }

    return (
        <section className='authContainer'>
            <div className='inputContainer'>
                <label>Your login </label>
                <input type='text' placeholder='login' name='login' onChange={onChangeLogin}/>
            </div>
            <div className='inputContainer'>
                <label>Your password </label>
                <input type='password' placeholder='password' name='password' onChange={onChangePassword}/>
            </div>
            <button onClick={signInOrMessage} className='signInBtn'>Sign in</button>
            {isMessage && <span className='loginMessage'>{loginMessage}</span>}
        </section>
    )
}

const mapStateToProps = (state) => ({
    user: selectAuth(state)
})

const mapDispatchToProps = {
    getUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)