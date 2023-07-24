import React from "react"
export function Item({description,quantity,packed}){
    return (
       <li>
       <span style={{textDecoration:packed?"line-through":"none"}}>{description} {quantity}
       </span> 
       <button>❌</button>
       </li> 
    )
}