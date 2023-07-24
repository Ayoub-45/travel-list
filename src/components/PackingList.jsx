import React from "react"
import { Item } from "./Item"
export function PackingList({items,onDeleteItems,onToggleItems}) {
    return (
        <div className="list">
        <ul>
         {items.map(item=>
                 <Item key={item.id} id={item.id} quantity={item.quantity} description={item.description} packed={item.packed} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems}/>
                )}
            </ul>
        </div>
    )
}
