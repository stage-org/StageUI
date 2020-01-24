import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Flexbox: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { css, attributes } = useComponent('Flexbox', { props, styles })

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: css.container
        },
        props.children
    )
}

export default forwardRef(Flexbox)