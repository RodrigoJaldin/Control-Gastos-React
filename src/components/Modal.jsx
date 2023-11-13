import React from 'react'
import { useState,useEffect } from 'react'

import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'
const Modal = ({ setModal, animarModal, setAnimarModal ,guardarGasto,gastoEditar,setGastoEditar}) => {

  const [mensaje, setMensaje] = useState('')

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
  },[])

  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }
    guardarGasto({nombre, cantidad, categoria,id,fecha})
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt="cerrar modal"
          onClick={ocultarModal}
        />
      </div>
      <form action="" className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? 'Editar Gasto':'Nuevo Gasto'}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder='Nombre del Gasto' />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input id="cantidad"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder='Cantidad' />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
          <select name="" id="categoria"
            value={categoria}
            onChange={(e) => setCategoria((e.target.value))}
          >
            <option value="">Escoja una Categoria</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
            <option value="gastos">Gastos Varios</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <input type="submit"
          value={gastoEditar.nombre ? 'Editar Gasto':'Guardar Gasto'}
        />
      </form>
    </div>
  )
}

export default Modal
