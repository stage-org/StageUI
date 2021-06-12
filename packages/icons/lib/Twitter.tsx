/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="TwitterIcon/Fill/twitter">
          <path
            id="TwitterMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.07693 20.0003C15.3229 20.0003 19.5149 14.3743 19.5149 9.03528C19.5149 8.88828 20.5449 8.00428 20.9859 6.16128C21.0759 5.78728 20.7119 5.49228 20.3689 5.64928C19.4889 6.05328 18.5959 5.73328 18.2079 5.27328C16.7159 3.64628 14.2209 3.56828 12.6339 5.09828C11.6109 6.08528 11.1769 7.55528 11.4939 8.95828C8.14293 9.19728 5.84193 7.60928 3.94993 5.43228C3.70593 5.14928 3.25293 5.29828 3.20193 5.67228C2.92193 7.75428 2.83393 12.8163 7.84993 15.7233C6.97893 16.9753 5.27393 17.7143 3.37593 18.0313C2.95593 18.1023 2.85593 18.6843 3.23993 18.8723C4.74393 19.6123 6.39693 19.9993 8.07693 19.9973"
          />
          <mask id="Twittermask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="17">
            <path
              id="TwitterMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.07693 20.0003C15.3229 20.0003 19.5149 14.3743 19.5149 9.03528C19.5149 8.88828 20.5449 8.00428 20.9859 6.16128C21.0759 5.78728 20.7119 5.49228 20.3689 5.64928C19.4889 6.05328 18.5959 5.73328 18.2079 5.27328C16.7159 3.64628 14.2209 3.56828 12.6339 5.09828C11.6109 6.08528 11.1769 7.55528 11.4939 8.95828C8.14293 9.19728 5.84193 7.60928 3.94993 5.43228C3.70593 5.14928 3.25293 5.29828 3.20193 5.67228C2.92193 7.75428 2.83393 12.8163 7.84993 15.7233C6.97893 16.9753 5.27393 17.7143 3.37593 18.0313C2.95593 18.1023 2.85593 18.6843 3.23993 18.8723C4.74393 19.6123 6.39693 19.9993 8.07693 19.9973"
            />
          </mask>
          <g mask="url(#Twittermask0)">
            <g id="Twitter&#Twitter240;&#Twitter159;&#Twitter142;&#Twitter168; Color">
              <rect id="TwitterBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Twitter-oIcon/Outline/twitter">
          <path
            id="Twitter-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0156 6.65431V6.65631V6.65431ZM8.5126 17.9973C8.5366 17.9973 8.5626 17.9983 8.5866 18.0003C14.2816 17.9633 17.6806 13.6123 17.6806 9.40631C17.6806 9.02431 17.8766 8.77731 18.0506 8.55831C18.2086 8.35831 18.4536 8.05031 18.6716 7.60631C17.8786 7.59831 17.1706 7.24631 16.7586 6.76431C16.3276 6.30331 15.7086 6.02131 15.0406 6.00131C14.3966 5.97531 13.7396 6.22331 13.2516 6.68631C12.6016 7.30331 12.3236 8.23431 12.5256 9.11431L12.7866 10.2533L11.6206 10.3353C8.6046 10.5613 6.5146 9.27031 5.0796 7.93431C5.0856 9.95431 5.7566 12.6493 8.8066 14.3873L9.7646 14.9333L9.1276 15.8343C8.4646 16.7733 7.4666 17.3723 6.4506 17.7553C7.1216 17.9153 7.8116 17.9973 8.4996 17.9973H8.5116H8.5126ZM8.5126 20.0003C8.4866 20.0003 8.4586 19.9993 8.4326 19.9973C6.8296 19.9863 5.2216 19.6133 3.7776 18.9143C3.2346 18.6503 2.9276 18.0723 3.0146 17.4723C3.1026 16.8653 3.5686 16.3893 4.1726 16.2913C5.2176 16.1193 6.0846 15.8133 6.7126 15.4043C2.8356 12.5053 2.9376 8.16531 3.1886 6.32731C3.2626 5.78931 3.6456 5.34031 4.1636 5.18331C4.6896 5.02331 5.2346 5.18331 5.5946 5.59231C7.1306 7.33331 8.6656 8.20831 10.4656 8.34131C10.5176 7.17631 11.0136 6.05331 11.8746 5.23531C12.7516 4.40231 13.8986 3.96631 15.1026 4.00231C16.3076 4.03931 17.4256 4.54731 18.2496 5.43231C18.3336 5.52831 18.6476 5.70231 19.0266 5.53231C19.5236 5.30931 20.0886 5.38331 20.5006 5.72731C20.9116 6.06831 21.0866 6.60531 20.9586 7.12831C20.6356 8.45931 19.9976 9.31731 19.6756 9.72831C19.5076 14.8333 15.3596 20.0003 8.5126 20.0003Z"
          />
          <mask id="Twitter-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="17">
            <path
              id="Twitter-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0156 6.65431V6.65631V6.65431ZM8.5126 17.9973C8.5366 17.9973 8.5626 17.9983 8.5866 18.0003C14.2816 17.9633 17.6806 13.6123 17.6806 9.40631C17.6806 9.02431 17.8766 8.77731 18.0506 8.55831C18.2086 8.35831 18.4536 8.05031 18.6716 7.60631C17.8786 7.59831 17.1706 7.24631 16.7586 6.76431C16.3276 6.30331 15.7086 6.02131 15.0406 6.00131C14.3966 5.97531 13.7396 6.22331 13.2516 6.68631C12.6016 7.30331 12.3236 8.23431 12.5256 9.11431L12.7866 10.2533L11.6206 10.3353C8.6046 10.5613 6.5146 9.27031 5.0796 7.93431C5.0856 9.95431 5.7566 12.6493 8.8066 14.3873L9.7646 14.9333L9.1276 15.8343C8.4646 16.7733 7.4666 17.3723 6.4506 17.7553C7.1216 17.9153 7.8116 17.9973 8.4996 17.9973H8.5116H8.5126ZM8.5126 20.0003C8.4866 20.0003 8.4586 19.9993 8.4326 19.9973C6.8296 19.9863 5.2216 19.6133 3.7776 18.9143C3.2346 18.6503 2.9276 18.0723 3.0146 17.4723C3.1026 16.8653 3.5686 16.3893 4.1726 16.2913C5.2176 16.1193 6.0846 15.8133 6.7126 15.4043C2.8356 12.5053 2.9376 8.16531 3.1886 6.32731C3.2626 5.78931 3.6456 5.34031 4.1636 5.18331C4.6896 5.02331 5.2346 5.18331 5.5946 5.59231C7.1306 7.33331 8.6656 8.20831 10.4656 8.34131C10.5176 7.17631 11.0136 6.05331 11.8746 5.23531C12.7516 4.40231 13.8986 3.96631 15.1026 4.00231C16.3076 4.03931 17.4256 4.54731 18.2496 5.43231C18.3336 5.52831 18.6476 5.70231 19.0266 5.53231C19.5236 5.30931 20.0886 5.38331 20.5006 5.72731C20.9116 6.06831 21.0866 6.60531 20.9586 7.12831C20.6356 8.45931 19.9976 9.31731 19.6756 9.72831C19.5076 14.8333 15.3596 20.0003 8.5126 20.0003Z"
            />
          </mask>
          <g mask="url(#Twitter-omask0)">
            <g id="Twitter-o&#Twitter-o240;&#Twitter-o159;&#Twitter-o142;&#Twitter-o168; Color">
              <rect id="Twitter-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
