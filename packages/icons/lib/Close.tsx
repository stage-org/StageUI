/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="CloseIcon/Fill/close">
          <path
            id="CloseMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"
          />
          <mask id="Closemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="13">
            <path
              id="CloseMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.70713 6.29301C7.31613 5.90201 6.68413 5.90201 6.29313 6.29301C5.90213 6.68401 5.90213 7.31601 6.29313 7.70701L10.5861 12L6.29313 16.293C5.90213 16.684 5.90213 17.316 6.29313 17.707C6.48813 17.902 6.74413 18 7.00013 18C7.25613 18 7.51213 17.902 7.70713 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"
            />
          </mask>
          <g mask="url(#Closemask0)">
            <g id="Close&#Close240;&#Close159;&#Close142;&#Close168; Color">
              <rect id="CloseBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Close-oIcon/Outline/close">
          <path
            id="Close-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.7071 6.29301C7.3161 5.90201 6.6841 5.90201 6.2931 6.29301C5.9021 6.68401 5.9021 7.31601 6.2931 7.70701L10.5861 12L6.2931 16.293C5.9021 16.684 5.9021 17.316 6.2931 17.707C6.4881 17.902 6.7441 18 7.0001 18C7.2561 18 7.5121 17.902 7.7071 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"
          />
          <mask id="Close-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="13">
            <path
              id="Close-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4141 12L17.7071 7.70701C18.0981 7.31601 18.0981 6.68401 17.7071 6.29301C17.3161 5.90201 16.6841 5.90201 16.2931 6.29301L12.0001 10.586L7.7071 6.29301C7.3161 5.90201 6.6841 5.90201 6.2931 6.29301C5.9021 6.68401 5.9021 7.31601 6.2931 7.70701L10.5861 12L6.2931 16.293C5.9021 16.684 5.9021 17.316 6.2931 17.707C6.4881 17.902 6.7441 18 7.0001 18C7.2561 18 7.5121 17.902 7.7071 17.707L12.0001 13.414L16.2931 17.707C16.4881 17.902 16.7441 18 17.0001 18C17.2561 18 17.5121 17.902 17.7071 17.707C18.0981 17.316 18.0981 16.684 17.7071 16.293L13.4141 12Z"
            />
          </mask>
          <g mask="url(#Close-omask0)">
            <g id="Close-o&#Close-o240;&#Close-o159;&#Close-o142;&#Close-o168; Color">
              <rect id="Close-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
