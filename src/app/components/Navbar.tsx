'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const { data: session } = useSession(); // Get the current session
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu open/close
  };

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Avoid automatic redirect by next-auth
    toast.success("Logged out successfully"); // Show toast notification
    setTimeout(() => {
      router.push('/login'); // Redirect to /signin after 2 seconds
    }, 2000);
  };

  const userRole = session?.user?.role; // Extract the user role from the session

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <nav className="bg-blue-700 px-4 py-3 flex items-center justify-between font-semibold">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-2">
        <Image
          src="/srm-logo-white.svg"
          alt="SRM Logo"
          className="w-20 h-30"
          width={80}
          height={120}
        />
        <Link href="/profile">
          <span className="text-white text-lg font-bold">BUS DASHBOARD SRM</span>
        </Link>
      </div>

      {/* Right Side: Desktop Links */}
      <div className="hidden md:flex items-center space-x-4 justify-end flex-grow">
        {session ? (
          <>
            {userRole === "student" && (
              <>
                <Link href="/avail" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Bus Availability</Link>
                <Link href="/history" className="text-white hover:bg-blue-600 px-4 py-2 rounded">History</Link>
                <Link href="/loc" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Location</Link>
                <Link href="/notice" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Notice</Link>
                <Link href="/profile" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Profile</Link>
              </>
            )}
            {userRole === "faculty-c" && (
              <>
                <Link href="/studbus" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Student Details</Link>
                <Link href="/avail" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Bus Availability</Link>
                <Link href="/loc" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Location</Link>
              </>
            )}
            <button onClick={handleLogout} className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Login</Link>
            <Link href="/signup" className="text-white hover:bg-blue-600 px-4 py-2 rounded">Signup</Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-blue-700 flex flex-col space-y-2 py-4 z-50 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {session ? (
              <>
                {userRole === "student" && (
                  <>
                    <Link href="/avail" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Bus Availability</Link>
                    <Link href="/history" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>History</Link>
                    <Link href="/loc" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Location</Link>
                    <Link href="/notice" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Notice</Link>
                    <Link href="/profile" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Profile</Link>
                  </>
                )}
                {userRole === "faculty-c" && (
                  <>
                    <Link href="/studbus" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Student Details</Link>
                    <Link href="/avail" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Bus Availability</Link>
                    <Link href="/loc" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Location</Link>
                  </>
                )}
                <button onClick={handleLogout} className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Login</Link>
                <Link href="/signup" className="text-white hover:bg-blue-600 px-4 py-2 rounded" onClick={toggleMenu}>Signup</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast container */}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
