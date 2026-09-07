import { ExportSquare, Facebook, Send2, type Icon } from "iconsax-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import LotusOne from "@svg/LotusOne";
const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.55, ease: EASE },
    }),
};

const reveal = {
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, margin: "-80px" },
    variants: rise,
};

type Channel = {
    label: string;
    handle: string;
    href: string;
    Icon: Icon;
    accent: string;
};

const CHANNELS: Channel[] = [
    {
        label: "Telegram",
        handle: "@bona520",
        href: "https://t.me/bona520",
        Icon: Send2,
        accent: "#26A5E4",
    },
    {
        label: "Facebook",
        handle: "o.bona520",
        href: "https://facebook.com/o.bona520",
        Icon: Facebook,
        accent: "#1877F2",
    },
];

export default function Contact() {
    const reduce = useReducedMotion();

    return (
        <section id="contact" className="relative mt-16 scroll-mt-24 md:mt-28">
            {/* decorative lotus — corner accent */}
      

            <motion.h1 {...reveal} custom={0} className="text-2xl font-bold lg:text-4xl">
                Contact
            </motion.h1>

            <motion.p
                {...reveal}
                custom={1}
                className="mt-4 max-w-xl text-sm leading-7 text-snow/60 md:text-base md:leading-8"
            >
                Have a project in mind, or just want to say hi? I&apos;m open to new work, the
                fastest way to reach me is Telegram or Facebook.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2 md:mt-10">
                {CHANNELS.map(({ label, handle, href, Icon: ChannelIcon, accent }, i) => (
                    <motion.a
                        key={label}
                        {...reveal}
                        custom={i + 2}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04]"
                    >
                        <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${accent}22`, color: accent }}
                        >
                            <ChannelIcon size={22} variant="Bold" color="currentColor" />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-white">{label}</span>
                            <span className="block truncate text-xs text-snow/50">{handle}</span>
                        </span>
                        <ExportSquare
                            size={18}
                            color="currentColor"
                            className="shrink-0 text-snow/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-snow/70"
                        />
                    </motion.a>
                ))}
            </div>

            <motion.p
                {...reveal}
                custom={4}
                className="mt-6 flex items-center gap-2 text-xs font-medium text-snow/40"
            >
                <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Based in Cambodia · usually replies within a day
            </motion.p>

            {/* decorative lotus — floats in the open space beside the cards */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute right-2 bottom-2 -z-10 hidden w-60 opacity-25 md:block lg:right-10 lg:w-80"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
                <LotusOne className="h-auto w-full" />
            </motion.div>
        </section>
    );
}
