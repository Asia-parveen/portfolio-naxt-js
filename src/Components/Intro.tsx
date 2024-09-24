'use client';

import React from 'react';
import { headerItem, userInfo } from "../constants/Constants";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';

const Intro: React.FC = () => {
  return (
    <section id={headerItem.home.page}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
    >
      <div>
        <Image
          src={"/assets/comp.jpg.jpg"}
          alt="dp"
          width={300}
          height={400}
          className="rounded-full shadow-3xl mt-10 h-auto"
        />
      </div>
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-7xl uppercase hidden md:block">Software Developer</h1>
        <h1 className="text-2xl mt-2 md:text-3xl">Hi I&#39;m <span className="text-red-600 text-3xl md:text-4xl">{userInfo.name}</span></h1>
        <p 
          className="mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: userInfo.heading }}
        />
        <ScrollLink
          to={headerItem.projects.page}
          className={'bg-teal-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 cursor-pointer'}
          spy={true}
          smooth={true}
        >
          Projects 
        </ScrollLink> 
      </div>    
    </section>
  )
}

export default Intro;



// "use client"

//  import React from 'react'
//  import {headerItem, userInfo} from "../constants/Constants"
//  import Image from "next/image";
//  import { Link as ScrollLink } from 'react-scroll';
 

// const Intro:React.FC = () => {
//   return (
//    <section id={headerItem.home.page}
//    className="h-screen flex  flex-col text-center justify-center items-center md:flex-row md:text-start"
//    >
//     <div>
//       <Image
//        src={"/assets/comp.jpg.jpg"}
     
//        alt="dp"
//       width={300}
//       height={400}
//       className="rounded-full shadow-3xl mt-10"
//       />
      
//     </div>
//     <div className="md:ml-20 sm:ml-12 md:w-1/2">
//       <h1 className="text-7xl uppercase hidden md:block">software Developer</h1>
//       <h1 className="text-2xl mt-5 md:text-3xl">Hi I&#39;m <span className="text-red-600 text-3xl md:text-4xl">{userInfo.name}</span></h1>
//        <p 
//       className="mt-4 mb-4"
//       dangerouslySetInnerHTML={{__html:userInfo.heading}}

//       />
//       <ScrollLink


//                     to={headerItem.projects.page}
//                     className={'bg-teal-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 cursor-pointer'}
//                     spy={true}
//                     smooth={true}
               
//                     >Projects </ScrollLink> 
                  
//       </div>    
//       </section>
//    )
// }

//     export default Intro

