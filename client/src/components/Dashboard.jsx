import React,{ useEffect,useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Dashboard = ()=>{
    const [form,setForm] = useState({amount:'',description:''})
    const [expenses,setExpenses] = useState([])

    const token = localStorage.getItem('token');

    const fetchExpenses = async ()=>{
        const res = await axios.get('http://localhost:5000/api/expenses',{
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
        await axios.post('http://localhost:5000/api/expenses',form,{
            headers:{Authorization:token},
        })
        setForm({amount:'', description:''})
        fetchExpenses();
    }

    const deleteExpense = async (id)=>{
        await axios.delete(`http://localhost:5000/api/expenses/${id}`,{
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
            <h2>Dashboard</h2>
            <button onClick={handleLogout} style={{float:'right'}}>Logout</button>
             <h3>Total Spent: ₹{total}</h3>
           
            <form onSubmit={handleSubmint}>
            <input
            name='amount'
            type='number'
            placeholder='Enter Amount'
            value={form.amount}
            onChange={handleChange}
            required
             />
             <br />
             <input
             name='description'
             placeholder='Enter Description'
             value={form.description}
             onChange={handleChange}
             required
              />
              <br />
              <button type='submit'>Add</button>
            </form>
             <ul>
                {expenses.map((item) => (
                    <li key={item._id}>
                        ₹{item.amount} - {item.description} ({new Date(item.date).toLocaleString()})
                        <button onClick={()=> deleteExpense(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
           
        </div>
        </>
    )
}

export default Dashboard;