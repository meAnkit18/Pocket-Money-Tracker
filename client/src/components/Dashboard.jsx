import React,{ useEffect,useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const token = localStorage.getItem('token')
let user = null;

if (typeof token === 'string' && token.trim() !== '') {
  try {
    user = jwtDecode(token);
  } catch (err) {
    console.error('Invalid JWT:', err.message);
  
    localStorage.removeItem('token');
    
  }
} else {
  console.warn('No valid token found');
  
}

const userName = user?.name || 'Guest';



const Dashboard = ()=>{
    const [form,setForm] = useState({amount:'',description:''})
    const [expenses,setExpenses] = useState([])

    const token = localStorage.getItem('token');

    const fetchExpenses = async ()=>{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/expenses`,{
            headers:{Authorization:token},
        })
        setExpenses(res.data);
    }

    useEffect(()=>{
        fetchExpenses();
    },[])

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmint = async (e)=>{
        e.preventDefault()
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/expenses`,form,{
            headers:{Authorization:token},
        })
        setForm({amount:'', description:''})
        fetchExpenses();
    }

    const deleteExpense = async (id)=>{
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/expenses/${id}`,{
            headers:{Authorization:token},
        })
        fetchExpenses();
    }

    const navigate = useNavigate();

    const handleLogout =()=>{
        localStorage.removeItem('token')
        navigate('/login');
    }

    const total = expenses.reduce((sum,item)=>sum + item.amount,0);

    return(
        <>
        <div>
            <div className='flex justify-between items-center'>
            <h2 className='mt-4 font-semibold text-2xl'>Hii, <span className="text-3 font-semibold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text inline-block">{userName}</span> 😃</h2>
            <button onClick={handleLogout} style={{float:'right'}} className="text-red-500">Logout</button>
            </div>
            <div className='bg-yellow-100 mb-4 text-2xl w-.15 rounded-full p-3 mt-3 text-center border-2' style={{float:'right'}}>
             <h3 >Total Spent: <span className='text-red-500 font-bold'>₹{total}</span></h3>

            </div>
           
            <form onSubmit={handleSubmint}>
            <input
            name='amount'
            type='number'
            placeholder='Enter Amount'
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             <br />
             <input
             name='description'
             placeholder='Enter Description'
             value={form.description}
             onChange={handleChange}
             className="w-full p-3  border border-grey-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
             required
              />
              <br />
              <button type='submit' className='bg-green-500 text-white w-full text-2xl font-semibold p-1 rounded '>Add</button>
            </form>
            <h2 className='text-2xl font-semibold text-center shadow-lg rounded-b-full mt-5'>Record</h2>
             <ul className='mt-3 bg-gray-100 rounded'>
                {expenses.map((item) => (
                    <li key={item._id} className='p-2 text-center'>
                        <span className='text-green-500' style={{float:'left'}}>₹{item.amount} </span>  {item.description} ({new Date(item.date).toLocaleString()})
                        <button onClick={()=> deleteExpense(item._id)} className='bg-black-500 rounded p-1' style={{float:'right'}} >⛔</button>
                    <hr />
                    </li>
                ))}
            </ul>
           
        </div>
        
        </>
    )
}

export default Dashboard;