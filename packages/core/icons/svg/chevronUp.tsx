import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z" /></g>,
        outline: <g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z" /></g>,
    })
))