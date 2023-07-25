import React from "react"
export function Item({description,quantity,packed,id,onDeleteItems,onToggleItems}){
    return (
        <li>
       <input type="checkbox" onClick={()=>onToggleItems(id)}/>
       <span style={{textDecoration:packed?"line-through":"none"}}>{description} {quantity}
       </span> 
       <button onClick={()=>onDeleteItems(id)}>❌</button>
       </li> 
    
    )
}