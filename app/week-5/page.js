
import {ItemList} from "./item-list"

export default function Page() {
    return (
      <main className="h-56 grid-cols-3 gap-4 min-h-screen   ">
        <h1 className="text-4xl ">
  
          Shopping List
          
  
        </h1>
       
        <ItemList/>
        
  
      </main>
    );
  }
  
  






// export const page = () => {

//     return (

//         <main>
//             <h1>
//                 Shopping List
//             </h1>
//             <GroceryList/>
//         </main>
//     )
// }