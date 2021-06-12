/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ThermometerMinusIcon/Fill/thermometer-minus">
          <path
            id="ThermometerMinusMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 5V9.54H13V5C13 4.449 13.448 4 14 4C14.267 4 14.514 4.102 14.713 4.306C14.897 4.487 15 4.733 15 5ZM9 17C9 19.757 11.243 22 14 22C16.757 22 19 19.757 19 17C19 15.42 18.246 13.937 17 13.003V5C17 4.189 16.684 3.434 16.127 2.892C15.566 2.317 14.812 2 14 2C12.346 2 11 3.346 11 5V13.003C9.754 13.937 9 15.42 9 17ZM3 7H7C7.55 7 8 6.55 8 6C8 5.45 7.55 5 7 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7Z"
          />
          <mask
            id="ThermometerMinusmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="17"
            height="20"
          >
            <path
              id="ThermometerMinusMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 5V9.54H13V5C13 4.449 13.448 4 14 4C14.267 4 14.514 4.102 14.713 4.306C14.897 4.487 15 4.733 15 5ZM9 17C9 19.757 11.243 22 14 22C16.757 22 19 19.757 19 17C19 15.42 18.246 13.937 17 13.003V5C17 4.189 16.684 3.434 16.127 2.892C15.566 2.317 14.812 2 14 2C12.346 2 11 3.346 11 5V13.003C9.754 13.937 9 15.42 9 17ZM3 7H7C7.55 7 8 6.55 8 6C8 5.45 7.55 5 7 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7Z"
            />
          </mask>
          <g mask="url(#ThermometerMinusmask0)">
            <g id="ThermometerMinus&#ThermometerMinus240;&#ThermometerMinus159;&#ThermometerMinus142;&#ThermometerMinus168; Color">
              <rect id="ThermometerMinusBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ThermometerMinus-oIcon/Outline/thermometer-minus">
          <path
            id="ThermometerMinus-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 5C13 4.449 13.448 4 14 4C14.267 4 14.514 4.102 14.713 4.306C14.897 4.487 15 4.733 15 5V13.54C15 13.898 15.191 14.229 15.502 14.407C16.426 14.938 17 15.932 17 17C17 18.654 15.654 20 14 20C12.346 20 11 18.654 11 17C11 15.932 11.574 14.938 12.498 14.407C12.809 14.229 13 13.898 13 13.54V5ZM9 17C9 19.757 11.243 22 14 22C16.757 22 19 19.757 19 17C19 15.42 18.246 13.938 17 13.003V5C17 4.189 16.684 3.434 16.127 2.892C15.566 2.317 14.812 2 14 2C12.346 2 11 3.346 11 5V13.003C9.754 13.938 9 15.42 9 17ZM3 7H7C7.55 7 8 6.55 8 6C8 5.45 7.55 5 7 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7Z"
          />
          <mask
            id="ThermometerMinus-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="17"
            height="20"
          >
            <path
              id="ThermometerMinus-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 5C13 4.449 13.448 4 14 4C14.267 4 14.514 4.102 14.713 4.306C14.897 4.487 15 4.733 15 5V13.54C15 13.898 15.191 14.229 15.502 14.407C16.426 14.938 17 15.932 17 17C17 18.654 15.654 20 14 20C12.346 20 11 18.654 11 17C11 15.932 11.574 14.938 12.498 14.407C12.809 14.229 13 13.898 13 13.54V5ZM9 17C9 19.757 11.243 22 14 22C16.757 22 19 19.757 19 17C19 15.42 18.246 13.938 17 13.003V5C17 4.189 16.684 3.434 16.127 2.892C15.566 2.317 14.812 2 14 2C12.346 2 11 3.346 11 5V13.003C9.754 13.938 9 15.42 9 17ZM3 7H7C7.55 7 8 6.55 8 6C8 5.45 7.55 5 7 5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7Z"
            />
          </mask>
          <g mask="url(#ThermometerMinus-omask0)">
            <g id="ThermometerMinus-o&#ThermometerMinus-o240;&#ThermometerMinus-o159;&#ThermometerMinus-o142;&#ThermometerMinus-o168; Color">
              <rect id="ThermometerMinus-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
