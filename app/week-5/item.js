// Item.js
export const Item = ({ name, quantity, category }) => {
    return (
      <li className=" ml-4 mb-2 bg-blue-500 backdrop-brightness-lg scroll-smooth border-black rounded ">
        <p className="font-bold">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </li>
    );
  };
  
 
  