import { useState, useEffect } from 'react'

const Filtros = ({filtros,setFiltros}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form action="">
                <div className='campo'>
                    <label htmlFor="">Filtrar Gastos</label>
                    <select 
                    value={filtros}
                    onChange={e=>setFiltros(e.target.value)}
                    >
                        <option value="">Todas las Categorias</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="salud">Salud</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="casa">Casa</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
