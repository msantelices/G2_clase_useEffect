import { useState, useEffect } from 'react'

const Infinite = ()=> {
    const [count, setCount] = useState(0)

    const handleClick = ()=> setCount(count + 1)

    useEffect(()=> {
        console.log(count)
    }, [])

    return (
        <button>Click</button>
    )
}

export default Infinite