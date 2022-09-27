import { useState, useEffect } from "react";

const Input = ()=> {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    useEffect(()=> {
        console.log( value.toUpperCase() )
    }, [value, value2])

    useEffect(()=> {
        console.log( value2.toLowerCase() )
    }, [value2])

    return (
        <div>
            <input type="text" onChange={(e)=> setValue(e.target.value)} />
            <input type="text" onChange={(e)=> setValue2(e.target.value)} />
        </div>
    )


}

export default Input