
import colorProp from '@flow-ui/whale/utils/colorProp'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps> = (props, theme) => {
    const { loading } = props

    const color = colorProp(theme, props.color) || theme.color.primary
    const field = theme.assets.field[props.size || 'm'] || theme.assets.field.m

    return {
        container: (variant) => [
            {
                position: 'absolute',
                top:0,
                height: '100%',
                background: color.rgb().string(),
                animation: loading ? 'move 2s linear infinite' : 'none',
                overflow: 'hidden',
                borderRadius: '4rem',
                transition: 'width 0.25s',
                boxSizing: 'border-box',
                minHeight: `calc(${field.minHeight} / 4)`,
                zIndex: 1,
                '&:last-child': {
                    position: 'relative',
                },
                '&:after': loading && [
                    {
                        content: `''`,
                        position: 'absolute',
                        top: '0; left: 0; bottom: 0; right: 0',
                        backgroundImage: `linear-gradient(
                            -45deg, 
                            rgba(255, 255, 255, .2) 25%, 
                            transparent 25%, 
                            transparent 50%, 
                            rgba(255, 255, 255, .2) 50%, 
                            rgba(255, 255, 255, .2) 75%, 
                            transparent 75%, 
                            transparent
                        )`,
                        backgroundSize: '2rem 2rem',
                        zIndex: 1,
                        animation: 'move 2s linear infinite',
                        overflow: 'hidden',
                    },
                    variant({
                        size: {
                            xs: [{
                                backgroundSize: '0.5rem 0.5rem'
                            }],
                            s: [{
                                backgroundSize: '1rem 1rem'
                            }],
                            l: [{
                                backgroundSize: '3rem 3rem'
                            }],
                            xl: [{
                                backgroundSize: '4rem 4rem'
                            }],
                        }
                    }),
                ],
                '@keyframes move': {
                    '0%': {
                        backgroundposition: '0 0'
                    },
                    '100%': {
                        backgroundPosition: '2rem 2rem'
                    }
                }
            },
            variant({
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                }
            }),
        ]
    }
}

export default styles