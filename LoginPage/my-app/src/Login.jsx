
import React, { useState } from 'react'

const [info, setInfo] = useState[{
    name: '',
    password: '',
    confirm_password: '',
    email: '',
}]
const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);
    setInfo({name:'', password:'', confirm_password:'',email:''});
};
const Login = () => {
    return (
        <div>
            <form>
                <h3>Information Form</h3>
                <label>
                    Name:
                    <input type='text' name='name' placeholder='Enter your name' value={info.name} />
                </label>
                <br />
                <label>
                    Password:
                    <input type='password' name='password' placeholder='Enter your password' value={info.password} />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input type='password' name='cpassword' placeholder='Re-enter your password' value={info.confirm_password} />
                </label>
                <br />
                <label>
                    Email:
                    <input type='email' name='email' placeholder='Enter your Email' value={info.email} />
                </label>
                <br />
                <br />
                <button>Submit</button>

            </form>
        </div>

    )
}

export default Login
