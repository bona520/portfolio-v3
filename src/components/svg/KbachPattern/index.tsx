import { KBACH_FS_ONE_PATHS } from "../KbachFeaturedOne";
import { KBACH_FS_TWO_PATHS } from "../KbachFeaturedTwo";

// are set by the caller.
const TILE = 332;
const HALF = TILE / 2;
// KbachFeaturedSearchOne's art-board is 225u vs the bold one's ~166u.
const OUTLINE_SCALE = HALF / 225;

export default function KbachSearchPattern({ className }: { className?: string }) {
    return (
        <svg aria-hidden className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="kbach-search" patternUnits="userSpaceOnUse" width={TILE} height={TILE}>
                    <g fill="currentColor">
                        {KBACH_FS_TWO_PATHS.map((d, i) => (
                            <path key={`a${i}`} d={d} />
                        ))}
                        <g transform={`translate(${HALF} ${HALF})`}>
                            {KBACH_FS_TWO_PATHS.map((d, i) => (
                                <path key={`b${i}`} d={d} />
                            ))}
                        </g>
                        <g transform={`translate(${HALF} 0) scale(${OUTLINE_SCALE})`}>
                            {KBACH_FS_ONE_PATHS.map((d, i) => (
                                <path key={`c${i}`} d={d} />
                            ))}
                        </g>
                        <g transform={`translate(0 ${HALF}) scale(${OUTLINE_SCALE})`}>
                            {KBACH_FS_ONE_PATHS.map((d, i) => (
                                <path key={`d${i}`} d={d} />
                            ))}
                        </g>
                    </g>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kbach-search)" />
        </svg>
    );
}
