/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="ScissorsIcon/Fill/scissors"><path id="ScissorsMask" fillRule="evenodd" clipRule="evenodd" d="M5.5 18C5.5 18.551 5.948 19 6.5 19C7.052 19 7.5 18.551 7.5 18C7.5 17.449 7.052 17 6.5 17C5.948 17 5.5 17.449 5.5 18ZM5.5 6C5.5 6.551 5.948 7 6.5 7C7.052 7 7.5 6.551 7.5 6C7.5 5.449 7.052 5 6.5 5C5.948 5 5.5 5.449 5.5 6ZM20.206 4.292C20.597 4.682 20.599 5.314 20.208 5.706L9.214 16.74C9.393 17.125 9.5 17.549 9.5 18C9.5 19.654 8.154 21 6.5 21C4.846 21 3.5 19.654 3.5 18C3.5 16.346 4.846 15 6.5 15C6.973 15 7.413 15.12 7.812 15.314L11.1 12.014L7.793 8.707C7.79141 8.70594 7.79066 8.70431 7.78986 8.70257C7.78915 8.70103 7.78841 8.69941 7.787 8.698C7.396 8.886 6.963 9 6.5 9C4.846 9 3.5 7.654 3.5 6C3.5 4.346 4.846 3 6.5 3C8.154 3 9.5 4.346 9.5 6C9.5 6.462 9.386 6.896 9.198 7.287C9.2 7.289 9.202 7.29011 9.204 7.29122C9.205 7.29178 9.206 7.29233 9.207 7.293L12.512 10.597L18.792 4.294C19.182 3.904 19.814 3.902 20.206 4.292ZM13.793 13.293C14.184 12.902 14.816 12.902 15.207 13.293L20.207 18.293C20.598 18.684 20.598 19.316 20.207 19.707C20.012 19.902 19.756 20 19.5 20C19.244 20 18.988 19.902 18.793 19.707L13.793 14.707C13.402 14.316 13.402 13.684 13.793 13.293Z"/><mask id="Scissorsmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="ScissorsMask_2" fillRule="evenodd" clipRule="evenodd" d="M5.5 18C5.5 18.551 5.948 19 6.5 19C7.052 19 7.5 18.551 7.5 18C7.5 17.449 7.052 17 6.5 17C5.948 17 5.5 17.449 5.5 18ZM5.5 6C5.5 6.551 5.948 7 6.5 7C7.052 7 7.5 6.551 7.5 6C7.5 5.449 7.052 5 6.5 5C5.948 5 5.5 5.449 5.5 6ZM20.206 4.292C20.597 4.682 20.599 5.314 20.208 5.706L9.214 16.74C9.393 17.125 9.5 17.549 9.5 18C9.5 19.654 8.154 21 6.5 21C4.846 21 3.5 19.654 3.5 18C3.5 16.346 4.846 15 6.5 15C6.973 15 7.413 15.12 7.812 15.314L11.1 12.014L7.793 8.707C7.79141 8.70594 7.79066 8.70431 7.78986 8.70257C7.78915 8.70103 7.78841 8.69941 7.787 8.698C7.396 8.886 6.963 9 6.5 9C4.846 9 3.5 7.654 3.5 6C3.5 4.346 4.846 3 6.5 3C8.154 3 9.5 4.346 9.5 6C9.5 6.462 9.386 6.896 9.198 7.287C9.2 7.289 9.202 7.29011 9.204 7.29122C9.205 7.29178 9.206 7.29233 9.207 7.293L12.512 10.597L18.792 4.294C19.182 3.904 19.814 3.902 20.206 4.292ZM13.793 13.293C14.184 12.902 14.816 12.902 15.207 13.293L20.207 18.293C20.598 18.684 20.598 19.316 20.207 19.707C20.012 19.902 19.756 20 19.5 20C19.244 20 18.988 19.902 18.793 19.707L13.793 14.707C13.402 14.316 13.402 13.684 13.793 13.293Z"/></mask><g mask="url(#Scissorsmask0)"><g id="Scissors&#Scissors240;&#Scissors159;&#Scissors142;&#Scissors168; Color"><rect id="ScissorsBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Scissors-oIcon/Outline/scissors"><path id="Scissors-oMask" fillRule="evenodd" clipRule="evenodd" d="M5.5 18C5.5 18.551 5.948 19 6.5 19C7.052 19 7.5 18.551 7.5 18C7.5 17.449 7.052 17 6.5 17C5.948 17 5.5 17.449 5.5 18ZM5.5 6C5.5 6.551 5.948 7 6.5 7C7.052 7 7.5 6.551 7.5 6C7.5 5.449 7.052 5 6.5 5C5.948 5 5.5 5.449 5.5 6ZM20.206 4.292C20.597 4.682 20.599 5.314 20.208 5.706L9.214 16.74C9.393 17.125 9.5 17.549 9.5 18C9.5 19.654 8.154 21 6.5 21C4.846 21 3.5 19.654 3.5 18C3.5 16.346 4.846 15 6.5 15C6.973 15 7.413 15.12 7.812 15.314L11.1 12.014L7.793 8.707C7.79141 8.70594 7.79066 8.70431 7.78986 8.70257C7.78915 8.70103 7.78841 8.69941 7.787 8.698C7.396 8.886 6.963 9 6.5 9C4.846 9 3.5 7.654 3.5 6C3.5 4.346 4.846 3 6.5 3C8.154 3 9.5 4.346 9.5 6C9.5 6.462 9.386 6.896 9.198 7.287C9.2 7.289 9.202 7.29011 9.204 7.29122C9.205 7.29178 9.206 7.29233 9.207 7.293L12.512 10.597L18.792 4.294C19.182 3.904 19.814 3.902 20.206 4.292ZM13.793 13.293C14.184 12.902 14.816 12.902 15.207 13.293L20.207 18.293C20.598 18.684 20.598 19.316 20.207 19.707C20.012 19.902 19.756 20 19.5 20C19.244 20 18.988 19.902 18.793 19.707L13.793 14.707C13.402 14.316 13.402 13.684 13.793 13.293Z"/><mask id="Scissors-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Scissors-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M5.5 18C5.5 18.551 5.948 19 6.5 19C7.052 19 7.5 18.551 7.5 18C7.5 17.449 7.052 17 6.5 17C5.948 17 5.5 17.449 5.5 18ZM5.5 6C5.5 6.551 5.948 7 6.5 7C7.052 7 7.5 6.551 7.5 6C7.5 5.449 7.052 5 6.5 5C5.948 5 5.5 5.449 5.5 6ZM20.206 4.292C20.597 4.682 20.599 5.314 20.208 5.706L9.214 16.74C9.393 17.125 9.5 17.549 9.5 18C9.5 19.654 8.154 21 6.5 21C4.846 21 3.5 19.654 3.5 18C3.5 16.346 4.846 15 6.5 15C6.973 15 7.413 15.12 7.812 15.314L11.1 12.014L7.793 8.707C7.79141 8.70594 7.79066 8.70431 7.78986 8.70257C7.78915 8.70103 7.78841 8.69941 7.787 8.698C7.396 8.886 6.963 9 6.5 9C4.846 9 3.5 7.654 3.5 6C3.5 4.346 4.846 3 6.5 3C8.154 3 9.5 4.346 9.5 6C9.5 6.462 9.386 6.896 9.198 7.287C9.2 7.289 9.202 7.29011 9.204 7.29122C9.205 7.29178 9.206 7.29233 9.207 7.293L12.512 10.597L18.792 4.294C19.182 3.904 19.814 3.902 20.206 4.292ZM13.793 13.293C14.184 12.902 14.816 12.902 15.207 13.293L20.207 18.293C20.598 18.684 20.598 19.316 20.207 19.707C20.012 19.902 19.756 20 19.5 20C19.244 20 18.988 19.902 18.793 19.707L13.793 14.707C13.402 14.316 13.402 13.684 13.793 13.293Z"/></mask><g mask="url(#Scissors-omask0)"><g id="Scissors-o&#Scissors-o240;&#Scissors-o159;&#Scissors-o142;&#Scissors-o168; Color"><rect id="Scissors-oBase" width="24" height="24"/></g></g></g></g>,
    })
))