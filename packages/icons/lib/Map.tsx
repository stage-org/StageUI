/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="MapIcon/Fill/map"><path id="MapMask" fillRule="evenodd" clipRule="evenodd" d="M19 17.4541L17 16.5561V6.54611L19 7.44411V17.4541ZM9 6.54611L11 7.44411V17.4541L9 16.5561V6.54611ZM20.41 5.88611L16.41 4.08811C16.395 4.08111 16.379 4.08011 16.364 4.07411C16.323 4.05811 16.282 4.04711 16.24 4.03611C16.201 4.02611 16.162 4.01711 16.122 4.01311C16.083 4.00811 16.044 4.00711 16.004 4.00711C15.96 4.00711 15.917 4.00811 15.873 4.01311C15.836 4.01711 15.801 4.02611 15.765 4.03511C15.721 4.04611 15.678 4.05811 15.635 4.07411C15.621 4.08011 15.604 4.08111 15.59 4.08811L12 5.70111L8.41 4.08811C8.395 4.08111 8.379 4.08011 8.364 4.07411C8.323 4.05811 8.282 4.04711 8.24 4.03611C8.201 4.02611 8.162 4.01711 8.122 4.01311C8.083 4.00811 8.044 4.00711 8.004 4.00711C7.96 4.00711 7.917 4.00811 7.873 4.01311C7.836 4.01711 7.801 4.02611 7.765 4.03511C7.721 4.04611 7.678 4.05811 7.635 4.07411C7.621 4.08011 7.604 4.08111 7.59 4.08811L3.59 5.88611C3.231 6.04711 3 6.40411 3 6.79811V19.0001C3 19.3391 3.172 19.6551 3.457 19.8401C3.621 19.9461 3.81 20.0001 4 20.0001C4.139 20.0001 4.279 19.9711 4.41 19.9121L8 18.2991L11.59 19.9121C11.605 19.9191 11.621 19.9161 11.637 19.9221C11.754 19.9691 11.875 20.0001 12 20.0001C12.125 20.0001 12.246 19.9691 12.363 19.9221C12.378 19.9161 12.396 19.9191 12.41 19.9121L16 18.2991L19.59 19.9121C19.721 19.9711 19.861 20.0001 20 20.0001C20.19 20.0001 20.379 19.9461 20.543 19.8401C20.828 19.6551 21 19.3391 21 19.0001V6.79811C21 6.40411 20.769 6.04711 20.41 5.88611Z"/><mask id="Mapmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="17"><path id="MapMask_2" fillRule="evenodd" clipRule="evenodd" d="M19 17.4541L17 16.5561V6.54611L19 7.44411V17.4541ZM9 6.54611L11 7.44411V17.4541L9 16.5561V6.54611ZM20.41 5.88611L16.41 4.08811C16.395 4.08111 16.379 4.08011 16.364 4.07411C16.323 4.05811 16.282 4.04711 16.24 4.03611C16.201 4.02611 16.162 4.01711 16.122 4.01311C16.083 4.00811 16.044 4.00711 16.004 4.00711C15.96 4.00711 15.917 4.00811 15.873 4.01311C15.836 4.01711 15.801 4.02611 15.765 4.03511C15.721 4.04611 15.678 4.05811 15.635 4.07411C15.621 4.08011 15.604 4.08111 15.59 4.08811L12 5.70111L8.41 4.08811C8.395 4.08111 8.379 4.08011 8.364 4.07411C8.323 4.05811 8.282 4.04711 8.24 4.03611C8.201 4.02611 8.162 4.01711 8.122 4.01311C8.083 4.00811 8.044 4.00711 8.004 4.00711C7.96 4.00711 7.917 4.00811 7.873 4.01311C7.836 4.01711 7.801 4.02611 7.765 4.03511C7.721 4.04611 7.678 4.05811 7.635 4.07411C7.621 4.08011 7.604 4.08111 7.59 4.08811L3.59 5.88611C3.231 6.04711 3 6.40411 3 6.79811V19.0001C3 19.3391 3.172 19.6551 3.457 19.8401C3.621 19.9461 3.81 20.0001 4 20.0001C4.139 20.0001 4.279 19.9711 4.41 19.9121L8 18.2991L11.59 19.9121C11.605 19.9191 11.621 19.9161 11.637 19.9221C11.754 19.9691 11.875 20.0001 12 20.0001C12.125 20.0001 12.246 19.9691 12.363 19.9221C12.378 19.9161 12.396 19.9191 12.41 19.9121L16 18.2991L19.59 19.9121C19.721 19.9711 19.861 20.0001 20 20.0001C20.19 20.0001 20.379 19.9461 20.543 19.8401C20.828 19.6551 21 19.3391 21 19.0001V6.79811C21 6.40411 20.769 6.04711 20.41 5.88611Z"/></mask><g mask="url(#Mapmask0)"><g id="Map&#Map240;&#Map159;&#Map142;&#Map168; Color"><rect id="MapBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Map-oIcon/Outline/map"><path id="Map-oMask" fillRule="evenodd" clipRule="evenodd" d="M19 17.4541L17 16.5561V6.54611L19 7.44411V17.4541ZM13 7.44411L15 6.54611V16.5561L13 17.4541V7.44411ZM9 6.54611L11 7.44411V17.4541L9 16.5561V6.54611ZM5 7.44411L7 6.54611V16.5561L5 17.4541V7.44411ZM20.41 5.88611L16.41 4.08811C16.395 4.08111 16.379 4.08011 16.364 4.07411C16.323 4.05811 16.282 4.04711 16.24 4.03611C16.201 4.02611 16.162 4.01711 16.122 4.01311C16.083 4.00811 16.044 4.00711 16.004 4.00711C15.96 4.00711 15.917 4.00811 15.873 4.01311C15.836 4.01711 15.801 4.02611 15.765 4.03511C15.721 4.04611 15.678 4.05811 15.635 4.07411C15.621 4.08011 15.604 4.08111 15.59 4.08811L12 5.70111L8.41 4.08811C8.395 4.08111 8.379 4.08011 8.364 4.07411C8.323 4.05811 8.282 4.04711 8.24 4.03611C8.201 4.02611 8.162 4.01711 8.122 4.01311C8.083 4.00811 8.044 4.00711 8.004 4.00711C7.96 4.00711 7.917 4.00811 7.873 4.01311C7.836 4.01711 7.801 4.02611 7.765 4.03511C7.721 4.04611 7.678 4.05811 7.635 4.07411C7.621 4.08011 7.604 4.08111 7.59 4.08811L3.59 5.88611C3.231 6.04711 3 6.40411 3 6.79811V19.0001C3 19.3391 3.172 19.6551 3.457 19.8401C3.621 19.9461 3.81 20.0001 4 20.0001C4.139 20.0001 4.279 19.9711 4.41 19.9121L8 18.2991L11.59 19.9121C11.605 19.9191 11.621 19.9161 11.637 19.9221C11.754 19.9691 11.875 20.0001 12 20.0001C12.125 20.0001 12.246 19.9691 12.363 19.9221C12.378 19.9161 12.396 19.9191 12.41 19.9121L16 18.2991L19.59 19.9121C19.721 19.9711 19.861 20.0001 20 20.0001C20.19 20.0001 20.379 19.9461 20.543 19.8401C20.828 19.6551 21 19.3391 21 19.0001V6.79811C21 6.40411 20.769 6.04711 20.41 5.88611Z"/><mask id="Map-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="18" height="17"><path id="Map-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M19 17.4541L17 16.5561V6.54611L19 7.44411V17.4541ZM13 7.44411L15 6.54611V16.5561L13 17.4541V7.44411ZM9 6.54611L11 7.44411V17.4541L9 16.5561V6.54611ZM5 7.44411L7 6.54611V16.5561L5 17.4541V7.44411ZM20.41 5.88611L16.41 4.08811C16.395 4.08111 16.379 4.08011 16.364 4.07411C16.323 4.05811 16.282 4.04711 16.24 4.03611C16.201 4.02611 16.162 4.01711 16.122 4.01311C16.083 4.00811 16.044 4.00711 16.004 4.00711C15.96 4.00711 15.917 4.00811 15.873 4.01311C15.836 4.01711 15.801 4.02611 15.765 4.03511C15.721 4.04611 15.678 4.05811 15.635 4.07411C15.621 4.08011 15.604 4.08111 15.59 4.08811L12 5.70111L8.41 4.08811C8.395 4.08111 8.379 4.08011 8.364 4.07411C8.323 4.05811 8.282 4.04711 8.24 4.03611C8.201 4.02611 8.162 4.01711 8.122 4.01311C8.083 4.00811 8.044 4.00711 8.004 4.00711C7.96 4.00711 7.917 4.00811 7.873 4.01311C7.836 4.01711 7.801 4.02611 7.765 4.03511C7.721 4.04611 7.678 4.05811 7.635 4.07411C7.621 4.08011 7.604 4.08111 7.59 4.08811L3.59 5.88611C3.231 6.04711 3 6.40411 3 6.79811V19.0001C3 19.3391 3.172 19.6551 3.457 19.8401C3.621 19.9461 3.81 20.0001 4 20.0001C4.139 20.0001 4.279 19.9711 4.41 19.9121L8 18.2991L11.59 19.9121C11.605 19.9191 11.621 19.9161 11.637 19.9221C11.754 19.9691 11.875 20.0001 12 20.0001C12.125 20.0001 12.246 19.9691 12.363 19.9221C12.378 19.9161 12.396 19.9191 12.41 19.9121L16 18.2991L19.59 19.9121C19.721 19.9711 19.861 20.0001 20 20.0001C20.19 20.0001 20.379 19.9461 20.543 19.8401C20.828 19.6551 21 19.3391 21 19.0001V6.79811C21 6.40411 20.769 6.04711 20.41 5.88611Z"/></mask><g mask="url(#Map-omask0)"><g id="Map-o&#Map-o240;&#Map-o159;&#Map-o142;&#Map-o168; Color"><rect id="Map-oBase" width="24" height="24"/></g></g></g></g>,
    })
))