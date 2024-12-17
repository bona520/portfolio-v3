import { Book1 } from "iconsax-react";
import education from "./education.json";

export default function Education() {
    return (
        <div className="mt-12 bg-primary rounded-2xl p-6 md:p-8" id="education">
            <h1 className="text-2xl lg:text-4xl font-bold mb-10">Education</h1>
            {
                education.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-x-3 lg:gap-x-8 mt-3 lg:mt-8 items-start pb-8 ${index !== education.length - 1 ? 'border-b border-secondary' : ''}`}
                    >
                        <div className="bg-secondary rounded-2xl md:rounded-3xl p-3 md:p-4">
                            <Book1
                                size={24}
                                color="#F6F4FA20"
                                variant="Bold"
                            />
                        </div>
                        <div className="inline-flex flex-col">
                            <h3 className="text-lg lg:text-2xl font-semibold">{item.name}</h3>
                            <span className="text-sm md:text-base text-snow/70 mt-2">{item.major}</span>
                            <div className="inline-flex items-center gap-x-2 mt-2 md:mt-4">
                                <span className="text-sm md:text-base text-snow/40">{item.startDate}</span>
                                <div className="w-1 h-1 rounded-full bg-white/70" />
                                <span className="text-sm md:text-base text-snow/40">{item.endDate}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}