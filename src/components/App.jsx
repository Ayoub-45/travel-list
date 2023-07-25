import React from "react";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { useState } from "react";
export function App() {
    const [items, setItems] = useState([]);
    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }
    function handleDeleteItem(id) {
        setItems((items) => {
            return items.filter((item) => item.id !== id);
        });
    }
    function handleToggleItem(id) {
        setItems((items) => {
            return items.map((item) => {
                return item.id === id
                    ? { ...item, packed: !item.packed }
                    : item;
            });
        });
    }
    function handleClearList() {
        const confirmed = window.confirm(
            "Are your sure you want to delete all items ?"
        );
        if (confirmed) setItems([]);
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItem}
                onToggleItems={handleToggleItem}
                onClearList={handleClearList}
                setItems={setItems}
            />
            <Stats items={items} />
        </div>
    );
}
