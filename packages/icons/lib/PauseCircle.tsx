/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="PauseCircleIcon/Fill/pause-circle">
          <path
            id="PauseCircleMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9995 15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15ZM9.99951 15C9.99951 15.55 9.54951 16 8.99951 16C8.44951 16 7.99951 15.55 7.99951 15V9C7.99951 8.45 8.44951 8 8.99951 8C9.54951 8 9.99951 8.45 9.99951 9V15ZM11.9995 2C6.48551 2 1.99951 6.486 1.99951 12C1.99951 17.514 6.48551 22 11.9995 22C17.5145 22 21.9995 17.514 21.9995 12C21.9995 6.486 17.5145 2 11.9995 2Z"
          />
          <mask id="PauseCirclemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20">
            <path
              id="PauseCircleMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9995 15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15ZM9.99951 15C9.99951 15.55 9.54951 16 8.99951 16C8.44951 16 7.99951 15.55 7.99951 15V9C7.99951 8.45 8.44951 8 8.99951 8C9.54951 8 9.99951 8.45 9.99951 9V15ZM11.9995 2C6.48551 2 1.99951 6.486 1.99951 12C1.99951 17.514 6.48551 22 11.9995 22C17.5145 22 21.9995 17.514 21.9995 12C21.9995 6.486 17.5145 2 11.9995 2Z"
            />
          </mask>
          <g mask="url(#PauseCirclemask0)">
            <g id="PauseCircle&#PauseCircle240;&#PauseCircle159;&#PauseCircle142;&#PauseCircle168; Color">
              <rect id="PauseCircleBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="PauseCircle-oIcon/Outline/pause-circle">
          <path
            id="PauseCircle-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9ZM13.9995 9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask id="PauseCircle-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
            <path
              id="PauseCircle-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9ZM13.9995 9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#PauseCircle-omask0)">
            <g id="PauseCircle-o&#PauseCircle-o240;&#PauseCircle-o159;&#PauseCircle-o142;&#PauseCircle-o168; Color">
              <rect id="PauseCircle-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
