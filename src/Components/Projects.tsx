'use client';
import { headerItem, projects } from "@/constants/Constants";
import Image from "next/image";
import Link from 'next/link'; // Import Link from next/link

const Projects: React.FC = () => {
    return (
        <section 
            id={headerItem.projects.page} 
            className="flex flex-col text-center justify-center items-center my-30"
        >
            <h1 className={"text-6xl my-6"}>Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
                {
                    Object.entries(projects).map(([key, project]) => (
                        <Link key={key} href={project.url} target="_blank" rel="noopener noreferrer"> {/* Link component */}
                            <Image 
                                src={project.image}  
                                alt="project image"  
                                width={300}
                                height={300}
                                className="mt-4 md:m-1 cursor-pointer"
                            />
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;





// 'use client';
// import { headerItem, projects } from "@/constants/Constants";
// import Image from "next/image";

// const Projects: React.FC = () => {
//     return (
//         <section 
//             id={headerItem.projects.page} 
//             className="flex flex-col text-center justify-center items-center my-10"
//         >
//             <h1 className={"text-6xl my-6"}>Projects</h1>
//             <div className="flex break-words flex-wrap text-center justify-center items-center gap-4">
//                 {
//                     Object.entries(projects).map(([key, project]) => (
//                         <Image 
//                             key={key}  
//                             src={project.image}  
//                             alt="project image"  
//                             width={300}
//                             height={300}
//                             className="mt-4 md:m-1 cursor-pointer max-w-full h-auto"
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }

// export default Projects;






// 'use client';
// import { headerItem, projects } from "@/constants/Constants";
// import Image from "next/image";

// interface Project {
//     image: string;
//     // Add other properties if needed
// }

// const Projects: React.FC = () => {
//     return (
//         <section 
//             id={headerItem.projects.page} 
//             className="flex flex-col text-center justify-center items-center my-30"
//         >
//             <h1 className={"text-6xl my-6"}>Projects</h1>
//             <div className="flex break-words flex-wrap text-center justify-center items-center gap-4">
//                 {
//                     Object.entries(projects).map(([key, project]) => (
//                         <Image 
//                             key={key}  // key prop ko ensure kiya gaya hai
//                             src={project.image}  // yahan 'project' ka type properly access kiya gaya hai
//                             alt="project image"  
//                             width={300}
//                             height={300}
//                             className="mt-4 md:m-1 cursor-pointer"
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }

// export default Projects;





// 'use client';
// import { headerItem, projects } from "@/constants/Constants";
// import Image from "next/image";

// interface Project {
//     image: string;
//     // Add other properties if needed
// }

// const Projects: React.FC = () => {

//     return (
//         <section 
//             id={headerItem.projects.page} 
//             className="flex flex-col text-center justify-center items-center my-30"
//         >
//             <h1 className={"text-6xl my-6"}>Projects</h1>
//             <div className="flex break-words flex-wrap text-center justify-center items-center ">
//             {
//                     Object.keys(projects).map(project => (
//                         <Image 
//                             src={projects[project as keyof Projects].image} 
//                             alt="dp"  
//                             width={300}
//                             height={300}
//                             className="mt-4 md:m-1 cursor-pointer"
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }

// export default Projects;