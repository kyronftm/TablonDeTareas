import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarTarea() {
    const [Materia, setMateria] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [FechaInicial, setFechaInicial] = useState("");
    const [FechaEntrega, setFechaEntrega] = useState("");
    const [Prioridad, setPrioridad] = useState("");
    const [Notas, setNotas] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/actualizar/${id}`);
                setMateria(response.data.Materia);
                setTitulo(response.data.Titulo);
                setFechaInicial(response.data.FechaInicial);
                setFechaEntrega(response.data.FechaEntrega);
                setPrioridad(response.data.Prioridad);
                setNotas(response.data.Notas);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/actualizar/' + id, { Materia, Titulo, FechaInicial, FechaEntrega, Prioridad, Notas })
          .then(res => {
            console.log(res)
            navigate('/');
          }).catch(err => console.log(err));
      }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='card m-2 w-50 rounded p-3 border-2 border-white' style={{ width: "18rem", backgroundColor: "rgb(30, 30, 30)"}}>
                <form onSubmit={handleSubmit}>
                    <center><h2 style={{color: "white"}}>Actualizar tarea</h2></center>
                    <div className='mb-2'>
                        <label htmlFor=''>Materia</label>
                        <input type='text' className='form-control' placeholder='Ingrese la materia'
                            onChange={(e) => setMateria(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Título</label>
                        <input type='text' className='form-control' placeholder='Ingrese el título de la tarea'
                            onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Fecha Inicial</label>
                        <input type='date' className='form-control' placeholder='Ingrese la fecha inicial'
                            onChange={(e) => setFechaInicial(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Fecha Entrega</label>
                        <input type='date' className='form-control' placeholder='Ingrese la fecha de entrega'
                            onChange={(e) => setFechaEntrega(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Prioridad</label>
                        <select id='prioridad' className='form-control' value={Prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                            <option value='Alta'>Alta</option>
                            <option value='Moderada'>Moderada</option>
                            <option value='Baja'>Baja</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Notas</label>
                        <input type='text' className='form-control' placeholder='Ingrese alguna nota en caso de haberla'
                            onChange={(e) => setNotas(e.target.value)} />
                    </div>
                    <center><button className='btn btn-success'>Actualizar</button></center>
                </form>
            </div>
        </div>
    )
}

export default ActualizarTarea;