import { useState } from "react"
import logo from '/images/jobportal.png'
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItems = [
        { 
            path: '/',
            title: 'Start a Search',
        },
        { 
            path: '/my-job',
            title: 'My Jobs',
        },
        { 
            path: '/salary',
            title: 'Salary Estimate',
        },
        { 
            path: '/post-a-job',
            title: 'Post a Job',
        },
    ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center space-x-2 text-black"><img src={logo} alt="Logo" className="h-6 w-6"></img><span>JobPortal</span></a>

            <ul className="hidden md:flex gap-12">
                {navItems.map(({ path, title }) => (
                    <li key={path} className="text-base text-primary">
                        <NavLink
                            to={path}
                            className={({ isActive }) => 
                                isActive ? "active": "" 
                            }
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Signup and login button */}
            <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                <Link to="/login" className="py-2 px-5 border rounded">Log In</Link>
                <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
            </div>

            {/* mobile menu */}
            <div className="md:hidden block">
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <IoCloseSharp className="w-5 h-5 text-primary" /> : <RiMenu3Line className="w-5 h-5 text-primary" />
                    }
                </button>
            </div>
        </nav>

        {/* navItems for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
                {navItems.map(({ path, title }) => (
                    <li key={path} className="text-base text-white first:text-white py-1">
                        <NavLink
                            to={path}
                            className={({ isActive }) => 
                            isActive ? "active" : ""
                            }
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
                <li className="text-white py-1"><Link to="/login">Log In</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar
