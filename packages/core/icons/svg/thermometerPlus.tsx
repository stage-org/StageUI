import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="thermometer-plus"><rect width="24" height="24" opacity="0" /><rect x="2" y="5" width="6" height="2" rx="1" ry="1" /><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)" /><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z" /></g>,
        outline: <g data-name="thermometer-plus"><rect width="24" height="24" opacity="0" /><rect x="2" y="5" width="6" height="2" rx="1" ry="1" /><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)" /><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z" /></g>,
    })
))