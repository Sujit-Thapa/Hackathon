'use client'
import React, { useState } from "react";

interface InventoryItem {
  id: number;
  name: string;
  stock: number;
}

export default function Inventory() {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: 1, name: "Seeds", stock: 100 },
    { id: 2, name: "Fertilizer", stock: 50 },
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemStock, setNewItemStock] = useState(0);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: newItemName,
      stock: newItemStock,
    };
    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemStock(0);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h3>Inventory List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.stock} in stock
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newItemStock}
          onChange={(e) => setNewItemStock(Number(e.target.value))}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}
