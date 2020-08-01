import React from 'react'
import Item from './item';
import Spinner from '../Ui/Spinner';

const grid = ({isloading, result}) => {
    return isloading 
    ? 
    <Spinner/>
    : 
    <section className="cards">
        {result.map((item, key) => <Item key={item.char_id} items={item}/>)}
    </section>
    
}

export default grid
