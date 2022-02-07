import { useState } from 'react'

function AddProduct() {
    const [addProduct, setAddProduct] = useState({
        name: '',
        stock: '',
        price: '',
        category: ''
    })

    function onChange(e) {
        setAddProduct((oldValue => {
            return { ...oldValue, [e.target.id]: e.target.value }
        }))
    }

    function saveProduct(e) {
        e.preventDefault()

        fetch('http://localhost:8080/api/product/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(response => {
                return response.text()
            })
            .then(data => {
                console.log(data)

                setAddProduct({
                    name: '',
                    stock: '',
                    price: '',
                    category: ''
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="m-3">
            <form onSubmit={saveProduct} role="login">
                {/* <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" /> */}
                <h4>Add Product</h4>
                <input id="name" type="text" name="name" placeholder="Product Name" required className="form-control input-lg" value={addProduct.name} onChange={onChange} />

                <input id="stock" type="number" className="form-control input-lg" placeholder="Stock" value={addProduct.stock} onChange={onChange} />

                <input id="price" type="number" className="form-control input-lg" placeholder="Price" value={addProduct.price} onChange={onChange} />

                <input id="category" type="text" className="form-control input-lg" placeholder="Category" value={addProduct.category} onChange={onChange} />


                <div className="pwstrength_viewport_progress"></div>
                <button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Register
                </button>

            </form>
        </div>
    )
}

export default AddProduct