import React from 'react'

function Card(props){
    return(
        <div className="card">
            <img className='img' src={props.data.avatar_url}/>
            <h2>{props.data.login}</h2>
        </div>
    )
}
export default Card;