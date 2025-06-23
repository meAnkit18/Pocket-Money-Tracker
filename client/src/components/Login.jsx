import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

    const [form,setForm] = useState({email:"",password:""})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})

    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login',form);
            localStorage.setItem('token',res.data.token)
            navigate('/dashboard')
            // alert('Login successful!'); 
        } catch (err) {
            alert(err.response.data.msg || 'Error logging in');
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input name='email' placeholder='Enter your Email' onChange={handleChange} required />
                <br />
                <input name='password' placeholder='Enter your Password' onChange={handleChange} required />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login;