
import { Book1, Copy, Notepad2, Send, ShoppingBag } from "iconsax-react";
import Icon, { Icon2, Icon3, Logo } from "./Icon";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [currentHash, setCurrentHash] = useState(window.location.hash);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const telegram = () => {
        window.open("https://t.me/bona520", "_blank");
    }
    const email = () => {
        const email = "test@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email copied to clipboard!");
        }).catch(() => {
            toast.error("Failed to copy email.");
        });

    }

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="relative mx-auto py-4 w-full">
            <nav className="w-full flex justify-between items-center relative">
                <Logo className="w-8 md:w-12 lg:w-16" />
                <div className="hidden md:flex gap-x-12 bg-secondary/10 p-4 rounded-2xl backdrop-blur-sm">
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#about"}
                    >
                        <Notepad2 size="32" color="#fff" />
                        <span className={`${currentHash === "#about" ? "active relative" : ""} text-sm`} >About Me</span>
                    </div>
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#experience"}
                    >
                        <ShoppingBag size="32" color="#fff" /> <span className={`${currentHash === "#experience" ? "active relative" : ""} text-sm`} >Experience</span>
                    </div>
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#education"}
                    >
                        <Book1 size="32" color="#fff" /> <span className={`${currentHash === "#education" ? "active relative" : ""} text-sm`}  >Education</span>
                    </div>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
            {isMenuOpen && (
                <div ref={menuRef} className="absolute top-12 left-0 z-20 w-full md:hidden flex flex-col gap-y-4 bg-secondary/90 p-4 rounded-2xl backdrop-blur-sm mt-4">
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#about"}
                    >
                        <Notepad2 size="24" color="#fff" />
                        <span className={`${currentHash === "#about" ? "active relative" : ""} text-sm`} >About Me</span>
                    </div>
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#experience"}
                    >
                        <ShoppingBag size="24" color="#fff" /> <span className={`${currentHash === "#experience" ? "active relative" : ""} text-sm`} >Experience</span>
                    </div>
                    <div
                        className="inline-flex items-center gap-x-4 cursor-pointer"
                        onClick={() => window.location.href = "#education"}
                    >
                        <Book1 size="24" color="#fff" /> <span className={`${currentHash === "#education" ? "active relative" : ""} text-sm`}  >Education</span>
                    </div>
                </div>
            )}
            <div className="mt-16 w-full relative">
                <Icon3 className="w-16 md:w-18 lg:w-16 xl:w-20 absolute top-[16rem] -left-1 md:top-[10rem] md:-left-[4rem] lg:top-[7rem] lg:-left-[4rem] xl:top-[8rem] xl:-left-[8rem] z-10 animate-bounce" />
                <Icon className="w-20 md:w-20 lg:w-18 xl:w-24 absolute -top-6 right-5 md:top-3 md:left-[9rem] lg:top-1 lg:left-[16rem] xl:-top-2 xl:left-[18rem] z-10 animate-top-to-bottom" />
                <Icon2 className="w-20 md:w-24 lg:w-28 xl:w-30 absolute top-[17rem] -right-4 md:top-[11rem] md:right-2 lg:-top-6 lg:right-2 xl:top-0 xl:right-1/3 z-10 animate-fade-in-out" />
            </div>
            <p className="text-center lg:text-start text-sm md:text-base">Hi, my name is</p>
            <h1 className="text-5xl xl:text-6xl font-bold text-center lg:text-start ">Orn Bona</h1>
            <p className="mt-6 !leading-6 md:!leading-7 text-sm md:text-base">I’m a Web Developer and <span className="text-custom-purple relative ui-ux-design">UI/UX Designer</span>, dedicated to creating user-friendly and visually engaging digital experiences.<br />
                Combining design principles with technical skills, I specialize in building responsive websites that are both functional and aesthetically pleasing.</p>
            <div className="w-full mt-6 flex items-center justify-center md:items-start md:justify-start gap-x-4">
                <button className="button-link" onClick={telegram}><Send size="24" />Telegram</button>
                <button className="button-link" onClick={email}><Copy size="24" />Copy Email</button>
            </div>
        </div>
    );
}