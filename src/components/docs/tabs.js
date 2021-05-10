import React from 'react';

import { Tab, Segment, Container } from "semantic-ui-react"
import { DesktopTabContainer } from './web';
import { MobileTabContainer } from './mobile';



const panes = [
    { menuItem: "Mobile", render: () => <MobileTabContainer /> },
    { menuItem: "Desktop", render: () => <DesktopTabContainer /> },
]


export const TabsContainer = () => {
    return (
      <>
        <Segment style={{ padding: "8em 0em" }} vertical>
            <Container>
                <Tab
                    menu={{
                        fluid: true,
                        vertical: true,
                        tabular: true,
                        borderless: true,
                    }}
                    panes={panes}
                />
            </Container>
        </Segment>
      </>
    )
};
