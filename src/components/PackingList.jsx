import React from "react";
import { Item } from "./Item";
import { useState } from "react";
export function PackingList({ items, onDeleteItems, onToggleItems,onClearList}) {
  const [sortBy,setSortBy]=useState("input")
  let sortedItems;
  switch(sortBy){
    case "input": sortedItems=items
        break;
    case "description":sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
        break;
    case "packed":sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed)) 
        break;
    default:
            console.log("err")
            break   
  }  
  return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        quantity={item.quantity}
                        description={item.description}
                        packed={item.packed}
                        onDeleteItems={onDeleteItems}
                        onToggleItems={onToggleItems}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}
