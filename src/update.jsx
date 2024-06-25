import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
function Update() {
  const { id } = useParams();
    const [values, setValues] = useState({
      name: '',
      email: '',
      number: ''
  })
  const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => {
              setValues(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleUpdate = (event) => {
      event.preventDefault();
      axios.put('http://localhost:3000/users/'+id, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light ">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Users ma'lumotlarini o'zgartirish</h1>
            <form onSubmit={handleUpdate} >
                <div className="mb-2">
                    <label htmlFor="name">Ism:</label>
                    <input type="text" name="name" className="form-control" placeholder="Ismingizni kiriting" 
                    value={values.name} onChange={e => setValues({...values, name: e.target.value})}  />
                </div>
                <div className="mb-2">
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Emailingizni kiriting"
                    value={values.email} onChange={e => setValues({...values, email: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Telefon raqam:</label>
                    <input type="text" name="number" className="form-control" placeholder="Telefon raqamingizni kiriting" 
                    value={values.number} onChange={e => setValues({...values, number: e.target.value})}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Tug'ilgan joyi</label>
                    <input type="text" name="tugilganJoyi" className="form-control" placeholder="Telefon raqamingizni kiriting" 
                    value={values.tugilganJoyi} onChange={e => setValues({...values, numbtugilganJoyier: e.target.value})}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Millati</label>
                    <input type="text" name="millati" className="form-control" placeholder="Telefon raqamingizni kiriting" 
                    value={values.millati} onChange={e => setValues({...values, millati: e.target.value})}  />
                </div>
                <button className="btn btn-success" >Saqlash</button>
                <Link to="/" className='btn btn-primary ms-3'>Chiqish</Link>
            </form>
        </div>
    </div>
  )
}

export default Update