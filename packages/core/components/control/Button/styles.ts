import SystemTypes from '@stage-ui/system/types'
import colorResolver from '@stage-ui/system/resolvers/color'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  const { size, shape } = props
  const color = colorResolver(theme, props.color || theme.color.primary)
  const typography = theme.assets.typography.text[size || 'm'] || theme.assets.typography.text.m

  return {
    container: (variant) => [
      {
        fontWeight: 600,
        whiteSpace: 'nowrap',
        outline: 'none',
        boxShadow: 'unset',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        '&:active': {
          borderStyle: 'solid',
        },
        '&::-moz-focus-inner': {
          border: 0,
        },
      },

      variant({
        decoration: {
          outline: [
            {
              borderColor: color.alpha(0.7.rgb().string(),
              color: color.hex(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05.rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02.rgb().string(),
              },
              '&:disabled': {
                borderColor: theme.color.lightest.hex(),
                color: theme.color.light.hex(),
              },
            },
          ],
          text: [
            {
              color: color.hex(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05.rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02.rgb().string(),
              },
              '&:disabled': {
                color: theme.color.light.hex(),
              },
            },
          ],
          plain: [
            {
              borderColor: theme.assets.border.color,
              background: theme.color.surface.hex(),
              color: theme.color.onSurface.hex(),
              '&:hover:not([disabled])': {
                background: color.alpha(0.05.rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.alpha(0.02.rgb().string(),
              },
              '&:disabled': {
                background: theme.color.lightest.hex(),
                color: theme.color.light.hex(),
              },
            },
          ],
          filled: [
            {
              background: color.hex(),
              color:
                color.contrast(theme.color.onPrimary) > 3 ? theme.color.onPrimary.hex() : theme.color.onSurface.hex(),
              '&:hover:not([disabled])': {
                background: color.hsl().array()[2] > 0.2 ? color.darken(0.3.rgb().string() : color.lighten(1.5.rgb().string(),
              },
              '&:active:not([disabled])': {
                background: color.hsl().array()[2] > 0.2 ? color.darken(0.2.rgb().string() : color.lighten(0.75.rgb().string(),
              },
              '&:disabled': {
                background: theme.color.lightest.hex(),
                color: theme.color.light.hex(),
              },
            },
          ],
        },
        shape: {
          rounded: [
            {
              borderRadius: theme.radius.s,
            },
          ],
          round: [
            {
              borderRadius: '4rem',
            },
          ],
        },
        size: {
          xs: [
            {
              ...theme.assets.field.xs,
              ...(theme.assets.typography.text.xs as {}),
            },
          ],
          s: [
            {
              ...theme.assets.field.s,
              ...(theme.assets.typography.text.s as {}),
            },
          ],
          m: [
            {
              ...theme.assets.field.m,
              ...(theme.assets.typography.text.m as {}),
            },
          ],
          l: [
            {
              ...theme.assets.field.l,
              ...(theme.assets.typography.text.l as {}),
            },
          ],
          xl: [
            {
              ...theme.assets.field.xl,
              ...(theme.assets.typography.header.xs as {}),
            },
          ],
        },
      }),

      props.disabled && {
        cursor: 'not-allowed',
      },

      props.uppercase && {
        textTransform: 'uppercase',
      },
    ],
    child: (variant) => [
      {
        flexGrow: 0,
        flexShrink: 1,
        display: 'flex',
        alignItems: 'center',
        ' > span': {
          height: 'auto',
          '> svg': {
            height: typography.fontSize,
            width: typography.fontSize,
          },
        },
      },
      variant({
        align: {
          left: [
            {
              marginRight: '.375rem',
            },
            variant({
              size: {
                xs: { marginRight: '.125rem' },
                s: { marginRight: '.25rem' },
                l: { marginRight: '.5rem' },
                xl: { marginRight: '.75rem' },
              },
            }),
          ],
          right: [
            {
              marginLeft: '.375rem',
            },
            variant({
              size: {
                xs: { marginLeft: '.125rem' },
                s: { marginLeft: '.25rem' },
                l: { marginLeft: '.5rem' },
                xl: { marginLeft: '.75rem' },
              },
            }),
          ],
        },
      }),
    ],
  }
}

export default createClasses