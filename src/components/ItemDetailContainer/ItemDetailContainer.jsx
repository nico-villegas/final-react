import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase.config';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])


    return (
        <section className='container-detail d-flex justify-content-center aling-items-center'>
            {loading && <div className='container-spinner d-flex justify-content-center align-items-center'>
                {<div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
            </div>}
            {!loading && <ItemDetail {...product} />}

        </section>
    )
}

export default ItemDetailContainer
