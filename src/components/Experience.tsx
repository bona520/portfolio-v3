import { ShoppingBag } from "iconsax-react";
import experience from "./experience.json";

export default function Experience() {
    const calculateDate = (date: string) => {
        const currentDate = new Date();
        const startDate = new Date(date);
        const diff = currentDate.getTime() - startDate.getTime();
        const year = diff / (1000 * 60 * 60 * 24 * 365);
        const month = (year - Math.floor(year)) * 12;
        return `${Math.floor(year)} Year ${Math.floor(month)} Months`;
    }

    return (
        <div className="mt-8 md:mt-28 bg-primary rounded-2xl p-8 w-full">
            <h1 className="text-2xl lg:text-4xl font-bold mb-10">Experience</h1>

            <div className="flex gap-x-6 lg:gap-x-8 mt-6 lg:mt-8 items-start border-b border-secondary pb-8 w-full">
                <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-4">
                    <ShoppingBag
                        size={24}
                        color="#999"
                        variant="Bold"
                    />
                </div>
                <div className="inline-flex flex-col">
                    <h3 className="text-lg lg:text-2xl font-semibold">SAS Development  Team</h3>
                    <div className="inline-flex items-center gap-x-2 mt-4 flex-wrap">
                        <span className="text-sm md:text-base text-snow/70">UI UX Design | Frontend Developer</span>
                        <div className="w-1 h-1 rounded-full bg-white/70" />
                        <span className="text-sm md:text-base text-snow/40">{calculateDate('2023-06-01')}</span>
                        <div className="w-1 h-1 rounded-full bg-white/70" />
                        <span className="text-sm md:text-base text-snow/40">Jun 2023 - Present</span>
                    </div>
                </div>
            </div>
            {
                experience.map((item, index) => (
                    <div
                        key={index}
                        className={`flex gap-x-6 lg:gap-x-8 mt-6 lg:mt-8 items-start pb-8 ${index !== experience.length - 1 ? 'border-b border-secondary' : ''}`}
                    >
                        <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-4">
                            <ShoppingBag
                                size={24}
                                color="#999"
                                variant="Bold"
                            />
                        </div>
                        <div className="inline-flex flex-col">
                            <h3 className="text-lg lg:text-2xl font-semibold">{item.name}</h3>
                            <div className="inline-flex items-center gap-x-2 mt-4 flex-wrap">
                                <span className="text-sm md:text-base text-snow/70">{item.position}</span>
                                <div className="w-1 h-1 rounded-full bg-white/70" />
                                <span className="text-sm md:text-base text-snow/40">{item.duration}</span>
                                <div className="w-1 h-1 rounded-full bg-white/70" />
                                <span className="text-sm md:text-base text-snow/40">{item.date}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}