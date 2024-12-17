import { ArrowRight2 } from 'iconsax-react';
import me from '../assets/images/me.png';

export default function About() {
    return (
        <div className="mt-10 md:mt-28 w-full" id="about">
            <h1 className="text-2xl lg:text-4xl font-bold">About</h1>
            <div className="flex items-start flex-wrap md:flex-nowrap gap-x-10">
                <div className="mt-4 md:mt-8">
                    <p className="text-sm md:text-base !leading-8">
                        I am a dedicated Front-End Developer and UI/UX Designer, with my design journey beginning
                        between 2019 and 2021, where I gained expertise in tools like Photoshop, Illustrator, and Figma.
                        Since 2021, I have been specializing in web development, utilizing technologies such as JavaScript,
                        React.js, Next.js, Laravel, HTML, CSS, and Tailwind CSS to create responsive and user-friendly websites.
                        My dual expertise in design and development allows me to craft visually appealing interfaces while
                        ensuring seamless functionality.
                    </p>
                    <h4 className="mt-3 md:mt-4 text-sm md:text-base">Here are a few technologies I’ve been working with recently:</h4>
                    <div className="mt-6 flex justify-between md:justify-start gap-x-10">
                        <ul className="space-y-4">
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />JavaScript (ES6+)</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />React JS</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Next JS</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Remix JS</li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Express JS</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Typescript</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Tailwind CSS</li>
                            <li className="flex items-center hover:text-custom-purple text-sm md:text-base"><ArrowRight2 color="#383838" variant="Bold" />Figma</li>
                        </ul>
                    </div>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    <img src={me} alt="bona" className="w-[20rem] md:w-[70rem] lg:w-[80rem] xl:w-[90rem]" />
                </div>
            </div>
        </div>
    );
}