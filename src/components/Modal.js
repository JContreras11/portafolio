import React from "react"
import { Button, Icon, Image, Modal } from "semantic-ui-react"

export const ModalComponent = ({ children, open, setOpen, title, actions }) => {

  return (
    <Modal
      open={open}
      size="fullscreen"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
          {children}
      </Modal.Content>
      <Modal.Actions>
        {actions}
      </Modal.Actions>
    </Modal>
  )
}
