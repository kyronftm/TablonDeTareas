import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearTarea() {
    const [Materia, setMateria] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [FechaInicial, setFechaInicial] = useState("");
    const [FechaEntrega, setFechaEntrega] = useState("");
    const [Prioridad, setPrioridad] = useState("");
    const [Notas, setNotas] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/crear', { Materia, Titulo, FechaInicial, FechaEntrega, Prioridad, Notas })
            .then(res => {
                console.log(res);
                setMensaje("Tarea creado exitosamente, ponte a chambear");
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='card m-2 w-50 rounded p-3 border-2 border-white' style={{ width: "18rem", backgroundColor: "rgb(30, 30, 30)"}}>
                <form onSubmit={handleSubmit}>
                    <center><h2 style={{color: "white"}}>Agregar tarea</h2></center>
                    <div className='mb-2'>
                        <label htmlFor=''>Materia</label>
                        <input type='text' className='form-control' placeholder='Ingrese la materia'
                            value={Materia} onChange={(e) => setMateria(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Título</label>
                        <input type='text' className='form-control' placeholder='Ingrese el título de la tarea'
                            value={Titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Fecha Inicial</label>
                        <input type='date' className='form-control' placeholder='Ingrese la fecha inicial'
                            value={FechaInicial} onChange={(e) => setFechaInicial(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Fecha Entrega</label>
                        <input type='date' className='form-control' placeholder='Ingrese la fecha de entrega'
                            value={FechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)} />
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
                            value={Notas} onChange={(e) => setNotas(e.target.value)} />
                    </div>
                    <center><button className='btn btn-success'>Guardar</button></center>
                    {mensaje && <p className="text-success mt-2">{mensaje}</p>}
                </form>
            </div>
        </div>
    )
}

export default CrearTarea;