import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z" /></g>,
        outline: <g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z" /></g>,
    })
))