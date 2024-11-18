
import React from "react";
import Link from "next/link";

 const Page = () =>{
    return(
        <div>
               <h1>Student List</h1>
               <b />
               <ul>
                <li><Link href="studentList/AFSHAN">AFSHAN</Link></li>
                <li><Link href="studentList/FIZA">FIZA</Link></li>
                <li><Link  href="studentList/HOMA">HOMA</Link></li>
                <li><Link href="studentList/SANA">SANA</Link></li>
               </ul>
        </div>
    );
}
export default Page