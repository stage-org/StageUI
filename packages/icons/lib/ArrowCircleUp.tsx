/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="ArrowCircleUpIcon/Fill/arrow-circle-up"><g id="ArrowCircleUp&#ArrowCircleUp240;&#ArrowCircleUp159;&#ArrowCircleUp142;&#ArrowCircleUp168; Color"><path id="ArrowCircleUpMask" fillRule="evenodd" clipRule="evenodd" d="M8.30957 10.1387L11.3096 7.27669C11.3546 7.2337 11.4106 7.21269 11.4606 7.17969C11.5146 7.14369 11.5626 7.10069 11.6226 7.0757C11.7436 7.02669 11.8716 6.99969 11.9996 6.99969C12.1306 6.99969 12.2606 7.02669 12.3826 7.07669C12.5046 7.12769 12.6156 7.2007 12.7076 7.29369L15.7066 10.2927C16.0976 10.6837 16.0976 11.3167 15.7066 11.7067C15.3166 12.0977 14.6836 12.0977 14.2926 11.7067L12.9996 10.4137V15.9997C12.9996 16.5527 12.5526 16.9997 11.9996 16.9997C11.4476 16.9997 10.9996 16.5527 10.9996 15.9997V10.3367L9.69057 11.5857C9.29057 11.9667 8.65857 11.9527 8.27657 11.5527C7.89457 11.1527 7.91057 10.5197 8.30957 10.1387ZM11.9996 21.9997C17.5146 21.9997 21.9996 17.5137 21.9996 11.9997C21.9996 6.48569 17.5146 1.99969 11.9996 1.99969C6.48557 1.99969 1.99957 6.48569 1.99957 11.9997C1.99957 17.5137 6.48557 21.9997 11.9996 21.9997Z"/><mask id="ArrowCircleUpmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="21" height="21"><path id="ArrowCircleUpMask_2" fillRule="evenodd" clipRule="evenodd" d="M8.30957 10.1387L11.3096 7.27669C11.3546 7.2337 11.4106 7.21269 11.4606 7.17969C11.5146 7.14369 11.5626 7.10069 11.6226 7.0757C11.7436 7.02669 11.8716 6.99969 11.9996 6.99969C12.1306 6.99969 12.2606 7.02669 12.3826 7.07669C12.5046 7.12769 12.6156 7.2007 12.7076 7.29369L15.7066 10.2927C16.0976 10.6837 16.0976 11.3167 15.7066 11.7067C15.3166 12.0977 14.6836 12.0977 14.2926 11.7067L12.9996 10.4137V15.9997C12.9996 16.5527 12.5526 16.9997 11.9996 16.9997C11.4476 16.9997 10.9996 16.5527 10.9996 15.9997V10.3367L9.69057 11.5857C9.29057 11.9667 8.65857 11.9527 8.27657 11.5527C7.89457 11.1527 7.91057 10.5197 8.30957 10.1387ZM11.9996 21.9997C17.5146 21.9997 21.9996 17.5137 21.9996 11.9997C21.9996 6.48569 17.5146 1.99969 11.9996 1.99969C6.48557 1.99969 1.99957 6.48569 1.99957 11.9997C1.99957 17.5137 6.48557 21.9997 11.9996 21.9997Z"/></mask><g mask="url(#ArrowCircleUpmask0)"><g id="ArrowCircleUp&#ArrowCircleUp240;&#ArrowCircleUp159;&#ArrowCircleUp142;&#ArrowCircleUp168; Color_2"><rect id="ArrowCircleUpBase" width="24" height="24"/></g></g></g></g></g>,
        outline: <g><g id="ArrowCircleUp-oIcon/Outline/arrow-circle-up"><path id="ArrowCircleUp-oMask" fillRule="evenodd" clipRule="evenodd" d="M12.7075 7.2935C12.6165 7.2015 12.5065 7.1285 12.3855 7.0785C12.2645 7.0275 12.1355 7.0015 12.0055 7.0015C12.0035 7.0015 12.0015 7.0005 11.9995 7.0005C11.9635 7.0005 11.9335 7.0165 11.8975 7.0205C11.8055 7.0305 11.7135 7.0405 11.6265 7.0755C11.5575 7.1035 11.5015 7.1505 11.4405 7.1925C11.3975 7.2225 11.3485 7.2395 11.3095 7.2765L8.3095 10.1385C7.9105 10.5205 7.8955 11.1525 8.2765 11.5525C8.6585 11.9525 9.2905 11.9665 9.6905 11.5855L10.9995 10.3365V16.0005C10.9995 16.5525 11.4475 17.0005 11.9995 17.0005C12.5525 17.0005 12.9995 16.5525 12.9995 16.0005V10.4145L14.2925 11.7075C14.4885 11.9025 14.7445 12.0005 14.9995 12.0005C15.2555 12.0005 15.5115 11.9025 15.7075 11.7075C16.0975 11.3165 16.0975 10.6835 15.7075 10.2935L12.7075 7.2935ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/><mask id="ArrowCircleUp-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path id="ArrowCircleUp-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M12.7075 7.2935C12.6165 7.2015 12.5065 7.1285 12.3855 7.0785C12.2645 7.0275 12.1355 7.0015 12.0055 7.0015C12.0035 7.0015 12.0015 7.0005 11.9995 7.0005C11.9635 7.0005 11.9335 7.0165 11.8975 7.0205C11.8055 7.0305 11.7135 7.0405 11.6265 7.0755C11.5575 7.1035 11.5015 7.1505 11.4405 7.1925C11.3975 7.2225 11.3485 7.2395 11.3095 7.2765L8.3095 10.1385C7.9105 10.5205 7.8955 11.1525 8.2765 11.5525C8.6585 11.9525 9.2905 11.9665 9.6905 11.5855L10.9995 10.3365V16.0005C10.9995 16.5525 11.4475 17.0005 11.9995 17.0005C12.5525 17.0005 12.9995 16.5525 12.9995 16.0005V10.4145L14.2925 11.7075C14.4885 11.9025 14.7445 12.0005 14.9995 12.0005C15.2555 12.0005 15.5115 11.9025 15.7075 11.7075C16.0975 11.3165 16.0975 10.6835 15.7075 10.2935L12.7075 7.2935ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/></mask><g mask="url(#ArrowCircleUp-omask0)"><g id="ArrowCircleUp-o&#ArrowCircleUp-o240;&#ArrowCircleUp-o159;&#ArrowCircleUp-o142;&#ArrowCircleUp-o168; Color"><rect id="ArrowCircleUp-oBase" width="24" height="24"/></g></g></g></g>,
    })
))