import { useState, useEffect } from 'react'

const API = ()=> {
    const [info, setInfo] = useState("")

    useEffect( ()=> {
        getInfo()
    }, [])

    // const getInfo = async()=> {
    //     const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random'
    //     const res = await fetch(url)
    //     const json = await res.json()

    //     const quote = `"${json.sentence}" - ${json.character.name}`
    //     setInfo(quote)
    // }

    const getInfo = ()=> {
        const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random'
        fetch(url)
            .then((res)=> res.json())
            .then((json)=> {
                const quote = `"${json.sentence}" - ${json.character.name}`
                setInfo(quote)
            })
            .catch((e)=> console.log(e))
    }

    return (
        <p>{ info }</p>
    )
}

export default API