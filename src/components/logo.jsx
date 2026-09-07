import React from "react";

export default function Logo({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Circular Segments */}
        <path
          d="M 250 85 A 165 165 0 0 0 120 355"
          strokeWidth="24"
        />
        <path
          d="M 380 355 A 165 165 0 0 0 380 145"
          strokeWidth="24"
        />

        {/* Central Geometric YS Monogram */}
        <path
          d="M 120 160 L 180 265 L 255 265 L 305 350 L 250 440 L 285 300 L 205 160 Z"
          strokeWidth="22"
          fill="none"
        />
        
        {/* 'S' Element Structure */}
        <path
          d="M 240 160 L 335 160 L 380 200 L 350 245 L 285 245 L 350 315 L 310 350"
          strokeWidth="22"
          fill="none"
        />
      </g>
    </svg>
  );
}