import PrefPanel from '@flow-ui/architect/src/PrefPanel'
import RenderPanel from '@flow-ui/architect/src/RenderPanel'
import TreePanel from '@flow-ui/architect/src/TreePanel'
import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import React from 'react'
import createStyles from './styles'
import { useFlow, Flexbox } from '@flow-ui/core'

class Architect extends React.Component {
    constructor(props: {}) {
        super(props)
        this.init(require('./demoData').default)
    }
    /**
     * This method will set items
     * but not rerender em.
     */
    private init(items: Architect) {
        this.items = require('./demoData').default
        // Add parent links
        const recursive = (items: ArchitectItem[]) => {
            items?.forEach(item => {
                if (Array.isArray(item.children)) {
                    for (let child of item.children) {
                        child.parent = item
                    }
                    recursive(item.children)
                }
            })
        }
        recursive(this.items)
    }
    /**
     * Store with all items
     */
    private items: ArchitectItem[] = []
    /**
     * Removes all recoreds
     * with $.dirty flag
     */
    private clearDirtyRecords() {
        const recursive = (items?: ArchitectItem[]) =>
            items?.filter(item => {
                item.children = recursive(item.children)
                return !item.$.dirty
            })
        this.items = recursive(this.items) as ArchitectItem[]
    }
    public tools: ArchitectTools = {
        /**
         * Current dragging element
         */
        captured: null,
        /**
         * Current focused element
         */
        focused: null,
        /**
         * Current target element
         * if captured and mouse over
         */
        target: null,
        /**
         * Will return all structure
         */
        getItems: () => this.items,
        move: () => {
            /**
             * Object need for links
             */
            const moveTool = {
                captured: this.tools.captured,
                target: this.tools.target,
            }
            /**
             * Thats for check if parent
             * not dropped in his childs
             */
            const checkSelfDrop = (parent?: ArchitectItem | null) => {
                if (!parent) {
                    return true
                }
                if (parent.id === moveTool.captured?.id) {
                    return false
                }
                return checkSelfDrop(parent.parent)                            
            }
            
            if (moveTool.captured) {
                if (moveTool.target) {
                    /**
                     * Do nothing is element dropped
                     * on itself
                     */
                    if (moveTool.captured.id === moveTool.target.id) {
                        return
                    }
                    if (!checkSelfDrop(moveTool.target.parent)) {
                        return
                    }
                    /**
                     * If there is not children prop
                     * then we'll try push to parent of target
                     */
                    if (!moveTool.target?.children) {
                        if (moveTool.target?.parent) {
                            moveTool.target = moveTool.target.parent
                        }
                    }
                }
                /**
                 * Select root as target if
                 * there is no target
                 */
                const target = moveTool.target?.children || this.items
                /**
                 * Clone element and
                 * them push to target
                 */
                target.push({
                    ...moveTool.captured, 
                    parent: moveTool.target,
                    $: {}
                })
                /**
                 * replace focused element
                 * if exist
                 */
                if (this.tools.focused?.id === this.tools.captured?.id) {
                    this.tools.focused = target[target.length - 1]
                }
                /**
                 * Clear target and
                 * remove dirty record
                 */
                this.tools.target = null
                this.tools.remove()
            }
        },
        update: () => {
            this.forceUpdate()
            /**
             * We should clear captured after
             * any updates, was causes 
             * issue with leak an old object
             */
            this.tools.captured = null
        },
        remove: () => {
            if (this.tools.captured) {
                this.tools.captured.$.dirty = true
                this.clearDirtyRecords()
                this.tools.update()
            }
        },
        /**
         * TODO: Some day
         */
        undo: () => void 0,
        redo: () => void 0,
    }

    render() {
        return (
            <ArchitectView tools={this.tools} />
        )
    }
}

/**
 * That is just for hooks
 */
const ArchitectView = (props: { tools: ArchitectTools}) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)

    return (
        <Flexbox css={styles.container}>
            <TreePanel tools={props.tools} />
            <RenderPanel tools={props.tools} />
            <PrefPanel tools={props.tools} /> 
        </Flexbox>
    )
}

export default Architect