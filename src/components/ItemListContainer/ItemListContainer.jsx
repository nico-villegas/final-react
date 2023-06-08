import './ItemListContainer.css'
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase.config';

const Itemlistcontainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


    return (
        <div className='item-list-container'>
           {/*  <h1>{greeting}</h1> */}
            {loading && <h1>Cargando...</h1>}
            {!loading &&  products.length > 0 && <ItemList products={products}/>}
            
        </div>
    );
};

export default Itemlistcontainer;