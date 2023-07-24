import React from "react";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { useState } from "react";
export function App() {
    const [items,setItems]=useState([])
    function handleAddItem(item){
        setItems((items)=>[...items,item])
    }
    function handleDeleteItem(id){
        setItems((items)=>{
            return items.filter(item=>item.id!==id)
        })
    }
    function handleToggleItem(id){
        setItems((items)=>{
            return items.map(item=>{
                return item.id===id?{...item,packed:!item.packed}:item
            })
        })
    }
    return (
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItem}/>
            <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} />
            <Stats/>
        </div>
    );
}
