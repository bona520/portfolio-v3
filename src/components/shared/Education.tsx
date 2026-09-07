import { Teacher } from "iconsax-react";
import education from "@data/education.json";
import Timeline, { type TimelineEntry } from "@shared/Timeline";
import KbachTop from "@svg/KbachTop";
import KbachBottom from "@svg/KbachBottom";

export default function Education() {
    const entries: TimelineEntry[] = education.map((item) => ({
        title: item.name.trim(),
        subtitle: item.major.replace(/\s+/g, " ").trim(),
        meta: [`${item.startDate} – ${item.endDate}`],
    }));

    return (
        <div className="relative mt-12">
            <KbachTop className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-44 text-custom-purple opacity-[0.12] sm:block lg:w-56" />
            <KbachBottom className="pointer-events-none absolute right-0 bottom-0 -z-10 hidden w-44 text-custom-purple opacity-[0.12] sm:block lg:w-56" />

            <Timeline
                id="education"
                heading="Education"
                entries={entries}
                defaultIcon={Teacher}
            />
        </div>
    );
}
