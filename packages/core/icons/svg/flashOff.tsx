import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="flash-off"><rect width="24" height="24" opacity="0" /><path d="M17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11z" /><path d="M6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67z" /><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" /></g>,
        outline: <g data-name="flash-off"><rect width="24" height="24" opacity="0" /><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" /><path d="M12.54 18.06l.27-2.42L10 12.8H6.87l1.24-1.86L6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67-1.44-1.44z" /><path d="M11.46 5.94l-.27 2.42L14 11.2h3.1l-1.24 1.86 1.44 1.44 2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11l1.44 1.44z" /></g>,
    })
))