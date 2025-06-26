import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ()=>{

    const [form,setForm] = useState({email:"",password:""})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})

    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,form);
            localStorage.setItem('token',res.data.token)
            navigate('/dashboard')
            // alert('Login successful!'); 
        } catch (err) {
            alert(err.response.data.msg || 'Error logging in');
        }
    }

    return(
        <div className="flex h-screen items-center justify-center bg-grey-300">
            <form onSubmit={handleSubmit} className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                <h2 className='text-2xl font-semibold mb-5 text-center'>Login</h2>
                <label htmlFor="" className='block mb-2 font-semibold mt-4'>Email</label>
                <input name='email' placeholder='Enter your Email' type='email' onChange={handleChange} required 
                className="w-full p-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <br />
                <label htmlFor="" className='block mb-2 font-semibold mt-4'>Password</label>
                <input name='password' type='password' placeholder='Enter your Password' onChange={handleChange} required
                className="w-full p-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <br />
                <button type='submit' className='w-full text-center font-semibold bg-blue-600 mt-4 p-2 text-white rounded-xl focus:ring-2 hover:bg-blue-900 duration-300 transition transform active:scale-95'>Login</button>
                <p className='mt-4'>Not Registered Yet? <Link to="/" className='underline text-blue-500'>Register</Link></p>
            </form>
        </div>
    )
}
export default Login;