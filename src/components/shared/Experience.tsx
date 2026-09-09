import { Briefcase } from "iconsax-react";
import experience from "@data/experience.json";
import Timeline, { type TimelineEntry } from "@shared/Timeline";
import codeaero from "@assets/company-logo/codeaero.jpg";
import ca from "@assets/company-logo/ca.jpeg";
import phsartech from "@assets/company-logo/phsartech.png";
import ninja from "@assets/company-logo/ninja.jpg";
import kampuh from "@assets/company-logo/kampuh.png";

// keyed by the `logo` field in experience.json
const LOGOS: Record<string, string> = { codeaero, ca, phsartech, ninja, kampuh };

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
    const entries: TimelineEntry[] = experience.map((item) => ({
        title: item.name,
        subtitle: item.position.replace(/\s*\|\s*/g, " · "),
        description: item.description || undefined,
        logo: LOGOS[item.logo],
        badge: item.badge || undefined,
        meta: [
            item.date.replace(/\s*-\s*/g, " – "),
            item.startISO ? tenure(item.startISO) : item.duration,
        ].filter(Boolean) as string[],
    }));

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
