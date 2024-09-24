import { UserObj } from "@/models/User";
import { NavItems } from "@/models/Header";

export const userInfo: UserObj = {
    name: 'Asia Parveen',
    picture: '/assets/comp.jpg.jpg',
    heading: 'I&#39;m a Software Engineer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a dedicated software engineer focused on web and mobile app development. My skills include HTML, CSS, Bootstrap, and Tailwind CSS for creating responsive designs.</p>
        <p>Proficient in TypeScript, I build scalable and maintainable applications. Currently, I’m expanding my expertise in Next.js to enhance my development toolkit.</p>
        <p>I am passionate about emerging technologies, especially AI and the metaverse. My aim is to integrate these innovations into my future projects.</p>`,
    skills: ['Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'AI', 'Metaverse']
};

export const headerItem: NavItems = {
    home: { label: "Home", page: "home" },
    about: { label: "About", page: "about" },
    projects: { label: "Projects", page: "projects" }
};

export const projects = {
    calculator: { 
        image: '/assets/piccal.png',
        url: 'https://asia-parveen.github.io/calculator-made-project/' // Add your project URL here
    },
    todo: { 
        image: '/assets/todopic.png',
        url: 'https://asia-parveen.github.io/To-do-app/' // Add your project URL here
    },
    bulb: { 
        image: '/assets/bib.png',
        url: 'https://asia-parveen.github.io/bulb-on-off-projrct/' // Add your project URL here
    },
    covid: { 
        image: '/assets/covd.png',
        url: 'https://your-covid-project-url.com' // Add your project URL here
    },
    clonbarbr: { 
        image: '/assets/clone.png',
        url: 'https://asia-parveen.github.io/barber_project/' // Add your project URL here
    },
    portfolio: { 
        image: '/assets/portfolio.png',
        url: 'https://your-portfolio-project-url.com' // Add your project URL here
    },
    ntlfyclone: { 
        image: '/assets/netlifyclone.png',
        url: 'https://your-ntlfyclone-project-url.com' // Add your project URL here
    },
    // bakery: { image: '/assets/bkry.png' },
    // propertyweb: { image: '/assets/propty.png' }
};




// import { UserObj } from "@/models/User";
// import {NavItems} from "@/models/Header";


// export const userInfo:UserObj = {
//     name: 'Asia Parveen',
//     picture: '/assets/comp.jpg.jpg', 
//     heading: 'I&#39;m a Software Engineer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;m;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
//     about: `
//         <p>I am a dedicated software engineer focused on web and mobile app development. My skills include HTML, CSS, Bootstrap, and Tailwind CSS for creating responsive designs.</p>
//         <p>Proficient in TypeScript, I build scalable and maintainable applications. Currently, I’m expanding my expertise in Next.js to enhance my development toolkit.</p>
//         <p> I am passionate about emerging technologies, especially AI and the metaverse. My aim is to integrate these innovations into my future projects. </p>`,
        
//     skills:  ['Next.js', 'Javascript',  'Typescript', 'HTML', 'CSS', 'Tailwind css','Bootstrep','AI','Metavers']   
// }

// export const headerItem:NavItems = {
//     home: {label: "Home", page:"home"},
//     about: {label: "About", page:"about"},
//     projects: {label: "Projects", page:"projects"}
// }
// export const projects = {
//     calculator: { image: '/assets/piccal.png' },
//    todo: { image: '/assets/todopic.png' },
//     bulb: { image: '/assets/bib.png' },
//    covid: { image: '/assets/covd.png' },
//    clonbarbr: { image: '/assets/clone.png' },
//    portfolio: { image: '/assets/portfolio.png' },
//    ntlfyclone: { image: '/assets/netlifyclone.png' },
// //    bakery: { image: '/assets/bkry.png' },
// //    propertyweb: { image: '/assets/propty.png' }
// }