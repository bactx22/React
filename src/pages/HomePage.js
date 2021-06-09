import React from 'react'
import Products from '../components/Products'

const HomePage = (props) => {
    console.log(props.products)
    return (
        <div>
            <Products {...props}/>
        </div>
    )
}

export default HomePage
