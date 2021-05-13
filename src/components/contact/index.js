import React, { useEffect, useState } from 'react';
import {
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Form,
  Icon,
  Card,
  Container
} from "semantic-ui-react"
import { MessagesArea } from './MessagesArea';

const responses = {
  hi: "Hi 👋🏽¡ thanks for chat with me",
  salute: "My name is Isus Bot 🤖",
  ask: "🤖: What is your name?",
  name: name => `🤖: Nice to meet you ${name}¡`,
  salute1: name => `🤖: Nice to meet you ${name}¡`,
  ask1: "🤖: Do you want to send an email to Jesus? [Y/N]",
  error1: "🤖: Ups...",
  error2: "🤖: It seems that Jesus did not program me that answer...",
  error3: "🤖: Try one of these options:",
  not: "🤖: So sad...",
  not1: "🤖: Remember, you can contact him at any of the points below:",
  getEmail: "🤖: Ok, please tell me your email",
  getMessage: "🤖: Now write your message: (ENTER to send mail)",
  showLabel: "🤖: Thanks¡, this message was sent to Jesus Contreras: ",
  showMessage: ({ name, email, message }) => `from: ${email} \nto: jesuscontreras1996102@gmail.com \nSubject: 🤑 💵 ${name} wants to give you a million dollars 🤑 💵 \nMessage: ${message} \n`, // I'ts a joke
  thanksMessage:
    "🤖: Thanks for chat whit me, I'm sure Jesus will be happy to hear from you",
  contact: `
    📧: jesuscontreras1996102@gmail.com \n
    📱: +51 3105797607 \n
  `,
  options: `"yes": Send email to Jesus \n
"no": End chat with 🤖 \n
"restart": Start chat again \n`,
}

const USER = "user", ADM= "admin";
const linktoWs= `https://api.whatsapp.com/send?phone=573105797607`

