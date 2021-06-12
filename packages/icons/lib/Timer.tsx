/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="TimerIcon/Fill/timer"><path id="TimerMask" fillRule="evenodd" clipRule="evenodd" d="M15 14H12C11.448 14 11 13.553 11 13V10C11 9.447 11.448 9 12 9C12.552 9 13 9.447 13 10V12H15C15.552 12 16 12.447 16 13C16 13.553 15.552 14 15 14ZM12.988 4.058C12.99 4.037 13 4.021 13 4V3H14C14.552 3 15 2.553 15 2C15 1.447 14.552 1 14 1H10C9.448 1 9 1.447 9 2C9 2.553 9.448 3 10 3H11V4C11 4.021 11.01 4.037 11.012 4.058C6.513 4.552 3 8.372 3 13C3 17.963 7.038 22 12 22C16.962 22 21 17.963 21 13C21 8.372 17.487 4.552 12.988 4.058Z"/><mask id="Timermask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="1" width="18" height="21"><path id="TimerMask_2" fillRule="evenodd" clipRule="evenodd" d="M15 14H12C11.448 14 11 13.553 11 13V10C11 9.447 11.448 9 12 9C12.552 9 13 9.447 13 10V12H15C15.552 12 16 12.447 16 13C16 13.553 15.552 14 15 14ZM12.988 4.058C12.99 4.037 13 4.021 13 4V3H14C14.552 3 15 2.553 15 2C15 1.447 14.552 1 14 1H10C9.448 1 9 1.447 9 2C9 2.553 9.448 3 10 3H11V4C11 4.021 11.01 4.037 11.012 4.058C6.513 4.552 3 8.372 3 13C3 17.963 7.038 22 12 22C16.962 22 21 17.963 21 13C21 8.372 17.487 4.552 12.988 4.058Z"/></mask><g mask="url(#Timermask0)"><g id="Timer&#Timer240;&#Timer159;&#Timer142;&#Timer168; Color"><rect id="TimerBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Timer-oIcon/Outline/timer"><path id="Timer-oMask" fillRule="evenodd" clipRule="evenodd" d="M15 12H13V10C13 9.447 12.552 9 12 9C11.448 9 11 9.447 11 10V13C11 13.553 11.448 14 12 14H15C15.552 14 16 13.553 16 13C16 12.447 15.552 12 15 12ZM12 19.75C8.278 19.75 5.25 16.722 5.25 13C5.25 9.278 8.278 6.25 12 6.25C15.722 6.25 18.75 9.278 18.75 13C18.75 16.722 15.722 19.75 12 19.75ZM12.988 4.058C12.99 4.037 13 4.021 13 4V3H14C14.552 3 15 2.553 15 2C15 1.447 14.552 1 14 1H10C9.448 1 9 1.447 9 2C9 2.553 9.448 3 10 3H11V4C11 4.021 11.01 4.037 11.012 4.058C6.513 4.552 3 8.372 3 13C3 17.963 7.038 22 12 22C16.962 22 21 17.963 21 13C21 8.372 17.487 4.552 12.988 4.058Z"/><mask id="Timer-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="1" width="18" height="21"><path id="Timer-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M15 12H13V10C13 9.447 12.552 9 12 9C11.448 9 11 9.447 11 10V13C11 13.553 11.448 14 12 14H15C15.552 14 16 13.553 16 13C16 12.447 15.552 12 15 12ZM12 19.75C8.278 19.75 5.25 16.722 5.25 13C5.25 9.278 8.278 6.25 12 6.25C15.722 6.25 18.75 9.278 18.75 13C18.75 16.722 15.722 19.75 12 19.75ZM12.988 4.058C12.99 4.037 13 4.021 13 4V3H14C14.552 3 15 2.553 15 2C15 1.447 14.552 1 14 1H10C9.448 1 9 1.447 9 2C9 2.553 9.448 3 10 3H11V4C11 4.021 11.01 4.037 11.012 4.058C6.513 4.552 3 8.372 3 13C3 17.963 7.038 22 12 22C16.962 22 21 17.963 21 13C21 8.372 17.487 4.552 12.988 4.058Z"/></mask><g mask="url(#Timer-omask0)"><g id="Timer-o&#Timer-o240;&#Timer-o159;&#Timer-o142;&#Timer-o168; Color"><rect id="Timer-oBase" width="24" height="24"/></g></g></g></g>,
    })
))