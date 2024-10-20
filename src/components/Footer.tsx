import { Figma } from "iconsax-react";


export default function Footer() {
    const fullYear = new Date().getFullYear();
    function viewFigma() {
        window.open('https://www.figma.com/proto/MnH2rzWvMNFVoIhIiym7eS/Portfolio-V3?page-id=0%3A1&node-id=1-2&node-type=canvas&t=LcQyaVeJ7LwfopL5-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2', '_blank');
    }
    return (
        <div className="mt-4 md:mt-8 flex items-center flex-col gap-3 md:gap-4">
            <h6 className="text-base md:text-md">Designed and Build by Orn Bona ({fullYear})</h6>
            <div className="flex gap-2 text-white/50 cursor-pointer" onClick={() => viewFigma()}> <Figma size="24" /> <span>Figma File</span></div>
        </div>
    );
}