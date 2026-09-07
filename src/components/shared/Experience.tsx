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

export default function Experience() {
    const entries: TimelineEntry[] = [
        {
            title: "Code Aero Solutions Co., Ltd",
            subtitle: "Fullstack Developer · UI/UX Design",
            meta: ["Jun 2023 – Present", tenure("2023-06-01")],
            badge: "Current",
        },
        ...experience.map((item) => ({
            title: item.name,
            subtitle: item.position.replace(/\s*\|\s*/g, " · "),
            meta: [item.date.replace(/\s*-\s*/g, " – "), item.duration],
        })),
    ];

    return (
        <div className="mt-8 md:mt-28">
            <Timeline
                id="experience"
                heading="Experience"
                entries={entries}
                defaultIcon={Briefcase}
                decor
            />
        </div>
    );
}
