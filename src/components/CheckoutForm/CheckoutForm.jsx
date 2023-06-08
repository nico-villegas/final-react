import React, { useState } from 'react'

const CheckoutForm = ( onConfirm ) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }
        onConfirm(userData)
    }

    return (
        <div className="container">
            <form className="row g-3 m-3">
                <div className="col-6">
                    <label className="form-control">
                        Nombre
                        <input 
                            className="form-control" 
                            type="text" 
                            value={nombre}
                            onChange={({ target }) => setNombre(target.value)}
                            placeholder="Nombre" 
                        />
                    </label>
                </div>
                <div className="col-6">
                    <label className="form-control">
                        Telefono
                        <input 
                            className="form-control" 
                            type='number'
                            value={telefono}
                            onChange={({ target }) => setTelefono(target.value)}
                            placeholder="Telefono" 
                        />
                    </label>
                </div>
                <div className="col-6">
                    <label className="form-control">
                        Email
                        <input 
                            className="form-control" 
                            type="email" 
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="Ej: email@email.com" 
                        />
                    </label>
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary" onClick={handleConfirm}>
                        Crear orden
                    </button>
                </div> 
            </form>
        </div>
    )
}

export default CheckoutForm
