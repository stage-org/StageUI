/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="FacebookIcon/Fill/facebook">
          <path
            id="FacebookMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3.5C17 3.224 16.775 3 16.5 3H14C11.238 3 9 5.015 9 7.5V10.2H6.5C6.224 10.2 6 10.424 6 10.7V13.3C6 13.576 6.224 13.8 6.5 13.8H9V20.5C9 20.776 9.224 21 9.5 21H12.5C12.775 21 13 20.776 13 20.5V13.8H15.619C15.844 13.8 16.041 13.65 16.102 13.434L16.823 10.834C16.912 10.516 16.672 10.2 16.342 10.2H13V7.5C13 7.003 13.447 6.6 14 6.6H16.5C16.775 6.6 17 6.376 17 6.1V3.5Z"
          />
          <mask id="Facebookmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="3" width="11" height="18">
            <path
              id="FacebookMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 3.5C17 3.224 16.775 3 16.5 3H14C11.238 3 9 5.015 9 7.5V10.2H6.5C6.224 10.2 6 10.424 6 10.7V13.3C6 13.576 6.224 13.8 6.5 13.8H9V20.5C9 20.776 9.224 21 9.5 21H12.5C12.775 21 13 20.776 13 20.5V13.8H15.619C15.844 13.8 16.041 13.65 16.102 13.434L16.823 10.834C16.912 10.516 16.672 10.2 16.342 10.2H13V7.5C13 7.003 13.447 6.6 14 6.6H16.5C16.775 6.6 17 6.376 17 6.1V3.5Z"
            />
          </mask>
          <g mask="url(#Facebookmask0)">
            <g id="Facebook&#Facebook240;&#Facebook159;&#Facebook142;&#Facebook168; Color">
              <rect id="FacebookBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Facebook-oIcon/Outline/facebook">
          <path
            id="Facebook-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20H12V13.8C12 13.247 12.447 12.8 13 12.8H15.24L15.685 11.2H13C12.447 11.2 12 10.753 12 10.2V7.5C12 6.452 12.897 5.6 14 5.6H16V4H14C11.794 4 10 5.57 10 7.5V10.2C10 10.753 9.553 11.2 9 11.2H7V12.8H9C9.553 12.8 10 13.247 10 13.8V20ZM13 22H9C8.447 22 8 21.553 8 21V14.8H6C5.447 14.8 5 14.353 5 13.8V10.2C5 9.647 5.447 9.2 6 9.2H8V7.5C8 4.468 10.691 2 14 2H17C17.553 2 18 2.447 18 3V6.6C18 7.152 17.553 7.6 17 7.6H14V9.2H17C17.312 9.2 17.607 9.347 17.796 9.595C17.985 9.844 18.047 10.167 17.964 10.468L16.964 14.067C16.844 14.5 16.449 14.8 16 14.8H14V21C14 21.553 13.553 22 13 22Z"
          />
          <mask id="Facebook-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="2" width="13" height="20">
            <path
              id="Facebook-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20H12V13.8C12 13.247 12.447 12.8 13 12.8H15.24L15.685 11.2H13C12.447 11.2 12 10.753 12 10.2V7.5C12 6.452 12.897 5.6 14 5.6H16V4H14C11.794 4 10 5.57 10 7.5V10.2C10 10.753 9.553 11.2 9 11.2H7V12.8H9C9.553 12.8 10 13.247 10 13.8V20ZM13 22H9C8.447 22 8 21.553 8 21V14.8H6C5.447 14.8 5 14.353 5 13.8V10.2C5 9.647 5.447 9.2 6 9.2H8V7.5C8 4.468 10.691 2 14 2H17C17.553 2 18 2.447 18 3V6.6C18 7.152 17.553 7.6 17 7.6H14V9.2H17C17.312 9.2 17.607 9.347 17.796 9.595C17.985 9.844 18.047 10.167 17.964 10.468L16.964 14.067C16.844 14.5 16.449 14.8 16 14.8H14V21C14 21.553 13.553 22 13 22Z"
            />
          </mask>
          <g mask="url(#Facebook-omask0)">
            <g id="Facebook-o&#Facebook-o240;&#Facebook-o159;&#Facebook-o142;&#Facebook-o168; Color">
              <rect id="Facebook-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
