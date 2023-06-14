import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const mostrarBoton = nombre !== '' && email !== '' && telefono !== ''

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div className="container-form">
            <form onSubmit={handleConfirm} className="form row g-3 m-3 ">
                <div className="col-12">
                    <label className="form-control container-form-control ">
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
                <div className="col-12">
                    <label className="form-control container-form-control">
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
                <div className="col-12">
                    <label className="form-control container-form-control">
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
                <div>
                    <button id='btn-create-order' type="submit" className="btn btn-primary" disabled={!mostrarBoton}>
                        Crear orden
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
