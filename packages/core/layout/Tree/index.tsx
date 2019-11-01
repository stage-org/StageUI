import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import React, { forwardRef, useState } from 'react'
import Icon from '@flow-ui/core/content/Icon'
import { C1 } from '@flow-ui/core/content/Typography'
import Block from '@flow-ui/core/layout/Block'
import Flexbox from '@flow-ui/core/layout/Flexbox'
import treeStyles from './styles'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'

const Tree = (props: Types.Props & { lvl: number }, ref) => {
    let { children, decoration = 'drop' as Types.Props['decoration'], lvl = 0 } = props
    const { attributes } = useContainer(props)
    const [isOpen, setOpen] = useState((props.alwaysOpen || props.defaultOpen) ? true : false)
    const styles = useStyles<Types.Styles>(props, treeStyles, 'Tree')

    let treeChilds: React.ReactNode[] = []
    let otherChilds: React.ReactElement[] = []

    if (!Array.isArray(children)) {
        children = [children]
    }

    for (const child of children as any) {
        try {
            if (child.type.render.name === 'Tree') {
                treeChilds.push(child)
                continue
            }
            throw new Error()
        } catch (error) {
            if (child) {
                otherChilds.push(child)
            }
        }
    }

    const hasTreeChilds = treeChilds.length > 0 || otherChilds.length > 0
    const needIndent = lvl > 0 && (props.indent === true || (props.indent !== false && decoration === 'drop'))
    const disabled = decoration === 'drop' && (props.alwaysOpen || hasTreeChilds === false)

    const openHandle = (event) => {
        if (!props.alwaysOpen && hasTreeChilds) {
            setOpen(!isOpen)
        }
        attributes.onClick && attributes.onClick(event)
    }

    const keyPressHandle = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            openHandle(event)
        }
    }

    let label = props.label

    if (typeof label === 'string') {
        label = <C1 css={styles.label}>{label}</C1>
    }
    if (typeof label === 'function') {
        label = label(isOpen)
    }

    return (
        <Block ref={ref} css={styles.container({decoration,needIndent})}>
            <Flexbox {...attributes} onKeyPress={keyPressHandle} onClick={openHandle} alignItems="center">
                <Icon
                    type={t => isOpen ? t.outline.arrowIosDownward : t.outline.arrowIosForward}
                    css={styles.icon({decoration,disabled})}
                />
                {label}
            </Flexbox>
            <Block>
                {
                    treeChilds.map((child: React.ReactElement, index) => (
                        <Block css={styles.child({ isOpen })} key={index}>
                            {
                                React.cloneElement(child, {
                                    decoration: child.props.decoration || props.decoration,
                                    alwaysOpen: child.props.alwaysOpen || props.alwaysOpen,
                                    lvl: lvl + 1
                                })
                            }
                        </Block>
                    ))
                }
                {
                    otherChilds.map((child: React.ReactElement, index) => (
                        <Block css={styles.child({isOpen})} key={index} children={child} />
                    ))
                }
            </Block>
        </Block>
    )
}

export default forwardRef(Tree)