import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props) => {
  const labelColor = props.labelColor ? colorResolver(props.labelColor, theme) : undefined

  return {
    container: (variant) => [
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: theme.color.onSurface.rgb().string(),
        outline: 'none',
      },
      variant({
        disabled: [
          {
            cursor: 'not-allowed',
          },
        ],
      }),
    ],

    label: (variant) => [
      {
        marginLeft: '0.5rem',
        userSelect: 'none',
        color: labelColor?.rgb().string(),
      },
      variant({
        size: theme.assets.typography.text,
        disabled: [
          {
            color: theme.color.light.rgb().string(),
          },
        ],
        uppercase: [
          {
            textTransform: 'uppercase',
          },
        ],
      }),
    ],
  }
}

export default createClasses