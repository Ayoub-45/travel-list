import React from "react"
import { initialItems } from "../items"
import { Item } from "./Item"
export function PackingList() {
    return (
        <div className="list">
        <ul>
         {initialItems.map(item=>
                 <Item key={item.id} quantity={item.quantity} description={item.description} packed={item.packed}/>
                )}
            </ul>
        </div>
    )
}
