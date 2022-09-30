import React from 'react';
import Card from './Card';
import { robots } from '../robots';
const CardList = ({robots}) => {
    const cardComponent = robots.map((index, i) =>{
        return <Card 
        key={i}
         id={robots[i].id} name={robots[i].name} email = {robots[i].email}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;