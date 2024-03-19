import Link from "next/link";
export default function Page() {
  return (
    <main className= "min-h-screen  ">
       <h1 className="text-4xl text-blue-600 flex justify-center">
        
        CPRG 306: Web Development 2 - Assignments</h1>
       
        <div className="italic text-2xl flex justify-center"> <Link href="./week-2" > week-2 page</Link></div> 
        <div className="italic text-2xl flex justify-center"> <Link href="./week-3" > week-3 page</Link></div>  
        <div className="italic text-2xl flex justify-center"> <Link href="./week-4" > week-4 page</Link></div> 
        <div className="italic text-2xl flex justify-center"> <Link href="./week-5" > week-5 page</Link></div>
        <div className="italic text-2xl flex justify-center"> <Link href="./week-6" > week-6 page</Link></div>
        <div className="italic text-2xl flex justify-center"> <Link href="./week-7" > week-7 page</Link></div>
        <div className="italic text-2xl flex justify-center"> <Link href="./week-8" > week-8 page</Link></div> 
        
      
         
    </main>
  );
}

