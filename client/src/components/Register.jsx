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
            
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,form)
            // alert(res.data.msg)
            nevigate('/login')

        } catch (err) {
            alert(err.response.data.msg || 'Error');
        }

    }

    return(
        <div className="flex h-screen items-center justify-center bg-grey-300 ">
            <form onSubmit={handleSubmit} className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                <h2 className='text-2xl font-semibold mb-5 text-center'>Registration</h2>
                <label htmlFor="" className='block mb-2 font-semibold mt-4'>Username</label>
                <input name='name' placeholder='Enter your name' onChange={handleChange} required 
                className="w-full p-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <br />
                <label htmlFor="" className='block mb-2 font-semibold mt-4'>Email</label>
                <input name='email' placeholder='Enter your email' type='email' onChange={handleChange} required 
                className="w-full p-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <br />
                <label htmlFor="" className='block mb-2 font-semibold mt-4'>Password</label>
                <input name='password' placeholder='Enter your password' onChange={handleChange} required
                className="w-full p-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type='password'/>
                <br />
                <button type='submit' className='w-full text-center font-semibold bg-blue-600 mt-4 p-2 text-white rounded-xl focus:ring-2 hover:bg-blue-900 duration-300 transition transform active:scale-95'>Register</button>
                <p className='mt-4'>Aleady Registered? <Link to="/login" className='underline text-blue-500'>login</Link></p>
            </form>
        </div>
    )
}

export default Register;