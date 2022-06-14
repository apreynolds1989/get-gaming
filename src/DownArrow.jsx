import * as React from "react";

const DownArrow = () => (
  <svg
    height={150}
    width={400}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "rgb(255,255,255)",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "rgb(107,63,160)",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
    <path
      d="M96.72 339.738L540.402 783.42l443.953-443.682z"
      fill="url('#grad1')"
    />
  </svg>
);

export default DownArrow;