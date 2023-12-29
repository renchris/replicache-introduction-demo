import { Portal } from '@ark-ui/react'
import { Stack } from 'styled-system/jsx'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Label } from './Label'
import type { DialogProps } from './Dialog'
import * as Dialog from './Dialog'

const DialogComponent = ({
  listName,
  setListName,
  handleSubmitList,
  children,
  ...props
}:{
  listName: string,
  setListName: Dispatch<SetStateAction<string>>,
  handleSubmitList: () => Promise<void>
  children: React.ReactNode }
& DialogProps) => (
  <Dialog.Root {...props}>
    <Dialog.Trigger asChild>
      {children}
    </Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner height="auto">
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>List</Dialog.Title>
              <Dialog.Description>
                <Label htmlFor="name">Name</Label>
              </Dialog.Description>
              <Input
                id="name"
                placeholder="List Name"
                value={listName}
                onChange={(event) => setListName(event.target.value)}
              />
            </Stack>
            <Stack gap="3" direction="row" width="full">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline" width="full">
                  Cancel
                </Button>
              </Dialog.CloseTrigger>
              <Button
                width="full"
                onClick={() => handleSubmitList()}
              >
                Confirm
              </Button>
            </Stack>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <Button aria-label="Close Dialog" variant="ghost" size="sm">
              close
            </Button>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
)

export default DialogComponent
