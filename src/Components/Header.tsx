'use client';
import { userInfo, headerItem } from '@/constants/Constants';
import { NavItems } from '@/models/Header';
import { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
    const [navItem, showNavItems] = useState<boolean>(true);
    
    return (
        <header className='bg-white p-4 justify-between fixed top-0 w-full z-10 md:flex'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
                <LuMenu size={30} className="md:hidden" onClick={() => showNavItems(prevState => !prevState)} />
            </div>
            <div className={`mr-8 md:space-x-6 font-bold mt-6 md:mt-0 md:flex ${navItem ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItem).map(item => (
                        <ScrollLink 
                            to={headerItem[item as keyof NavItems].page} 
                            key={headerItem[item as keyof NavItems].label}
                            className="block md:inline-block cursor-pointer"
                            spy={true}
                            smooth={true}
                        >
                            {headerItem[item as keyof NavItems].label}
                        </ScrollLink>
                    ))
                }
            </div>
        </header>
    );
};

export default Header;





// "use client";
// // import React from 'react'
// import { userInfo, headerItem } from "@/constants/Constants";
// import { NavItems } from "@/models/Header";
// import { useState } from "react";
// import { LuMenu } from "react-icons/lu";
// import { Link as ScrollLink } from "react-scroll";

// const Header: React.FC = () => {
//   const [navItem, showNavItems] = useState<boolean>(true);
//   return (
//     <header className='bg-white p-4 fixed top-0 w-full z-10 flex items-center justify-between'>
//     <div className='flex justify-between w-full'>
//         <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
//         <LuMenu 
//             size={30} 
//             className="md:hidden cursor-pointer"
//             onClick={() => showNavItems(prevState => !prevState)} 
//         />
//     </div>
//     <div className={`mr-8 mt-6 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 font-bold ${navItem ? 'block' : 'hidden md:block'}`}>
//         {
//             Object.keys(headerItem).map(item => (
//                 <ScrollLink 
//                     to={headerItem[item as keyof NavItems].page} 
//                     key={headerItem[item as keyof NavItems].label}
//                     className="block md:inline-block cursor-pointer"
//                     spy={true}
//                     smooth={true}
//                 >
//                     {headerItem[item as keyof NavItems].label}
//                 </ScrollLink>
//             ))
//         }
//     </div>
// </header>


    // <header className="bg-white p-4 justify-between fixed top-0 w-full z-10 md:flex">
    //   <div className="flex justify-between">
    //     <h2 className="text-2xl font-bold">{userInfo.name}</h2>
    //     <LuMenu
    //       size={30}
    //       className="md:hidden cursor-pointer"
    //       onClick={() => showNavItems((prevState) => !prevState)}
    //     />
    //     {/* <LuMenu size={30} className="md:hidden"
    //     onClick={() => showNavItems(prevState => !prevState)} 
    //     /> */}
    //   </div>
    //   <div
    //     className={`mr-8 md:space-x-6 font-bold mt-6 md:mt-0 md:block  ${
    //       navItem ? "block" : "hidden"
    //     }`}
    //   >
    //     {Object.keys(headerItem).map((item) => (
    //       <ScrollLink
    //         to={headerItem[item as keyof NavItems].page}
    //         key={headerItem[item as keyof NavItems].label}
    //         className="block md:inline-block cursor-pointer"
    //         spy={true}
    //         smooth={true}
    //       >
    //         {headerItem[item as keyof NavItems].label}
    //       </ScrollLink>
    //     ))}
    //   </div>
    // </header>
//   );
// };

// export default Header;
