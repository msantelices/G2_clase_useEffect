import { useState, useEffect } from 'react'

const Users = ()=> {
    const [allUsers, setAllUsers] = useState([])
    const [users, setUsers] = useState([])
    const [value, setValue] = useState('')

    useEffect(()=> {
        getUsers()
    }, [])

    useEffect(()=> {
        const val = value.toLowerCase()
        
        const filtered = allUsers.filter((user)=> user.name.toLowerCase().includes(val) )
        setUsers(filtered)
    }, [value])

    // const getUsers = async()=> {
    //     const url = 'https://jsonplaceholder.typicode.com/users'
    //     const res = await fetch(url)
    //     const json = await res.json()

    //     setAllUsers(json)
    //     setUsers(json)
    // }

    const getUsers = ()=> {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then((res)=> res.json())
            .then((json)=> {
                setAllUsers(json)
                setUsers(json)
            })
    }

    return (
        <div>
            <input type="text" placeholder="Buscar por nombre" onChange={(e)=> setValue(e.target.value)} />
            <ul>
                {
                    users.map((user)=> {
                        return (
                            <li key={user.id}>{ user.name }</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users