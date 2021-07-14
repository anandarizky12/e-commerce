import Products from "../Products/Products";
import Banner from "../Banner/Banner";


import React from 'react'

function Home({products, loading}) {
    return (
        <div>
            <Banner/>
            <Products products={products} loading={loading}/>
        </div>
    )
}

export default Home
