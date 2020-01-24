import { filled, outline } from '@flow-ui/core/misc/icons'
import callProp from '@flow-ui/core/misc/utils/callProp'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Icon: RefForwardingComponent<HTMLSpanElement, Types.Props> = (props, ref) => {

    const { css, attributes } = useComponent('Icon', { props, styles })

    const type = callProp(props.type, { filled, outline })

    if (!type) return null

    return (
        <span
            {...attributes}
            ref={ref}
            css={css.container}
            children={(
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    children={type}
                    css={css.icon}
                />
            )
            }
        />

    )
}

export default forwardRef(Icon)