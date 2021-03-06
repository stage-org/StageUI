import fieldStyles from '@stage-ui/core/misc/hocs/Field/styles'
import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    return {
        ...fieldStyles(props, theme),

        drop: (variant) => [
            {
                transition: 'all 0.2s',
                transform: `translateY(-1rem) scale(0.9)`,
                opacity: 0,
                visibility: 'hidden'
            },
            variant({
                isActive: [{
                    transform: `translateY(0) scale(1)`,
                    opacity: 1,
                    visibility: 'visible'
                }]
            })
        ],
        input: [
            {
                outline: 0,
                padding: 0,
                margin: 0,
                border: 'none',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
                resize: 'vertical',
                boxShadow: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'inherit',
                textOverflow: 'ellipsis',
                '&::placeholder': {
                    color: theme.color.light.rgb().string()
                }
            }
        ]
    }
}

export default styles