"use client";

import { useState, useEffect } from "react";

export default function NewItem() {
    
const [name, setName] = useState (" ");

const [quantity, setQuantity] = useState(1);

const [category, setCategory] = useState ("produce");


const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item)
    alert(` Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);  
    setName(" ");
    setQuantity(1);
    setCategory("produce");
  };


return (
    <div className="min-h-screen bg-blue-500 ">
        <div className="max-w-screen-sm">
            <form onSubmit= {handleSubmit}>
                <input 
                    type="text"
                    id="name" 
                   value={name} 
                   placeholder="Enter a name here"
                    
                    onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            
                <div>
                    <input 
                 type="number" 
                    id="quantity" 
                 value={quantity} 
                    min="1" max="99" 
                    onChange={(e) => setQuantity(Number(e.target.value))} required 
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm "/>
                </div>
                    
                <div>
                    
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                        <option value="produce">
                            produce
                        </option>
                        <option value="dairy">
                                Dairys
                        </option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-foods">Frozen Foods</option>
                        <option value="canned-goods">Canned Goods</option>
                        <option value="dry-goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                           
                    </select>
                </div>
                <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-700 bg-gray-50 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </div>
     </div>
  );
};

        
   
