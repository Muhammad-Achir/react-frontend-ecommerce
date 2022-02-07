import { Link } from 'react-router-dom'

function Product (props) {
    const product = props.product
    console.log("ini product " + product)

    return (
        <div className="card col-3 m-3">
            <h4>{product.name}</h4>
            <p>Stock - {product.stock}</p>
            <div>
                <Link to={{pathname: '/product/'+product.id}} className='btn btn-primary mx-auto d-block mb-3'
                >Product Detail</Link>
            </div>
        </div>
    )
}

export default Product