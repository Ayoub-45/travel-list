import React from "react"
export function Item({description,quantity,packed,id,onDeleteItems,onToggleItems}){

function handleClick(){
    onDeleteItems(id)
}
    return (
        <li>
       <input type="checkbox" onClick={()=>onToggleItems(id)}/>
       <span style={{textDecoration:packed?"line-through":"none"}}>{description} {quantity}
       </span> 
       <button onClick={handleClick}>❌</button>
       </li> 
    
    )
}