import React from 'react'
import './ItemList.css'

const ItemList = ({ item, operation }: any) => {
    return (
        <>
            <div className='carItem'>
                <input className='box' checked={item.checked} id={item.id} value={item.name} type="checkbox" onChange={(e) => operation(item, e.target.checked)} />
                <label htmlFor={item.id}>{item.name}</label>
            </div>
            <div className="id">{item.id}</div>
        </>
    )
}

export default ItemList