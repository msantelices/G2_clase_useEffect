import { useState, useEffect } from 'react'

const Count = ()=> {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // useEffect(()=> {
    //     document.title = `You clicked ${ count } times`
    // })

    // useEffect(()=> {
    //     console.log('useEffect en montaje')
    // }, [])

    useEffect(()=> {
        console.log('Contador', count)
    }, [count])

    return (
        <div>
            <p>You clicked { count } times</p>
            <p>Count 2: { count2 }</p>
            <button onClick={()=> setCount(count + 1)}>Click me</button>

            <button onClick={()=> setCount2(count2 + 1)}>Click me - Count 2</button>
        </div>
    )
}

export default Count