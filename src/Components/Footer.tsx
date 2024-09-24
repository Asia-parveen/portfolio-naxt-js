import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6 mt-40 flex flex-col text-center justify-center items-center my-30">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/Asia-parveen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-8 w-8 hover:text-gray-800" />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-8 w-8 hover:text-gray-800" />
          </Link>
          <Link href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-8 w-8 hover:text-gray-800" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Asia Parveen. All rights reserved.</p>
      </div>
    </footer>
  );
}




// import Link from 'next/link';
// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-500 text-white py-6 mt-40 flex flex-col text-center justify-center items-center my-30">
//       <div className="container mx-auto text-center">
//         <div className="flex justify-center space-x-6 mb-4">
//           <Link href="https://github.com/Asia-parveen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//             <FaGithub className="h-8 w-8 hover:text-gray-800" />
//           </Link>
//           <Link href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <FaLinkedin className="h-8 w-8 hover:text-gray-800" />
//           </Link>
//           <Link href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//             <FaInstagram className="h-8 w-8 hover:text-gray-800" />
//           </Link>
//         </div>
//         <p>&copy; {new Date().getFullYear()} Asia Parveen. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
