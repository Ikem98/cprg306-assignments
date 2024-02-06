
import {Item} from "./items";

export const GroceryList = () => { 
    
    const groceries = [
    {
      name: "Milks, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
   {
      name: "Bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "Eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "Bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "Broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "Chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
   {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    } ]

  
  return (
    <ul>
      {groceries.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </ul>
  );
      
};

  
  
 
  