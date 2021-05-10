import React, { useState } from 'react';
import {
  Tab,
  Card,
  Header,
  Image,
  Icon,
  Grid,
  Container,
  Modal,
  Button,
} from "semantic-ui-react"
import { ModalComponent } from '../Modal';

 const images_url= [
     "https://picsum.photos/id/1/1200/1200",
     "https://picsum.photos/id/10/1200/1200",
     "https://picsum.photos/id/100/1200/1200",
     "https://picsum.photos/id/1000/1200/1200",
     "https://picsum.photos/id/1001/1200/1200",
 ]

export const MobileTabContainer = () => {
    const [open, setOpen] = useState(false)
    const [selectedImage, selectImage] = useState(images_url[0])

    return (
      <>
        <Tab.Pane>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row style={{ justifyContent: "space-between" }}>
              <Grid.Column width={5}>
                <Container>
                  <Card href="javascript:void(0)" onClick={() => setOpen(true)}>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Daniel</Card.Header>
                      <Card.Meta>Joined in 2016</Card.Meta>
                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        10 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Container>
              </Grid.Column>
              <Grid.Column width={5}>
                <Container>
                  <Card href="javascript:void(0)" onClick={() => setOpen(true)}>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Daniel</Card.Header>
                      <Card.Meta>Joined in 2016</Card.Meta>
                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        10 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Container>
              </Grid.Column>
              <Grid.Column width={5}>
                <Container>
                  <Card href="javascript:void(0)" onClick={() => setOpen(true)}>
                    <Image
                      src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                      wrapped
                      ui={false}
                    />
                    <Card.Content>
                      <Card.Header>Daniel</Card.Header>
                      <Card.Meta>Joined in 2016</Card.Meta>
                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        10 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
        <ModalComponent
          title="Proejct 1"
          open={open}
          setOpen={setOpen}
          actions={
            <Button onClick={() => setOpen(false)} primary>
              <Icon name="chevron left" />
              CloseModal
              <strong className="backSlash">/</strong>
              <Icon name="chevron right" />
            </Button>
          }
        >
          <div className="ui image big">
            <Image
              size="huge"
              src={selectedImage}
              wrapped
            />
            <div className="images-container mt-1">
                <Grid.Row>
                    <Grid.Column>
                        <Image
                            onClick={() => selectImage(images_url[0])}
                            size="small"
                            className="cursor"
                            src={images_url[0]}
                            wrapped
                        />
                        <Image
                            onClick={() => selectImage(images_url[1])}
                            size="small"
                            className="cursor"
                            src={images_url[1]}
                            wrapped
                        />
                        <Image
                            onClick={() => selectImage(images_url[2])}
                            size="small"
                            className="cursor"
                            src={images_url[2]}
                            wrapped
                        />
                        <Image
                            onClick={() => selectImage(images_url[3])}
                            size="small"
                            className="cursor"
                            src={images_url[3]}
                            wrapped
                        />
                    </Grid.Column>
                </Grid.Row>
            </div>
          </div>

          <Modal.Description>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <a href="#">
                <Icon size="small" name="linkify" />
                Name
              </a>
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon size="small" name="code" />
              Languages
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon size="small" name="cloud upload" />
              Delivery
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
          </Modal.Description>
        </ModalComponent>
      </>
    )
};
