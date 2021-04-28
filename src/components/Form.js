import React, { useState } from 'react'
import axios from 'axios'

const Form = props => {
    const [username, setUsername] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        
        console.log("Username is: " + username)

        const requestUrl = 'https://api.github.com/users/' + username

        axios.get(requestUrl)
        .then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Github username"
              value={username}
              onChange={event => setUsername(event.target.value)}

              required
            /> 

            <button type="submit">Add Card</button>
        </form>
    )
}

export default Form