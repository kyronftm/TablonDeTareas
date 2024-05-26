import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css';

function Tarea() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setTareas(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/estudiante/` + id);
            setTareas(tareas.filter(estudiante => estudiante.id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="container mb-5 mt-5">
                <h1 className="titule text-center border border-2 rounded-2">
                    <h1 style={{display: "inline-block", borderBottom: "3px solid darkgrey"}}>
                        <p>TABLÓN DE TAREAS</p>
                    </h1>
                </h1>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-wrap w-75'>
                    {tareas.map(tarea => (
                        <div key={tarea.id} className="card m-2" style={{ width: "18rem" }}>
                            <div className="card-body d-flex flex-column align-items-center bg-image">
                                <p className="card-title mt-4"><strong>Materia: </strong>{tarea.Materia}</p>
                                <p className="card-title"><strong>Título: </strong>{tarea.Titulo}</p>
                                <p className="card-text"><strong>Fecha Inicial: </strong>{tarea.FechaInicial}</p>
                                <p className="card-text"><strong>Fecha Entrega: </strong>{tarea.FechaEntrega}</p>
                                <p className="card-text"><strong>Prioridad: </strong>{tarea.Prioridad}</p>
                                <p className="card-text"><strong>Notas: </strong>{tarea.Notas}</p>
                                <div className="botones d-flex flex-row">
                                    <Link to={`/actualizar/${tarea.id}`} className="btn btn-primary">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <button onClick={() => handleDelete(tarea.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default Tarea;
