import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import { forwardRef, RefForwardingComponent } from 'react'
import dividerStyles from './styles'
import Types from './types'

const Divider: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { attributes } = useContainer(props)
    const { container: css } = useStyles<Types.Overrides>(props, dividerStyles, 'Divider')

    return jsx(
        'div',
        {
            ...attributes,
            ref,
            css
        }
    )
}

export default forwardRef(Divider)
