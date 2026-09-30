import type { SVGProps } from 'react'

export const YCombinator = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <g clipPath="url(#clip0_38_2)">
                <path
                    d="M120 0H0V120H120V0Z"
                    fill="#FB651E"
                />
                <path
                    d="M55.96 67.85L35.36 29.26H44.77L56.89 53.68C57.08 54.12 57.29 54.57 57.54 55.03C57.79 55.5 58.01 55.98 58.19 56.48C58.32 56.67 58.41 56.84 58.47 56.99C58.54 57.15 58.6 57.29 58.66 57.41C58.97 58.03 59.25 58.64 59.5 59.23C59.75 59.82 59.96 60.36 60.15 60.86C60.65 59.8 61.19 58.67 61.78 57.46C62.37 56.25 62.98 54.99 63.6 53.68L75.9 29.26H84.66L63.88 68.32V93.2H55.96V67.85Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_38_2">
                    <rect
                        width="120"
                        height="120"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
