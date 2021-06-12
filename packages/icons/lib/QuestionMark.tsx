/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="QuestionMarkIcon/Fill/question-mark">
          <path
            id="QuestionMarkMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z"
          />
          <mask id="QuestionMarkmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="4" width="10" height="16">
            <path
              id="QuestionMarkMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z"
            />
          </mask>
          <g mask="url(#QuestionMarkmask0)">
            <g id="QuestionMark&#QuestionMark240;&#QuestionMark159;&#QuestionMark142;&#QuestionMark168; Color">
              <rect id="QuestionMarkBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="QuestionMark-oIcon/Outline/question-mark">
          <path
            id="QuestionMark-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z"
          />
          <mask
            id="QuestionMark-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="7"
            y="4"
            width="10"
            height="16"
          >
            <path
              id="QuestionMark-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z"
            />
          </mask>
          <g mask="url(#QuestionMark-omask0)">
            <g id="QuestionMark-o&#QuestionMark-o240;&#QuestionMark-o159;&#QuestionMark-o142;&#QuestionMark-o168; Color">
              <rect id="QuestionMark-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
