import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z" /><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z" /></g>,
        outline: <g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z" /><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z" /></g>,
    })
))