import { useEffect, useState } from "react";
import Squiggle from "@svg/Squiggle";
import { Book1, Briefcase, Home2, Notepad2, type Icon } from "iconsax-react";
import Logo from "@svg/Logo";

type Section = { id: string; label: string; icon: Icon };

const SECTIONS: Section[] = [
    { id: "home", label: "Home", icon: Home2 },
    { id: "about", label: "About", icon: Notepad2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Book1 },
];

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
            (el): el is HTMLElement => el !== null
        );
        const observer = new IntersectionObserver(
            (entries) => {
                if (window.scrollY < 120) {
                    setActive("home");
                    return;
                }
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.5, 1] }
        );
        els.forEach((el) => observer.observe(el));

        const onScroll = () => {
            if (window.scrollY < 120) setActive("home");
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            {/* desktop — sticky pill */}
            <nav className="sticky top-4 z-40 mx-auto hidden h-14 w-[min(600px,calc(100%-28px))] items-center justify-between rounded-full border border-white/10 bg-primary/70 pr-3 pl-6 backdrop-blur-xl md:flex">
                <a href="#home" aria-label="Home" className="shrink-0 transition-opacity hover:opacity-70">
                    <Logo className="h-7 w-auto" />
                </a>
                <div className="flex items-center gap-1 text-sm font-medium">
                    {SECTIONS.slice(1).map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`px-3 py-1.5 transition-colors ${active === id ? "text-white" : "text-snow/50 hover:text-white"
                                }`}
                        >
                            <span className="relative">
                                {label}
                                {active === id && (
                                    <Squiggle className="animate-wave-draw pointer-events-none absolute -bottom-2 left-0 h-2 w-full text-custom-purple" />
                                )}
                            </span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* mobile — fixed bottom tab bar */}
            <div
                className="fixed inset-x-3 bottom-3 z-40 md:hidden"
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-primary/85 shadow-[0_2px_24px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                    <div className="grid grid-cols-4">
                        {SECTIONS.map(({ id, label, icon: TabIcon }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`flex h-14 flex-col items-center justify-center gap-1 px-0.5 text-center transition-opacity active:opacity-60 ${active === id ? "text-custom-purple" : "text-snow/40"
                                    }`}
                            >
                                <TabIcon
                                    size={20}
                                    variant={active === id ? "Bold" : "Linear"}
                                    color="currentColor"
                                    className={active === id ? "animate-pop" : undefined}
                                />
                                <span className="text-[9px] font-semibold leading-none">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
