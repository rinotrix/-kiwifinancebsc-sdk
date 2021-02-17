import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <defs>
        <mask
          id="mask"
          x="3.75"
          y="3.75"
          width="64.5"
          height="74.24"
          maskUnits="userSpaceOnUse"
        >
          <path
            d="M68.25,36A32.25,32.25,0,1,1,36,3.75,32.25,32.25,0,0,1,68.25,36Z"
            fill="#c4c4c4"
          />
        </mask>
      </defs>
      <path d="M72,36A36,36,0,1,1,36,0,36,36,0,0,1,72,36Z" fill="#e9eaeb" />
      <path
        d="M35,19.73v-.52a3.58,3.58,0,0,1,.44-1.84,7.14,7.14,0,0,1,1.24-1.46A13.12,13.12,0,0,1,38,14.72a6,6,0,0,0,1.12-1,2,2,0,0,0,.44-1.3,1.58,1.58,0,0,0-.77-1.51,4.94,4.94,0,0,0-2.5-.47,8.94,8.94,0,0,0-2.29.3,8.2,8.2,0,0,0-1.92.72V7.7a10.63,10.63,0,0,1,2.39-.79,14,14,0,0,1,3.06-.31A7.39,7.39,0,0,1,42.44,8a4.63,4.63,0,0,1,1.68,3.8,4.42,4.42,0,0,1-.64,2.5,9.29,9.29,0,0,1-1.84,1.93l-1.71,1.48a2.09,2.09,0,0,0-.68,1.65v.36Zm-.19,4.88v-3.2h4.65v3.2Z"
        fill="#bdc2c4"
      />
      <path
        d="M57.52,33.42h-41a27.59,27.59,0,0,0-1.91,3.66A31.33,31.33,0,0,0,12,49.62C12,65.29,23.19,78,37,78s25-12.7,25-28.37a31.33,31.33,0,0,0-2.57-12.54A27.59,27.59,0,0,0,57.52,33.42Z"
        fill="#875930"
      />
      <path
        d="M58.06,34.77a2.3,2.3,0,0,1-.3,1.13C56.08,39.1,47.43,41.53,37,41.53S17.92,39.1,16.24,35.9a2.3,2.3,0,0,1-.3-1.13c0-1.22,1-2.37,2.78-3.36C22.35,29.38,29.18,28,37,28s14.65,1.37,18.28,3.4C57.05,32.4,58.06,33.55,58.06,34.77Z"
        fill="#80cc33"
      />
      <path
        d="M48.52,34.17c0,1.55-5,2.81-11.24,2.81S26,35.72,26,34.17s5-2.81,11.24-2.81S48.52,32.62,48.52,34.17Z"
        fill="#dbe6b7"
      />
      <path
        d="M25.51,34.57c0,.36-.64.66-1.42.66s-1.42-.3-1.42-.66.64-.67,1.42-.67S25.51,34.2,25.51,34.57Z"
        fill="#010100"
      />
      <ellipse cx="49.6" cy="34.73" rx="1.48" ry="0.7" fill="#010100" />
      <path
        d="M28.58,36.4c0,.38-.66.7-1.48.7s-1.48-.32-1.48-.7.66-.7,1.48-.7S28.58,36,28.58,36.4Z"
        fill="#010100"
      />
      <path
        d="M35.88,37.68c0,.59-1,1.06-2.24,1.06s-2.25-.47-2.25-1.06,1-1,2.25-1S35.88,37.1,35.88,37.68Z"
        fill="#010100"
      />
      <path
        d="M46.69,37.56c0,.42-.71.76-1.6.76s-1.6-.34-1.6-.76.71-.75,1.6-.75S46.69,37.15,46.69,37.56Z"
        fill="#010100"
      />
      <path
        d="M27.49,32.21c0-.48-.83-.87-1.86-.87s-1.86.39-1.86.87.84.88,1.86.88S27.49,32.7,27.49,32.21Z"
        fill="#010100"
      />
      <path
        d="M35.11,30.83c0-.48-.84-.87-1.86-.87s-1.86.39-1.86.87.83.88,1.86.88S35.11,31.32,35.11,30.83Z"
        fill="#010100"
      />
      <path
        d="M48,31.75c0-.51-.87-.92-1.94-.92s-1.95.41-1.95.92.87.91,1.95.91S48,32.25,48,31.75Z"
        fill="#010100"
      />
      <ellipse cx="30.4" cy="55.69" rx="5.91" ry="7.88" fill="#fff" />
      <ellipse cx="43.98" cy="55.69" rx="5.91" ry="7.88" fill="#fff" />
      <path
        d="M38.6,62.88a.3.3,0,0,0-.54.07,2.82,2.82,0,0,0-.07.82,2.67,2.67,0,0,1-.16.69,1.06,1.06,0,0,1-.68.69c-.95.23-1-1.63-1-2.12,0-.24-.39-.32-.44-.06-.17,1,0,2.82,1.44,2.83a1.53,1.53,0,0,0,1.2-.76A2.52,2.52,0,0,0,38.6,62.88Z"
        fill="#592d0f"
      />
      <path
        d="M30.17,45c-1.17-1-2.87.22-3.53,1.24-.11.17.15.37.28.22a4.54,4.54,0,0,1,1.27-1,3.6,3.6,0,0,1,1.87-.21A.15.15,0,0,0,30.17,45Z"
        fill="#592d0f"
      />
      <path
        d="M44.86,46.11c-.81-1.91-3.33-1.28-4.58-.29-.12.1,0,.28.17.21a5,5,0,0,1,2.09-.63,3.23,3.23,0,0,1,2.11.92C44.79,46.42,44.91,46.23,44.86,46.11Z"
        fill="#592d0f"
      />
      <ellipse cx="30.8" cy="55.9" rx="3.74" ry="5.23" fill="#010100" />
      <ellipse cx="43.3" cy="55.9" rx="3.74" ry="5.23" fill="#010100" />
      <ellipse cx="29.65" cy="51.01" rx="1.09" ry="1.56" fill="#fff" />
      <ellipse cx="42.15" cy="51.01" rx="1.09" ry="1.56" fill="#fff" />
      <path
        d="M72,37.09,69.74,37V35L72,34.91,72,36Zm-.12-4.35-2.25.2-.24-2,2.23-.34.26,2.16Zm-.65-4.3-2.2.47-.49-2,2.17-.6.52,2.11ZM70,24.25,67.91,25l-.72-1.91,2.08-.86.77,2Zm-1.66-4-2,1-.95-1.8,2-1.11Zm-2.14-3.79-1.89,1.23L63.19,16,65,14.66ZM63.66,13l-1.73,1.44-1.35-1.52,1.63-1.55L63.66,13Zm-3-3.16-1.55,1.64-1.52-1.36,1.44-1.73,1.63,1.45ZM57.34,7,56,8.81,54.33,7.65l1.22-1.88ZM53.69,4.64l-1.11,2-1.8-.95,1-2,1.93,1ZM49.78,2.73l-.86,2.08L47,4.09,47.75,2l2,.77ZM45.67,1.31l-.6,2.17-2-.48L43.56.8l2.11.52ZM41.42.41l-.34,2.22-2-.24.2-2.24ZM37.09,0,36,0,34.91,0,35,2.27l1,0,1,0ZM32.74.14l.2,2.25-2,.24L30.58.4,32.74.15Zm-4.3.65L28.91,3l-2,.49-.6-2.17L28.44.79ZM24.25,2,25,4.09l-1.91.72-.86-2.08,2-.77Zm-4,1.66,1,2-1.8.95-1.11-2ZM16.45,5.76l1.22,1.89L16,8.81,14.66,7ZM13,8.34l1.44,1.73-1.52,1.35L11.32,9.79,13,8.34Zm-3.16,3,1.63,1.55-1.35,1.52L8.34,13l1.45-1.62ZM7,14.66,8.81,16,7.65,17.67,5.76,16.45ZM4.64,18.31l2,1.11-.95,1.8-2-1,1-1.93ZM2.73,22.22l2.08.86L4.09,25,2,24.25l.77-2ZM1.31,26.33l2.17.6-.48,2L.8,28.44l.52-2.11Zm-.9,4.25,2.22.34-.24,2-2.24-.2ZM0,34.91,0,36l0,1.09L2.27,37l0-1,0-1Zm.12,4.35,2.25-.2.24,2L.4,41.42Zm.65,4.3L3,43.09l.49,2-2.17.6L.79,43.56ZM2,47.75,4.09,47l.72,1.91-2.08.86-.77-2Zm1.66,4,2-1,.94,1.8L4.64,53.69l-1-1.93Zm2.14,3.79,1.89-1.23L8.81,56,7,57.34Zm2.58,3.5,1.73-1.44,1.35,1.52L9.78,60.67,8.34,59.05Zm3,3.16,1.55-1.64,1.52,1.36L13,63.65l-1.63-1.44ZM14.66,65,16,63.19l1.67,1.16-1.22,1.88Zm3.65,2.36,1.11-2,1.8.95-1,2-1.93-1Zm3.91,1.91.86-2.08,1.91.72L24.25,70l-2-.77Zm4.11,1.41.6-2.16,2,.48-.47,2.2-2.11-.52Zm4.25.91.34-2.22,2,.24-.2,2.24Zm4.33.39L35,69.73l1,0h1L37.09,72,36,72c-.37,0-.73,0-1.09,0Zm4.35-.13-.2-2.24,2-.24.34,2.23-2.16.26Zm4.3-.65L43.09,69l2-.48.6,2.17-2.11.52ZM47.75,70,47,67.91l1.91-.72.86,2.08-2,.77Zm4-1.67-1-2,1.81-.95,1.11,2-1.93,1Zm3.79-2.14-1.23-1.88L56,63.19,57.33,65Zm3.5-2.57L57.6,61.93l1.53-1.36,1.54,1.64-1.62,1.45Zm3.16-3-1.64-1.54,1.36-1.52,1.72,1.44-1.44,1.62ZM65,57.34,63.19,56l1.16-1.68,1.88,1.23Zm2.36-3.65-2-1.11.95-1.81,2,1-1,1.93Zm1.91-3.91-2.08-.86L67.91,47l2.13.74-.77,2Zm1.41-4.11-2.16-.6.48-2,2.2.47-.52,2.11Zm.91-4.25-2.22-.34.24-2,2.24.2Z"
        fill="#bdc2c4"
        fill-rule="evenodd"
      />
    </Svg>
  );
};

export default Icon;
