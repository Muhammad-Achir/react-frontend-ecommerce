import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setProductDetail } from '../store/actions'

function ProductDetail() {
    const { id } = useParams()
    // const [ product, setProduct ] = useState ({})
    const dispatch = useDispatch ()
    const product = useSelector (state => state.productDetail)

    useEffect(() => {
        fetch('http://localhost:8080/api/product/' + id, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
        .then (response => {
            return response.json ()
        })
        .then (data => {
            // setProduct (data)
            // dispatch ({type: 'SET_PRODUCT_DETAIL', payload: data})
            dispatch (setProductDetail (data))
        })
        .catch (err => {
            console.log (err)
        })
    }, [])

    return (
        <div className='card p-3 m-4'>
            <h4>{product.name}</h4>
            <p>Category - {product.category}</p>
            <p>Stock - {product.stock}</p>
            <p><strong>Price - {product.price}</strong></p>
        </div>
    )
}

export default ProductDetail