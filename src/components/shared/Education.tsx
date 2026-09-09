import { Teacher } from "iconsax-react";
import education from "@data/education.json";
import Timeline, { type TimelineEntry } from "@shared/Timeline";
import KbachTop from "@svg/KbachTop";
import setec from "@assets/edu-logo/setec.png";
import reanweb from "@assets/edu-logo/reanweb.jpg";
import graphic from "@assets/edu-logo/graphic.jpg";
import angroka from "@assets/edu-logo/angroka.jpg";

// keyed by the `logo` field in education.json
const LOGOS: Record<string, string> = { setec, reanweb, graphic, angroka };

export default function Education() {
    const entries: TimelineEntry[] = education.map((item) => ({
        title: item.name.trim(),
        subtitle: item.major.replace(/\s+/g, " ").trim(),
        location: item.location,
        link: item.link,
        logo: item.logo ? LOGOS[item.logo] : undefined,
        meta: [`${item.startDate} – ${item.endDate}`],
    }));

    return (
        <div className="relative mt-12">
            <KbachTop className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-44 text-custom-purple opacity-[0.12] sm:block lg:w-56" />
        
            <Timeline
                id="education"
                heading="Education"
                entries={entries}
                defaultIcon={Teacher}
            />
        </div>
    );
}
