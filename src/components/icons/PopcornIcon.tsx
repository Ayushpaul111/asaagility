import React from 'react';

const PopcornIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="16.5" cy="16.5" r="16.5" fill="url(#paint0_radial_1_10)"/>
        <defs>
            <radialGradient id="paint0_radial_1_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5 16.5) rotate(90) scale(16.5)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="#D9D9D9"/>
            </radialGradient>
        </defs>
    </svg>
);

export default PopcornIcon;
