/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="FlagIcon/Fill/flag"><path id="FlagMask" fillRule="evenodd" clipRule="evenodd" d="M19.2676 4.67969C18.8056 4.34569 18.2076 4.25069 17.6686 4.42669C17.0926 4.61469 16.3426 4.71369 15.4996 4.71369C14.3756 4.71369 13.3996 4.33069 12.3656 3.92569C11.2036 3.47069 10.0006 2.99969 8.49963 2.99969C5.61363 2.99969 4.49563 3.95169 4.29963 4.14369C4.10863 4.33069 3.99963 4.58869 3.99963 4.85769V11.9997V15.1427V19.9997C3.99963 20.5527 4.44763 20.9997 4.99963 20.9997C5.55263 20.9997 5.99963 20.5527 5.99963 19.9997V15.7017C6.39463 15.5267 7.17263 15.2857 8.49963 15.2857C9.62363 15.2857 10.6006 15.6687 11.6346 16.0747C12.7966 16.5297 13.9986 16.9997 15.4996 16.9997C17.3086 16.9997 18.4226 16.6217 19.0406 16.3047C19.6326 15.9977 19.9996 15.4027 19.9996 14.7487V6.10569C19.9996 5.54569 19.7266 5.01269 19.2676 4.67969Z"/><mask id="Flagmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="17" height="19"><path id="FlagMask_2" fillRule="evenodd" clipRule="evenodd" d="M19.2676 4.67969C18.8056 4.34569 18.2076 4.25069 17.6686 4.42669C17.0926 4.61469 16.3426 4.71369 15.4996 4.71369C14.3756 4.71369 13.3996 4.33069 12.3656 3.92569C11.2036 3.47069 10.0006 2.99969 8.49963 2.99969C5.61363 2.99969 4.49563 3.95169 4.29963 4.14369C4.10863 4.33069 3.99963 4.58869 3.99963 4.85769V11.9997V15.1427V19.9997C3.99963 20.5527 4.44763 20.9997 4.99963 20.9997C5.55263 20.9997 5.99963 20.5527 5.99963 19.9997V15.7017C6.39463 15.5267 7.17263 15.2857 8.49963 15.2857C9.62363 15.2857 10.6006 15.6687 11.6346 16.0747C12.7966 16.5297 13.9986 16.9997 15.4996 16.9997C17.3086 16.9997 18.4226 16.6217 19.0406 16.3047C19.6326 15.9977 19.9996 15.4027 19.9996 14.7487V6.10569C19.9996 5.54569 19.7266 5.01269 19.2676 4.67969Z"/></mask><g mask="url(#Flagmask0)"><g id="Flag&#Flag240;&#Flag159;&#Flag142;&#Flag168; Color"><rect id="FlagBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Flag-oIcon/Outline/flag"><path id="Flag-oMask" fillRule="evenodd" clipRule="evenodd" d="M18 14.5859C17.604 14.7629 16.825 14.9999 15.5 14.9999C14.376 14.9999 13.399 14.6169 12.365 14.2119C11.203 13.7569 10.001 13.2859 8.5 13.2859C7.443 13.2859 6.624 13.4129 6 13.5839V11.9999V5.41591C6.396 5.23891 7.177 4.99991 8.5 4.99991C9.624 4.99991 10.601 5.38291 11.635 5.78791C12.797 6.24291 13.999 6.71391 15.5 6.71391C16.438 6.71391 17.276 6.61291 18 6.41391V14.5859ZM19.268 4.67991C18.806 4.34591 18.208 4.25091 17.669 4.42691C17.093 4.61391 16.343 4.71391 15.5 4.71391C14.376 4.71391 13.399 4.33091 12.365 3.92591C11.203 3.47091 10.001 2.99991 8.5 2.99991C5.613 2.99991 4.495 3.95191 4.3 4.14391C4.108 4.33091 4 4.58891 4 4.85691V11.9999V15.1429V19.9999C4 20.5529 4.447 20.9999 5 20.9999C5.553 20.9999 6 20.5529 6 19.9999V15.7019C6.395 15.5259 7.173 15.2859 8.5 15.2859C9.624 15.2859 10.601 15.6689 11.635 16.0739C12.797 16.5289 13.999 16.9999 15.5 16.9999C17.309 16.9999 18.423 16.6219 19.041 16.3049C19.633 15.9979 20 15.4019 20 14.7489V6.10591C20 5.54591 19.727 5.01291 19.268 4.67991Z"/><mask id="Flag-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="18"><path id="Flag-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M18 14.5859C17.604 14.7629 16.825 14.9999 15.5 14.9999C14.376 14.9999 13.399 14.6169 12.365 14.2119C11.203 13.7569 10.001 13.2859 8.5 13.2859C7.443 13.2859 6.624 13.4129 6 13.5839V11.9999V5.41591C6.396 5.23891 7.177 4.99991 8.5 4.99991C9.624 4.99991 10.601 5.38291 11.635 5.78791C12.797 6.24291 13.999 6.71391 15.5 6.71391C16.438 6.71391 17.276 6.61291 18 6.41391V14.5859ZM19.268 4.67991C18.806 4.34591 18.208 4.25091 17.669 4.42691C17.093 4.61391 16.343 4.71391 15.5 4.71391C14.376 4.71391 13.399 4.33091 12.365 3.92591C11.203 3.47091 10.001 2.99991 8.5 2.99991C5.613 2.99991 4.495 3.95191 4.3 4.14391C4.108 4.33091 4 4.58891 4 4.85691V11.9999V15.1429V19.9999C4 20.5529 4.447 20.9999 5 20.9999C5.553 20.9999 6 20.5529 6 19.9999V15.7019C6.395 15.5259 7.173 15.2859 8.5 15.2859C9.624 15.2859 10.601 15.6689 11.635 16.0739C12.797 16.5289 13.999 16.9999 15.5 16.9999C17.309 16.9999 18.423 16.6219 19.041 16.3049C19.633 15.9979 20 15.4019 20 14.7489V6.10591C20 5.54591 19.727 5.01291 19.268 4.67991Z"/></mask><g mask="url(#Flag-omask0)"><g id="Flag-o&#Flag-o240;&#Flag-o159;&#Flag-o142;&#Flag-o168; Color"><rect id="Flag-oBase" width="24" height="24"/></g></g></g></g>,
    })
))