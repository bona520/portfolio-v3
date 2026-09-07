import { Teacher } from "iconsax-react";
import education from "@data/education.json";
import Timeline, { type TimelineEntry } from "@shared/Timeline";

export default function Education() {
    const entries: TimelineEntry[] = education.map((item) => ({
        title: item.name.trim(),
        subtitle: item.major.replace(/\s+/g, " ").trim(),
        meta: [`${item.startDate} – ${item.endDate}`],
    }));

    return (
        <div className="mt-12">
            <Timeline
                id="education"
                heading="Education"
                entries={entries}
                defaultIcon={Teacher}
            />
        </div>
    );
}
