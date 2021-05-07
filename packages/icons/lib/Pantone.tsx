/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="PantoneIcon/Fill/pantone"><path id="PantoneMask" fillRule="evenodd" clipRule="evenodd" d="M5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM8.818 17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091V15H8.818V17.091ZM10.818 4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21C9.064 21 10.818 19.246 10.818 17.091V4ZM20 13.1816H17.305L15.44 15.1816L11.881 18.9996L10.466 20.5176L10.017 20.9996H20C20.553 20.9996 21 20.5526 21 19.9996V14.1816C21 13.6286 20.553 13.1816 20 13.1816ZM14.0535 5.4438L18.1895 9.2998C18.5935 9.6768 18.6165 10.3098 18.2395 10.7128L11.7605 17.6618C11.7663 17.6138 11.7729 17.566 11.7796 17.5182C11.799 17.3774 11.8185 17.2363 11.8185 17.0908V14.6678V9.3078V6.3748L12.6405 5.4928C12.8215 5.2988 13.0725 5.1848 13.3365 5.1758C13.6105 5.1538 13.8605 5.2628 14.0535 5.4438Z"/><mask id="Pantonemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="PantoneMask_2" fillRule="evenodd" clipRule="evenodd" d="M5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM8.818 17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091V15H8.818V17.091ZM10.818 4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21C9.064 21 10.818 19.246 10.818 17.091V4ZM20 13.1816H17.305L15.44 15.1816L11.881 18.9996L10.466 20.5176L10.017 20.9996H20C20.553 20.9996 21 20.5526 21 19.9996V14.1816C21 13.6286 20.553 13.1816 20 13.1816ZM14.0535 5.4438L18.1895 9.2998C18.5935 9.6768 18.6165 10.3098 18.2395 10.7128L11.7605 17.6618C11.7663 17.6138 11.7729 17.566 11.7796 17.5182C11.799 17.3774 11.8185 17.2363 11.8185 17.0908V14.6678V9.3078V6.3748L12.6405 5.4928C12.8215 5.2988 13.0725 5.1848 13.3365 5.1758C13.6105 5.1538 13.8605 5.2628 14.0535 5.4438Z"/></mask><g mask="url(#Pantonemask0)"><g id="Pantone&#Pantone240;&#Pantone159;&#Pantone142;&#Pantone168; Color"><rect id="PantoneBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Pantone-oIcon/Outline/pantone"><path id="Pantone-oMask" fillRule="evenodd" clipRule="evenodd" d="M19 19H10.514L14.073 15.182H19V19ZM5 17.091V15H8.818V17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091ZM5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM13.422 7.588L16.095 10.081L10.818 15.74V10.381L13.422 7.588ZM20 13.182H15.937L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3L14.054 5.443C13.859 5.263 13.611 5.159 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L10.818 7.448V4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21H20C20.553 21 21 20.553 21 20V14.182C21 13.629 20.553 13.182 20 13.182Z"/><mask id="Pantone-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Pantone-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M19 19H10.514L14.073 15.182H19V19ZM5 17.091V15H8.818V17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091ZM5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM13.422 7.588L16.095 10.081L10.818 15.74V10.381L13.422 7.588ZM20 13.182H15.937L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3L14.054 5.443C13.859 5.263 13.611 5.159 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L10.818 7.448V4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21H20C20.553 21 21 20.553 21 20V14.182C21 13.629 20.553 13.182 20 13.182Z"/></mask><g mask="url(#Pantone-omask0)"><g id="Pantone-o&#Pantone-o240;&#Pantone-o159;&#Pantone-o142;&#Pantone-o168; Color"><rect id="Pantone-oBase" width="24" height="24"/></g></g></g></g>,
    })
))