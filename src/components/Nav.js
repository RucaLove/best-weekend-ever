import React from 'react';
import {Button, Icon, SideNav, SideNavItem} from 'react-materialize';

const Nav = ({
}) => {
  return (
    <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
            user={{
                background: 'img/background.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem subheader>Event Choices</SideNavItem>
        <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        <SideNavItem href='#!second'>Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Results</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
  )
}

export default Nav
