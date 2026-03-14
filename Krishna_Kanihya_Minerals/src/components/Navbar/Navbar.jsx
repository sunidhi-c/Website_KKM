import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {

        setMenuOpen(false); // close menu when clicked

        if (id === 'home') {
            window.location.reload();
            return;
        }

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    }

    useEffect(() => {

        const handleScroll = () => {

            const sections = ['home', 'about-us', 'products', 'gallery', 'contact-us'];
            const scrollPos = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {

                const section = document.getElementById(sections[i]);

                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div className='navbar'>

            {/* Brand */}
            <div className='brand'>
                <img src={logo} alt="Logo" className='logo' />

                <div className='brand-text-container'>
                    <h1 className='brand-main'>Krishna Kanhaiya</h1>
                    <p className='brand-sub'>Minerals</p>
                </div>
            </div>


            {/* Hamburger */}
            <div
                className='menu-toggle'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>


            {/* Navigation */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li
                    onClick={() => scrollToSection('home')}
                    className={activeSection === 'home' ? 'active' : ''}
                >
                    Home
                </li>

                {/* <li
                    onClick={() => scrollToSection('about-us')}
                    className={activeSection === 'about-us' ? 'active' : ''}
                >
                    About Us
                </li>

                <li
                    onClick={() => scrollToSection('products')}
                    className={activeSection === 'products' ? 'active' : ''}
                >
                    Products
                </li>

                <li
                    onClick={() => scrollToSection('gallery')}
                    className={activeSection === 'gallery' ? 'active' : ''}
                >
                    Gallery
                </li> */}

                <li
                    onClick={() => window.open(
                        'https://maps.app.goo.gl/AruLz4aG1EdYFcnf8',
                        '_blank', // opens in new tab
                        'noopener,noreferrer'
                    )}
                    className={activeSection === 'find-us' ? 'active' : ''}
                >
                    Find Us
                </li>

                <li
                    onClick={() => scrollToSection('contact-us')}
                    className={activeSection === 'contact-us' ? 'active' : ''}
                >
                    Contact Us
                </li>


                {/* Mobile Quote */}
                <div
                    className='quote-button mobile-quote'
                    onClick={() => scrollToSection('contact-us')}
                >
                    Get a Quote
                </div>

            </ul>


            {/* Desktop Quote */}
            <div
                className='quote-button desktop-quote'
                onClick={() => scrollToSection('contact-us')}
            >
                Get a Quote
            </div>

        </div>
    )
}

export default Navbar;