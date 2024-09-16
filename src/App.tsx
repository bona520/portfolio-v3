import { Figma } from 'iconsax-react';
import image from './assets/coming.png';

export default function App() {
  function viewFigma() {
    window.open('https://www.figma.com/proto/MnH2rzWvMNFVoIhIiym7eS/Portfolio-V3?page-id=0%3A1&node-id=1-2&node-type=canvas&t=LcQyaVeJ7LwfopL5-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2', '_blank');
  }
  return (
    <div className="w-screen  mt-12 flex-col flex items-center justify-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Coming Soon...</h2>
      <div className="bg-[#383838] w-1/2 mt-10 rounded-2xl p-4 flex flex-col items-end justify-center">
        <img src={image} alt={image} className="w-full rounded-xl" />
        <div className="my-4 bg-[#3E22EA]/50 py-2 px-4 rounded-md cursor-pointer hover:bg-[#3E22EA]/40 flex gap-2" onClick={() => viewFigma()}>
          <Figma color="#fff" />
          <span className="truncate w-full text-sm md:text-base">View Figma</span>
        </div>
      </div>
    </div>
  )
}