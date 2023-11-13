import {useState} from 'react'
import Mensaje from './Mensaje' 
const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPresupuesto}) => {
     
const [mensaje, setMensaje] = useState('')

const handlePresupuesto = (e)=>{
    e.preventDefault()
    if(presupuesto < 1 || isNaN(presupuesto)){
       
        setMensaje('El presupuesto debe ser valido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)

}
  return (

    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label >Definir Presupuesto</label>
            <input className='nuevo-presupuesto' 
            type='number' 
            placeholder='Agrega tu presupuesto'
            value={presupuesto}
            onChange={(e)=>{setPresupuesto(Number(e.target.value))}}

             />
        </div>
        <input type="submit" value="Agregar"
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
