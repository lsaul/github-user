import React from 'react'
import '../styles/card.css'

export const Card = props => {
    return(
        <div style={{margin: '1em'}} >
            <img alt="avatar" style={{ width: '70px'}} src={props.avatar_url} />
            <div>
                <div className="user-name">{props.login}</div>
                <div>{props.blog}</div>
                <div>{props.html_url}</div>
            </div>

        </div>

    )
}



 const CardList = props => (
    <div>
        {props.cards.map((card, index) =>(
            <Card key={index} {...card} />
        ))}
    </div>
)
 export default CardList
