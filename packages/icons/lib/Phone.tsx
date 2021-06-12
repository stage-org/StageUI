/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="PhoneIcon/Fill/phone">
          <path
            id="PhoneMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3999 22C8.90788 22 1.99988 15.092 1.99988 6.6C1.99988 4.063 4.06388 2 6.59988 2C6.85988 2 7.11688 2.022 7.36588 2.065C7.60888 2.104 7.85388 2.166 8.09088 2.248C8.41688 2.361 8.66088 2.634 8.73788 2.97L10.1079 8.934C10.1829 9.262 10.0879 9.606 9.85488 9.85C9.71788 9.992 9.71488 9.995 8.47488 10.644C9.47888 12.818 11.2239 14.557 13.3549 15.527C14.0039 14.286 14.0079 14.282 14.1499 14.146C14.3949 13.912 14.7399 13.821 15.0669 13.893L21.0309 15.262C21.3659 15.339 21.6389 15.583 21.7519 15.908C21.8339 16.144 21.8949 16.388 21.9359 16.639C21.9779 16.886 21.9999 17.142 21.9999 17.4C21.9999 19.937 19.9369 22 17.3999 22Z"
          />
          <mask id="Phonemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20">
            <path
              id="PhoneMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.3999 22C8.90788 22 1.99988 15.092 1.99988 6.6C1.99988 4.063 4.06388 2 6.59988 2C6.85988 2 7.11688 2.022 7.36588 2.065C7.60888 2.104 7.85388 2.166 8.09088 2.248C8.41688 2.361 8.66088 2.634 8.73788 2.97L10.1079 8.934C10.1829 9.262 10.0879 9.606 9.85488 9.85C9.71788 9.992 9.71488 9.995 8.47488 10.644C9.47888 12.818 11.2239 14.557 13.3549 15.527C14.0039 14.286 14.0079 14.282 14.1499 14.146C14.3949 13.912 14.7399 13.821 15.0669 13.893L21.0309 15.262C21.3659 15.339 21.6389 15.583 21.7519 15.908C21.8339 16.144 21.8949 16.388 21.9359 16.639C21.9779 16.886 21.9999 17.142 21.9999 17.4C21.9999 19.937 19.9369 22 17.3999 22Z"
            />
          </mask>
          <g mask="url(#Phonemask0)">
            <g id="Phone&#Phone240;&#Phone159;&#Phone142;&#Phone168; Color">
              <rect id="PhoneBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Phone-oIcon/Outline/phone">
          <path
            id="Phone-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.60009 4C5.16609 4 4.00009 5.166 4.00009 6.6C4.00009 13.988 10.0111 20 17.4001 20C18.8331 20 20.0001 18.834 20.0001 17.4C20.0001 17.289 19.9931 17.18 19.9791 17.072L15.3591 16.012C15.2671 16.188 15.1661 16.379 15.0741 16.557C14.6181 17.427 14.2881 18.059 13.4461 17.72C10.1401 16.56 7.44109 13.86 6.26609 10.514C5.90909 9.729 6.58909 9.373 7.45109 8.923C7.62609 8.831 7.81509 8.732 7.98809 8.642L6.92809 4.021C6.81709 4.007 6.70909 4 6.60009 4ZM17.4001 22C8.90809 22 2.00009 15.092 2.00009 6.6C2.00009 4.063 4.06309 2 6.60009 2C6.86009 2 7.11709 2.022 7.36609 2.065C7.60909 2.104 7.85309 2.166 8.09109 2.248C8.41609 2.361 8.66109 2.634 8.73809 2.97L10.1071 8.934C10.1831 9.262 10.0881 9.606 9.85409 9.85C9.71809 9.992 9.71509 9.995 8.47509 10.644C9.47909 12.818 11.2241 14.557 13.3541 15.527C14.0041 14.286 14.0081 14.282 14.1501 14.146C14.3941 13.912 14.7401 13.821 15.0661 13.893L21.0311 15.262C21.3661 15.339 21.6391 15.583 21.7511 15.908C21.8331 16.144 21.8951 16.388 21.9361 16.639C21.9781 16.886 22.0001 17.142 22.0001 17.4C22.0001 19.937 19.9361 22 17.4001 22Z"
          />
          <mask id="Phone-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
            <path
              id="Phone-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.60009 4C5.16609 4 4.00009 5.166 4.00009 6.6C4.00009 13.988 10.0111 20 17.4001 20C18.8331 20 20.0001 18.834 20.0001 17.4C20.0001 17.289 19.9931 17.18 19.9791 17.072L15.3591 16.012C15.2671 16.188 15.1661 16.379 15.0741 16.557C14.6181 17.427 14.2881 18.059 13.4461 17.72C10.1401 16.56 7.44109 13.86 6.26609 10.514C5.90909 9.729 6.58909 9.373 7.45109 8.923C7.62609 8.831 7.81509 8.732 7.98809 8.642L6.92809 4.021C6.81709 4.007 6.70909 4 6.60009 4ZM17.4001 22C8.90809 22 2.00009 15.092 2.00009 6.6C2.00009 4.063 4.06309 2 6.60009 2C6.86009 2 7.11709 2.022 7.36609 2.065C7.60909 2.104 7.85309 2.166 8.09109 2.248C8.41609 2.361 8.66109 2.634 8.73809 2.97L10.1071 8.934C10.1831 9.262 10.0881 9.606 9.85409 9.85C9.71809 9.992 9.71509 9.995 8.47509 10.644C9.47909 12.818 11.2241 14.557 13.3541 15.527C14.0041 14.286 14.0081 14.282 14.1501 14.146C14.3941 13.912 14.7401 13.821 15.0661 13.893L21.0311 15.262C21.3661 15.339 21.6391 15.583 21.7511 15.908C21.8331 16.144 21.8951 16.388 21.9361 16.639C21.9781 16.886 22.0001 17.142 22.0001 17.4C22.0001 19.937 19.9361 22 17.4001 22Z"
            />
          </mask>
          <g mask="url(#Phone-omask0)">
            <g id="Phone-o&#Phone-o240;&#Phone-o159;&#Phone-o142;&#Phone-o168; Color">
              <rect id="Phone-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
