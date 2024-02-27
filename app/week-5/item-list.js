"use client";
import { useState, useEffect } from "react";
import { Item } from "./item"; 
import itemsData from './items.json'; 

export const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        
        const sorted = [...itemsData].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0; 
        });
        setSortedItems(sorted);
    }, [sortBy]); 

    return (
        <div>
            <button
                onClick={() => setSortBy('name')}
                style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
            >
                Sort by Namee
            </button>
            <button
                onClick={() => setSortBy('category')}
                style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
            >
                Sort by Category
            </button>
            <ul>
                {sortedItems.map(item => (
                    <Item
                        key={item.id} 
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
};
