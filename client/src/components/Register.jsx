import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = ()=>{
    const [form,setForm] = useState({name:"",email:"",password:""})
    const nevigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            
            const res = await axios.post('http://localhost:5000/api/auth/register',form)
            // alert(res.data.msg)
            nevigate('/login')

        } catch (err) {
            alert(err.response.data.msg || 'Error');
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <input name='name' placeholder='Enter your name' onChange={handleChange} required />
                <br />
                <input name='email' placeholder='Enter your email' onChange={handleChange} required />
                <br />
                <input name='password' placeholder='Enter your password' onChange={handleChange} required />
                <br />
                <button type='submit'>Register</button>
                <p>Aleady Registered? <Link to="/login">login</Link></p>
            </form>
        </div>
    )
}

export default Register;