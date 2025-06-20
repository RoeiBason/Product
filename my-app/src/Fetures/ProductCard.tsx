import React, { FC } from 'react';
import './product-card.css'

interface Props {
    name: string;
    price: number;
    imageUrl: string;
}


const ProductCard: FC<Props> = ({ name, price, imageUrl }) => {
    return <div className='card'>
        <div className='cardInfo'><p>{name}</p>
        <p>{price}</p></div>
        <img className='image' src={imageUrl}></img>
    </div>
}

export default ProductCard;