import { ArrowUp2} from "iconsax-react";
import { Logo } from "./Icon";

export default function Footer() {
    const year = new Date().getFullYear();


    const linkClass =
        "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-snow/60 transition-colors hover:border-custom-purple hover:text-white";

    return (
        <footer id="contact" className="mt-16 md:mt-24 scroll-mt-24 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-3">
                    <Logo className="h-7 w-auto" />
                    <div className="text-center md:text-left">
                        <p className="text-sm font-semibold">Orn Bona</p>
                        <p className="text-xs text-snow/40">
                            Fullstack Developer &amp; UI/UX Designer
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <a href="#home" className={linkClass} aria-label="Back to top">
                        <ArrowUp2 size={18} variant="Bold" color="currentColor" />
                    </a>
                </div>
            </div>

            <p className="mt-8 text-center text-xs text-snow/30 md:text-left">
                © {year} Orn Bona. Designed &amp; built with React and Tailwind CSS.
            </p>
        </footer>
    );
}
