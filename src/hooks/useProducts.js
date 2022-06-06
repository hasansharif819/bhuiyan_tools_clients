import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-bayou-30389.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products];
}

export default useProducts;