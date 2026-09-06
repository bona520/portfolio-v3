export default function Squiggle({ className }: { className?: string }) {
    return (
        <svg width="42" height="7" className={`text-custom-purple ${className}`} viewBox="0 0 42 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.999871 5.17149C11.0316 5.77315 10.7137 -2.22053 17.9069 2.49724C22.2115 5.32046 21.9833 4.33665 26.3803 1.65973C30.7774 -1.01718 31.575 6.45702 40.9085 2.08252"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="1"
                className="animate-wave-draw"
            />
        </svg>
    );
}
