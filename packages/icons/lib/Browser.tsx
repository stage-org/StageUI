/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="BrowserIcon/Fill/browser">
          <path
            id="BrowserMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 18.0346C19 18.5866 18.551 19.0346 18 19.0346H6C5.449 19.0346 5 18.5866 5 18.0346V11.0346H19V18.0346ZM8 6.03461C8.552 6.03461 9 6.48161 9 7.03461C9 7.58761 8.552 8.03461 8 8.03461C7.448 8.03461 7 7.58761 7 7.03461C7 6.48161 7.448 6.03461 8 6.03461ZM12 6.03461C12.552 6.03461 13 6.48161 13 7.03461C13 7.58761 12.552 8.03461 12 8.03461C11.448 8.03461 11 7.58761 11 7.03461C11 6.48161 11.448 6.03461 12 6.03461ZM18 3.03461H6C4.346 3.03461 3 4.38061 3 6.03461V9.03461V11.0346V18.0346C3 19.6886 4.346 21.0346 6 21.0346H18C19.654 21.0346 21 19.6886 21 18.0346V11.0346V9.03461V6.03461C21 4.38061 19.654 3.03461 18 3.03461Z"
          />
          <mask id="Browsermask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="19">
            <path
              id="BrowserMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 18.0346C19 18.5866 18.551 19.0346 18 19.0346H6C5.449 19.0346 5 18.5866 5 18.0346V11.0346H19V18.0346ZM8 6.03461C8.552 6.03461 9 6.48161 9 7.03461C9 7.58761 8.552 8.03461 8 8.03461C7.448 8.03461 7 7.58761 7 7.03461C7 6.48161 7.448 6.03461 8 6.03461ZM12 6.03461C12.552 6.03461 13 6.48161 13 7.03461C13 7.58761 12.552 8.03461 12 8.03461C11.448 8.03461 11 7.58761 11 7.03461C11 6.48161 11.448 6.03461 12 6.03461ZM18 3.03461H6C4.346 3.03461 3 4.38061 3 6.03461V9.03461V11.0346V18.0346C3 19.6886 4.346 21.0346 6 21.0346H18C19.654 21.0346 21 19.6886 21 18.0346V11.0346V9.03461V6.03461C21 4.38061 19.654 3.03461 18 3.03461Z"
            />
          </mask>
          <g mask="url(#Browsermask0)">
            <g id="Browser&#Browser240;&#Browser159;&#Browser142;&#Browser168; Color">
              <rect id="BrowserBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Browser-oIcon/Outline/browser">
          <path
            id="Browser-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 7C7 6.447 7.448 6 8 6C8.552 6 9 6.447 9 7C9 7.553 8.552 8 8 8C7.448 8 7 7.553 7 7ZM11 7C11 6.447 11.448 6 12 6C12.552 6 13 6.447 13 7C13 7.553 12.552 8 12 8C11.448 8 11 7.553 11 7ZM5 9V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V9H5ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V11H19V18ZM18 3H6C4.346 3 3 4.346 3 6V9V11V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V11V9V6C21 4.346 19.654 3 18 3Z"
          />
          <mask id="Browser-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
            <path
              id="Browser-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 7C7 6.447 7.448 6 8 6C8.552 6 9 6.447 9 7C9 7.553 8.552 8 8 8C7.448 8 7 7.553 7 7ZM11 7C11 6.447 11.448 6 12 6C12.552 6 13 6.447 13 7C13 7.553 12.552 8 12 8C11.448 8 11 7.553 11 7ZM5 9V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V9H5ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V11H19V18ZM18 3H6C4.346 3 3 4.346 3 6V9V11V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V11V9V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#Browser-omask0)">
            <g id="Browser-o&#Browser-o240;&#Browser-o159;&#Browser-o142;&#Browser-o168; Color">
              <rect id="Browser-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
