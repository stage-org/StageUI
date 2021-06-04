import { keyframes } from '@emotion/react'
import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const spinAnimation = keyframes({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  })

  return {
    container: [
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        color: colorResolver(props.color || theme.color.hardest, theme)
          ?.rgb()
          .string(),
        fontSize: props.size || '1.125em',
      },
      styleProps.all,
    ],

    children: [
      {
        width: 'fit-content',
        animation: `${spinAnimation} ${props.duration || 1}s linear infinite`,
      },
    ],
  }
}

export default createClasses