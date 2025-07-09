import { useState } from 'react'
import './JNavbar.css'
import { Classes, Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Tabs, Tab } from '@blueprintjs/core';

function JNavbar() {

  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading style={{ fontWeight: 'bold' }}>Jetstream</NavbarHeading>
        <NavbarDivider/>
      </NavbarGroup>
      <NavbarGroup>
        <Tabs>
          <Tab id="tab-select-dashboard" title="Dashboard" icon="home"/>
          <Tab id="tab-select-editor" title="Editor" icon="cube-edit"/>
          <Tab id="tab-select-files" title="Files" icon="folder-open"/>
          <Tab id="tab-select-database" title="Database" icon="data-search"/>
        </Tabs>
      </NavbarGroup>
      <NavbarGroup align={Alignment.END}>
        <Button icon="cog" variant="minimal"/>
        <Button icon="user" variant="minimal"/>
      </NavbarGroup>
    </Navbar>
  )
}

export default JNavbar