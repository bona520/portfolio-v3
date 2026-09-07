import Logo from "@svg/Logo";
import KbachFooterHeroLeft from "@svg/KbachFooterHeroLeft";
import KbachFooterHeroRight from "@svg/KbachFooterHeroRight";

const NAV = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10 md:mt-24">
            {/* decorative kbach flourishes, anchored to the bottom corners */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-between text-custom-purple/[0.07]">
                <KbachFooterHeroLeft className="h-44 w-auto md:h-64" />
                <KbachFooterHeroRight className="h-44 w-auto md:h-64" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* identity */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-3">
                            <Logo className="h-7 w-auto" />
                            <div>
                                <p className="text-sm font-semibold text-white">Orn Bona</p>
                                <p className="text-xs text-snow/40">
                                    Fullstack Developer &amp; UI/UX Designer
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 flex items-center gap-2 text-xs font-medium text-snow/50">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            Open to new projects
                        </p>
                    </div>

                    {/* quick nav */}
                    <nav className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
                        {NAV.map(({ id, label }) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className="text-snow/50 transition-colors hover:text-white"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* baseline */}
                <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-6 text-xs text-snow/30">
                    <p>© {year} Orn Bona. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
