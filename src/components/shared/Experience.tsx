import { Briefcase } from "iconsax-react";
import experience from "@data/experience.json";
import Timeline, { type TimelineEntry } from "@shared/Timeline";

function tenure(startISO: string) {
    const start = new Date(startISO);
    const now = new Date();
    const months =
        (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const y = Math.floor(months / 12);
    const m = months % 12;
    return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`]
        .filter(Boolean)
        .join(" ");
}

// keyed by company name — merged into the entries built from experience.json
const DESCRIPTIONS: Record<string, string> = {
    "CA Invention":
        "Built frontends and backends with React and Laravel, working from Figma designs, mainly an e-commerce platform, plus UI for other mobile and web-app systems.",
    "Phsar Tech Solutions Co., Ltd":
        "Started as an intern in Laravel, HTML and CSS, then moved into a junior backend developer role.",
    "Ninja Marketing Cambodia": "Designed poster and graphic content for social media.",
    "Kampuh Trading Co., Ltd":
        "Designed posters and graphics for social media, with occasional print work, banners and printed posters.",
};

export default function Experience() {
    const entries: TimelineEntry[] = [
        {
            title: "Code Aero Solutions Co., Ltd",
            subtitle: "Fullstack Developer · UI/UX Design",
            description:
                "Build landing pages, a POS, and management systems with React, Next.js, EJS and NestJS, and design their interfaces in Figma, Photoshop and Illustrator, including the full UI for a new system.",
            meta: ["Jun 2023 – Present", tenure("2023-06-01")],
            badge: "Current",
        },
        ...experience.map((item) => ({
            title: item.name,
            subtitle: item.position.replace(/\s*\|\s*/g, " · "),
            description: DESCRIPTIONS[item.name.trim()],
            meta: [item.date.replace(/\s*-\s*/g, " – "), item.duration],
        })),
    ];

    return (
        <div className="mt-8 md:mt-28">
            <Timeline
                id="experience"
                heading="Experiences"
                entries={entries}
                defaultIcon={Briefcase}
                decor
            />
        </div>
    );
}
