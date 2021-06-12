/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="WeightIcon/Fill/weight">
          <path
            id="WeightMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 4.1719V5.9999C11 6.5529 11.448 6.9999 12 6.9999C12.552 6.9999 13 6.5529 13 5.9999V4.1719C13.923 4.4979 14.651 5.2669 14.907 6.2709C14.97 6.4919 15 6.7319 15 6.9999C15 8.6539 13.654 9.9999 12 9.9999C10.346 9.9999 9 8.6539 9 6.9999C9 6.7379 9.031 6.5049 9.091 6.2879C9.094 6.2759 9.095 6.2649 9.098 6.2529L9.102 6.2379C9.354 5.2559 10.08 4.4959 11 4.1719ZM18 4.9999H16.578C15.799 3.2009 14.017 1.9999 12 1.9999C9.977 1.9999 8.191 3.2089 7.42 4.9999H6C4.346 4.9999 3 6.3459 3 7.9999V18.9999C3 20.6539 4.346 21.9999 6 21.9999H18C19.654 21.9999 21 20.6539 21 18.9999V7.9999C21 6.3459 19.654 4.9999 18 4.9999Z"
          />
          <mask id="Weightmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
            <path
              id="WeightMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 4.1719V5.9999C11 6.5529 11.448 6.9999 12 6.9999C12.552 6.9999 13 6.5529 13 5.9999V4.1719C13.923 4.4979 14.651 5.2669 14.907 6.2709C14.97 6.4919 15 6.7319 15 6.9999C15 8.6539 13.654 9.9999 12 9.9999C10.346 9.9999 9 8.6539 9 6.9999C9 6.7379 9.031 6.5049 9.091 6.2879C9.094 6.2759 9.095 6.2649 9.098 6.2529L9.102 6.2379C9.354 5.2559 10.08 4.4959 11 4.1719ZM18 4.9999H16.578C15.799 3.2009 14.017 1.9999 12 1.9999C9.977 1.9999 8.191 3.2089 7.42 4.9999H6C4.346 4.9999 3 6.3459 3 7.9999V18.9999C3 20.6539 4.346 21.9999 6 21.9999H18C19.654 21.9999 21 20.6539 21 18.9999V7.9999C21 6.3459 19.654 4.9999 18 4.9999Z"
            />
          </mask>
          <g mask="url(#Weightmask0)">
            <g id="Weight&#Weight240;&#Weight159;&#Weight142;&#Weight168; Color">
              <rect id="WeightBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Weight-oIcon/Outline/weight">
          <path
            id="Weight-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7H7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7H18C18.551 7 19 7.448 19 8V19ZM11 4.172V6C11 6.553 11.448 7 12 7C12.552 7 13 6.553 13 6V4.172C13.923 4.498 14.651 5.267 14.907 6.271C14.97 6.492 15 6.731 15 7C15 8.654 13.654 10 12 10C10.346 10 9 8.654 9 7C9 6.738 9.031 6.505 9.091 6.288C9.094 6.276 9.095 6.265 9.098 6.253L9.102 6.238C9.354 5.256 10.08 4.496 11 4.172ZM18 5H16.578C15.799 3.201 14.017 2 12 2C9.977 2 8.191 3.209 7.42 5H6C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"
          />
          <mask id="Weight-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
            <path
              id="Weight-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7H7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7H18C18.551 7 19 7.448 19 8V19ZM11 4.172V6C11 6.553 11.448 7 12 7C12.552 7 13 6.553 13 6V4.172C13.923 4.498 14.651 5.267 14.907 6.271C14.97 6.492 15 6.731 15 7C15 8.654 13.654 10 12 10C10.346 10 9 8.654 9 7C9 6.738 9.031 6.505 9.091 6.288C9.094 6.276 9.095 6.265 9.098 6.253L9.102 6.238C9.354 5.256 10.08 4.496 11 4.172ZM18 5H16.578C15.799 3.201 14.017 2 12 2C9.977 2 8.191 3.209 7.42 5H6C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"
            />
          </mask>
          <g mask="url(#Weight-omask0)">
            <g id="Weight-o&#Weight-o240;&#Weight-o159;&#Weight-o142;&#Weight-o168; Color">
              <rect id="Weight-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
