import { css } from '@emotion/react'
import SystemTypes from '@stage-ui/system/types'

export default (theme: SystemTypes.Theme) => {
    return {
        container: css({
            background: theme.color.surface.rgb().string(),
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '3rem',
            padding: '0 1rem',
        }),
    }
}