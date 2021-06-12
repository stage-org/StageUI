/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="QuestionMarkCircleIcon/Fill/question-mark-circle"><path id="QuestionMarkCircleMask" fillRule="evenodd" clipRule="evenodd" d="M13 12.8369V13.9999C13 14.5529 12.553 14.9999 12 14.9999C11.447 14.9999 11 14.5529 11 13.9999V11.9999C11 11.4469 11.447 10.9999 12 10.9999C12.827 10.9999 13.5 10.3269 13.5 9.49989C13.5 8.67289 12.827 7.99989 12 7.99989C11.173 7.99989 10.5 8.67289 10.5 9.49989C10.5 10.0529 10.053 10.4999 9.5 10.4999C8.947 10.4999 8.5 10.0529 8.5 9.49989C8.5 7.56989 10.07 5.99989 12 5.99989C13.93 5.99989 15.5 7.56989 15.5 9.49989C15.5 11.0799 14.44 12.4029 13 12.8369ZM12 17.9999C11.447 17.9999 11 17.5529 11 16.9999C11 16.4469 11.447 15.9999 12 15.9999C12.553 15.9999 13 16.4469 13 16.9999C13 17.5529 12.553 17.9999 12 17.9999ZM12 1.99989C6.486 1.99989 2 6.48589 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48589 17.514 1.99989 12 1.99989Z"/><mask id="QuestionMarkCirclemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="20" height="21"><path id="QuestionMarkCircleMask_2" fillRule="evenodd" clipRule="evenodd" d="M13 12.8369V13.9999C13 14.5529 12.553 14.9999 12 14.9999C11.447 14.9999 11 14.5529 11 13.9999V11.9999C11 11.4469 11.447 10.9999 12 10.9999C12.827 10.9999 13.5 10.3269 13.5 9.49989C13.5 8.67289 12.827 7.99989 12 7.99989C11.173 7.99989 10.5 8.67289 10.5 9.49989C10.5 10.0529 10.053 10.4999 9.5 10.4999C8.947 10.4999 8.5 10.0529 8.5 9.49989C8.5 7.56989 10.07 5.99989 12 5.99989C13.93 5.99989 15.5 7.56989 15.5 9.49989C15.5 11.0799 14.44 12.4029 13 12.8369ZM12 17.9999C11.447 17.9999 11 17.5529 11 16.9999C11 16.4469 11.447 15.9999 12 15.9999C12.553 15.9999 13 16.4469 13 16.9999C13 17.5529 12.553 17.9999 12 17.9999ZM12 1.99989C6.486 1.99989 2 6.48589 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48589 17.514 1.99989 12 1.99989Z"/></mask><g mask="url(#QuestionMarkCirclemask0)"><g id="QuestionMarkCircle&#QuestionMarkCircle240;&#QuestionMarkCircle159;&#QuestionMarkCircle142;&#QuestionMarkCircle168; Color"><rect id="QuestionMarkCircleBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="QuestionMarkCircle-oIcon/Outline/question-mark-circle"><path id="QuestionMarkCircle-oMask" fillRule="evenodd" clipRule="evenodd" d="M8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5ZM11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18C11.447 18 11 17.553 11 17ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/><mask id="QuestionMarkCircle-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path id="QuestionMarkCircle-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5ZM11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18C11.447 18 11 17.553 11 17ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/></mask><g mask="url(#QuestionMarkCircle-omask0)"><g id="QuestionMarkCircle-o&#QuestionMarkCircle-o240;&#QuestionMarkCircle-o159;&#QuestionMarkCircle-o142;&#QuestionMarkCircle-o168; Color"><rect id="QuestionMarkCircle-oBase" width="24" height="24"/></g></g></g></g>,
    })
))