export const ContactIndex = () => {
  const [messages, addMessages] = useState([]);
  const [userMessages, addUserMessages] = useState([]);
  const [adminMessages, addAdminMessages] = useState([]);
  const [userMail, changeInfo] = useState({email: '', message: ''});
  const [message, chageText] = useState('');
  const [writing, writeToggle] = useState(false)
  const [fetch, fetchToggle] = useState(false)
  const [third, thirdToggle] = useState(false);
  const [fourth, fourthToggle] = useState(false);

  useEffect(() => {
    let userMsg= messages.filter(({ from }) => from === USER)
    let adminMsg= messages.filter(({ from }) => from === ADM)
    addUserMessages(userMsg)
    addAdminMessages(adminMsg)
  },[messages])



  const restartChat = () => {
    addMessages([])
    addUserMessages([])
    addAdminMessages([])
    thirdToggle(true)
    fourthToggle(true)
    writeToggle(false)
    fetchToggle(false)
  }

  const submit = (params) => {
      if (!!message) {
        addMessages([
          ...messages,
          {
            from: USER,
            message,
          },
        ])
        chageText('')
        writeToggle(true)
      }
  }

  const secondMessage = () => {
    fetchToggle(true)
    setTimeout(() => {
        console.log('el segunda vez');
        let msg = [...messages, { from: ADM, message: responses.salute1(userMessages[1].message)}]
        addMessages(msg)
        setTimeout(() => {
          addMessages([...msg, { from: ADM, message: responses.ask1 }])
          writeToggle(false)
          fetchToggle(false)
        },800)
    }, 1500)
  }


  const thirdMessage = () => {
    fetchToggle(true)
    thirdToggle(true)
    setTimeout(() => {
        console.log('el tercera vez');
        let res = userMessages[2].message
        if (
          res.toLocaleLowerCase() == "yes" ||
          res.toLocaleLowerCase() == "y"
        ) {
          let msg = [...messages, { from: ADM, message: responses.getEmail}]
          addMessages(msg)
          writeToggle(false)
          fetchToggle(false)
        } else if (
          res.toLocaleLowerCase() == "no" ||
          res.toLocaleLowerCase() == "n"
        ) {
          let msg = [
            ...messages.slice(0, -1),
            { from: ADM, message: responses.not },
            { from: ADM, message: responses.not1 },
            {
              from: ADM,
              message: responses.contact,
              pre: true,
              link: linktoWs,
            },
          ]
          addMessages(msg)
          writeToggle(false)
          fetchToggle(false)

        } else if (res.toLocaleLowerCase().replace(/\s+/g, "") == "restart") {
          restartChat()
        } else {
          let msg = [
            ...messages.slice(0, -1),
            { from: ADM, message: responses.error1 },
            { from: ADM, message: responses.error2 },
            { from: ADM, message: responses.error3 },
            { from: ADM, message: responses.options, pre: true },
          ]
          addMessages(msg)
          writeToggle(false)
          fetchToggle(false)
        }
    }, 1500)
  }


  const fourthMessage = () =>{
   fetchToggle(true)
   fourthToggle(true)
    setTimeout(() => {
        console.log('el cuarta vez');
        let msg = [...messages, { from: ADM, message: responses.getMessage}]
        addMessages(msg)
        writeToggle(false)
        fetchToggle(false)
    }, 1500)
  }

  const fifthMessage = () =>{
   fetchToggle(true)
    setTimeout(() => {
      let userData = {
        name: userMessages[1].message,
        email: userMessages[3].message,
        message: userMessages[4].message,
      }

      changeInfo(userData)

        console.log('el quinta vez');
        let msg = [
          ...messages,
          { from: ADM, message: responses.showLabel },
          { from: ADM, message: responses.showMessage(userData), pre: true},
        ]
        addMessages(msg)
        setTimeout(() => {
          addMessages([
            ...msg,
            { from: ADM, message: responses.thanksMessage },
            { from: ADM, message: responses.not1 },
            {
              from: ADM,
              message: responses.contact,
              pre: true,
              link: linktoWs,
            },
          ])
          writeToggle(false)
          fetchToggle(false)
        }, 1800)
    }, 1500)
  }


  if (userMessages.length === 1 && messages.length === 1) {
    setTimeout(() => {
      console.log("el una vez")
      addMessages([
        ...messages,
        { from: ADM, message: responses.hi },
        { from: ADM, message: responses.salute },
        { from: ADM, message: responses.ask },
      ])
      writeToggle(false)
    }, 2000)
  }


  if (
    userMessages.find(
      ({ message }) =>
        message.toLocaleLowerCase().replace(/\s+/g, "") === "restart"
    )
  ) {
    restartChat()
  }


  if (userMessages.length > 1) {

    console.log(`userMessages.length: ${userMessages.length}`)
    switch (userMessages.length) {
      case 2:
        if (adminMessages.length === 3 && writing && !fetch) {
          console.log("hola")
          console.log(userMessages)
          secondMessage()
        }
        break
      case 3:
        console.log("user responds")
        if (writing && !fetch && !third) {
          console.log("hola thirdMessage")
          console.log(userMessages)
          thirdMessage()
        }
        break
      case 4:
        console.log("user responds 4")
        if (writing && !fetch && !fourth) {
          console.log("hola fourthMessage")
          console.log(userMessages)
          fourthMessage()
        }
        break
      case 5:
        console.log("user responds 5")
        if (writing && !fetch) {
          console.log("hola fifthMessage")
          console.log(userMessages)
          fifthMessage()
        }
        break

      default:
        break
    }
  }

    return (
      <>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center" className="mv-2" width={16}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Message Me
                </Header>
              </Grid.Column>
              <Grid.Column
                textAlign="center"
                className="mv-2"
                width={5}
              >
                <a href={linktoWs} target="_blank">
                  <Icon className="grey" name="whatsapp" size="huge" />
                </a>
              </Grid.Column>
              <Grid.Column
                textAlign="center"
                className="mv-2"
                width={5}
              >
                <a href="https://github.com/JContreras11" target="_blank">
                  <Icon className="grey" name="github" size="huge" />
                </a>
              </Grid.Column>
              <Grid.Column
                textAlign="center"
                className="mv-2"
                width={5}
              >
                <a href="https://www.linkedin.com/in/jesus-contreras-padilla-084349113/" target="_blank">
                  <Icon className="grey" name="linkedin" size="huge" />
                </a>
              </Grid.Column>
              <Grid.Column
                textAlign="justify"
                className="mv-2"
                className="mv-1"
                width={16}
              >
                <Container>
                  <Card fluid color="blue">
                    <Card.Content>
                      <MessagesArea messages={messages} writing={writing} />
                    </Card.Content>
                  </Card>
                </Container>
              </Grid.Column>
              <Grid.Column textAlign="center" className="mv-1" width={16}>
                <Container>
                  <Form onSubmit={() => submit()}>
                    <Form.Group inline widths="sixteen">
                      <Form.Field width="sixteen">
                        <input
                          placeholder="Hello... Uhm... Write something :D"
                          onChange={e => chageText(e.target.value)}
                          value={message}
                        />
                      </Form.Field>
                      <Form.Button inverted primary onClick={() => submit()}>
                        <Icon name="send" />
                      </Form.Button>
                    </Form.Group>
                  </Form>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    )
};
