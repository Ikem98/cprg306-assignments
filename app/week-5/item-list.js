"use client";
import { useState, useEffect } from "react";
import { Item } from "./item"; // Adjust the path as necessary
import itemsData from './items.json'; // Ensure the path to your JSON file is correct

export const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        // Sorting logic inside useEffect to react on sortBy changes
        const sorted = [itemsData].sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0; // Add a default return in case none of the conditions match
        });
        setSortedItems(sorted);
    }, [sortBy]); // Dependency array ensures sorting runs on sortBy changes

    return (
        <div>
            <button
                onClick={() => setSortBy('name')}
                style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
            >
                Sort by Name
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
                        key={item.id} // Ensure your items have a unique 'id' property
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
};
