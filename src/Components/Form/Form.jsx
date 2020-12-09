import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './Form.css'

export default ({ handleSubmit, handleChange, novaTarefa}) => {
    return( 
        <>
            <form action="#" className="form" onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    value={novaTarefa}
                    />
                <button type="submit">  <FaPlus /></button>
            </form>
        </>
    )
}