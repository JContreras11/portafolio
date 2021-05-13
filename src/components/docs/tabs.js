import React from 'react';

import { Tab, Segment, Container } from "semantic-ui-react"
import { DesktopTabContainer } from './web';
import { MobileTabContainer } from './mobile';



const panes = [
  { menuItem: {icon: "mobile alternate", content: "Mobil"}, render: () => <MobileTabContainer /> },
  { menuItem: {icon: "laptop", content: "Desktop"},  render: () => <DesktopTabContainer /> },
]


export const TabsContainer = ({ selected, toggleSelected }) => {

  return (
    <>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container>
          <Tab
            activeIndex={selected}
            menu={{
              fluid: true,
              tabular: true,
              borderless: true,
            }}
            panes={panes}
            onTabChange={(e, { activeIndex }) => toggleSelected(activeIndex)}
          />
        </Container>
      </Segment>
    </>
  )
}
