import React from 'react';

const Card = (props) => {
    return(
        
        <div className = 'tc bg-light-green br dib pa3  ma2 grow bw1 shadow-5'>
            <img alt="card" src ={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <pa>{props.email}</pa>
            </div>
        </div>
    );
}

export default Card;