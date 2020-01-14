import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
            padding: '1rem',
            paddingTop: '5rem',
        }),
        panel: {
            padding: '2rem',
            border: '1px solid',
            borderColor: theme.color.lightest.hex(),
            background: theme.color.background.hex(),
            borderRadius: '0.5rem',
            marginTop:'0.5rem',
        },
        componentName: (active: boolean) => (
            css({
                position: 'absolute',
                top: '0.25rem',
                right: '0.5rem',
                padding: '0.125rem 0.5rem',
                borderRadius: '1rem',
                color: theme.color.light.hex(),
            }, active && {
                color: theme.color.onPrimary.hex(),
                background: theme.color.primary.hex()
            })
        )
    }
}