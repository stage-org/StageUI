/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="LinkIcon/Fill/link"><path id="LinkMask" fillRule="evenodd" clipRule="evenodd" d="M9.00003 16H7.21003C5.10403 16 3.20403 14.465 3.01703 12.366C2.80403 9.996 4.67303 8 7.00003 8H9.00003C9.55203 8 10 7.553 10 7C10 6.447 9.55203 6 9.00003 6H7.20903C4.16003 6 1.43903 8.187 1.05103 11.211C0.582029 14.869 3.43203 18 7.00003 18H9.00003C9.55203 18 10 17.553 10 17C10 16.447 9.55203 16 9.00003 16ZM8.00003 12C8.00003 12.553 8.44803 13 9.00003 13H15C15.552 13 16 12.553 16 12C16 11.447 15.552 11 15 11H9.00003C8.44803 11 8.00003 11.447 8.00003 12ZM16.7591 6.0002C19.8261 6.0002 22.5781 8.1972 22.9531 11.2422C23.4021 14.8882 20.5581 18.0002 17.0001 18.0002H15.0001C14.4481 18.0002 14.0001 17.5532 14.0001 17.0002C14.0001 16.4472 14.4481 16.0002 15.0001 16.0002H17.0001C19.3271 16.0002 21.1961 14.0042 20.9831 11.6342C20.7961 9.5352 18.8961 8.0002 16.7891 8.0002H15.0001C14.4481 8.0002 14.0001 7.5532 14.0001 7.0002C14.0001 6.4472 14.4431 6.0002 15.2491 6.0002H16.7591Z"/><mask id="Linkmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="6" width="22" height="13"><path id="LinkMask_2" fillRule="evenodd" clipRule="evenodd" d="M9.00003 16H7.21003C5.10403 16 3.20403 14.465 3.01703 12.366C2.80403 9.996 4.67303 8 7.00003 8H9.00003C9.55203 8 10 7.553 10 7C10 6.447 9.55203 6 9.00003 6H7.20903C4.16003 6 1.43903 8.187 1.05103 11.211C0.582029 14.869 3.43203 18 7.00003 18H9.00003C9.55203 18 10 17.553 10 17C10 16.447 9.55203 16 9.00003 16ZM8.00003 12C8.00003 12.553 8.44803 13 9.00003 13H15C15.552 13 16 12.553 16 12C16 11.447 15.552 11 15 11H9.00003C8.44803 11 8.00003 11.447 8.00003 12ZM16.7591 6.0002C19.8261 6.0002 22.5781 8.1972 22.9531 11.2422C23.4021 14.8882 20.5581 18.0002 17.0001 18.0002H15.0001C14.4481 18.0002 14.0001 17.5532 14.0001 17.0002C14.0001 16.4472 14.4481 16.0002 15.0001 16.0002H17.0001C19.3271 16.0002 21.1961 14.0042 20.9831 11.6342C20.7961 9.5352 18.8961 8.0002 16.7891 8.0002H15.0001C14.4481 8.0002 14.0001 7.5532 14.0001 7.0002C14.0001 6.4472 14.4431 6.0002 15.2491 6.0002H16.7591Z"/></mask><g mask="url(#Linkmask0)"><g id="Link&#Link240;&#Link159;&#Link142;&#Link168; Color"><rect id="LinkBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Link-oIcon/Outline/link"><path id="Link-oMask" fillRule="evenodd" clipRule="evenodd" d="M9 16H7.21C5.104 16 3.204 14.465 3.017 12.366C2.804 9.996 4.673 8 7 8H9C9.552 8 10 7.553 10 7C10 6.447 9.552 6 9 6H7.209C4.16 6 1.439 8.187 1.051 11.211C0.581998 14.869 3.432 18 7 18H9C9.552 18 10 17.553 10 17C10 16.447 9.552 16 9 16ZM8 12C8 12.553 8.448 13 9 13H15C15.552 13 16 12.553 16 12C16 11.447 15.552 11 15 11H9C8.448 11 8 11.447 8 12ZM16.7591 6.0002C19.8261 6.0002 22.5781 8.1972 22.9531 11.2422C23.4021 14.8882 20.5581 18.0002 17.0001 18.0002H15.0001C14.4481 18.0002 14.0001 17.5532 14.0001 17.0002C14.0001 16.4472 14.4481 16.0002 15.0001 16.0002H17.0001C19.3271 16.0002 21.1961 14.0042 20.9831 11.6342C20.7961 9.5352 18.8961 8.0002 16.7891 8.0002H15.0001C14.4481 8.0002 14.0001 7.5532 14.0001 7.0002C14.0001 6.4472 14.4431 6.0002 15.2491 6.0002H16.7591Z"/><mask id="Link-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="6" width="22" height="13"><path id="Link-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M9 16H7.21C5.104 16 3.204 14.465 3.017 12.366C2.804 9.996 4.673 8 7 8H9C9.552 8 10 7.553 10 7C10 6.447 9.552 6 9 6H7.209C4.16 6 1.439 8.187 1.051 11.211C0.581998 14.869 3.432 18 7 18H9C9.552 18 10 17.553 10 17C10 16.447 9.552 16 9 16ZM8 12C8 12.553 8.448 13 9 13H15C15.552 13 16 12.553 16 12C16 11.447 15.552 11 15 11H9C8.448 11 8 11.447 8 12ZM16.7591 6.0002C19.8261 6.0002 22.5781 8.1972 22.9531 11.2422C23.4021 14.8882 20.5581 18.0002 17.0001 18.0002H15.0001C14.4481 18.0002 14.0001 17.5532 14.0001 17.0002C14.0001 16.4472 14.4481 16.0002 15.0001 16.0002H17.0001C19.3271 16.0002 21.1961 14.0042 20.9831 11.6342C20.7961 9.5352 18.8961 8.0002 16.7891 8.0002H15.0001C14.4481 8.0002 14.0001 7.5532 14.0001 7.0002C14.0001 6.4472 14.4431 6.0002 15.2491 6.0002H16.7591Z"/></mask><g mask="url(#Link-omask0)"><g id="Link-o&#Link-o240;&#Link-o159;&#Link-o142;&#Link-o168; Color"><rect id="Link-oBase" width="24" height="24"/></g></g></g></g>,
    })
))