import React from 'react'
import { Button, notify, Block, Meter, Header } from '@stage-ui/core'

export default () => {
    return (
        <Button
            onClick={() => {
                notify({
                    title: '',
                    message: '',
                    customContent: (
                        <Block p="1rem" w="20rem">
                            <Header pb="1rem">In progress</Header>
                            <Meter loading value={100} />
                        </Block>
                    ),
                    timeout: 3000
                })
            }}
            children="Show custom notify"
        />
    )
}