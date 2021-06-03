import colorResolver from '@stage-ui/system/props/color'
import sizeProp from '@stage-ui/system/props/size'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  const { gap, dash, vertical } = props
  const color = colorResolver(props.color || theme.assets.border.color, theme)
    ?.rgb()
    .string()

  const resolvedGap = sizeProp(gap || dash, theme.spacing, (v) => v)
  const resolvedDash = sizeProp(dash, theme.spacing, (v) => v)

  return {
    container: [
      vertical
        ? [
            {
              height: 'auto',
              width: '1px',
            },
            resolvedGap && resolvedDash
              ? {
                  backgroundImage: `linear-gradient(
                            to bottom,
                            ${color},
                            ${color} ${resolvedDash},
                            transparent ${resolvedDash}, 
                            transparent ${resolvedGap} 
                        )`,
                  backgroundPosition: 'right top',
                  backgroundSize: `calc(${resolvedGap} + ${resolvedDash}) calc(${resolvedGap} + ${resolvedDash})`,
                  backgroundRepeat: 'repeat-y',
                }
              : {
                  background: color,
                },
          ]
        : [
            {
              width: '100%',
              height: '1px',
            },
            resolvedGap && resolvedDash
              ? {
                  backgroundImage: `linear-gradient(
                            to right,
                            ${color},
                            ${color} ${resolvedDash},
                            transparent ${resolvedDash}, 
                            transparent ${resolvedGap} 
                        )`,
                  backgroundPosition: 'left bottom',
                  backgroundSize: `calc(${resolvedGap} + ${resolvedDash}) calc(${resolvedGap} + ${resolvedDash})`,
                  backgroundRepeat: 'repeat-x',
                }
              : {
                  background: color,
                },
          ],
      styleProps.all,
    ],
  }
}

export default createClasses
