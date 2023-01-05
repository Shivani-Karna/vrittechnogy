
import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errorMessagge, setErorMessage] = useState('');
    const handleUserName = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, username: value })
    };

    const [password, setPassword] = useState('');
    const handleUserPassword = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, password: value })
    };
    const [cpassword, setcPassword] = useState('');
    const handleConfirmPassword = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, cpassword: value })
    }

    const [isEnabled, setisEnabled] = useState(false);


    // const onSubmit = () => {
    //     alert('I am always will be here');
    // };


    // const handleUserName = (event) => {
    //     console.log(event.target.value);
    //     setUsername(event.target.value);
    // };
    // console.log(username, 'username')
    // const handleUserPassword = (value) => {
    //     console.log(event.target.value);
    //     setPassword(event.target.value);
    // };
    // const handleConfirmPassword = ({ target: { value } }) => {
    //     setConfirmPassword(value);

    // };
    const handleSubmit = (e) => {
        userInfo.username !== '' && userInfo.password !== ''
            ? alert(
                password === cpassword
                    ? alert('Data Submiteed')
                    : ('Password must match')
                        ? alert('Fill Data')
                    
            : alert('Fill Data')
    };
    return (

        <div>
            <label>User Name: </label>
            <input
                type="text"
                id="user_input"
                placeholder="Username"
                onChange={handleUserName}
                value={username}
            />
            <br />
            <br />
            <label>Password: </label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleUserPassword}
                value={password}
            />
            <br />
            <br />
            <label>Confirm password:</label>
            <input
                type='password'
                id='confirmPassword'
                placeholder='confirm_password'
                value={cpassword}
            // onchange={handleConfirmPassword}
            />
            <br />
            <br />
            <button type="submit" onClick={handleSubmit}>
                Register
            </button>

        </div>
    );
};

export default RegistrationForm;