import * as React from 'react'
import './App.css'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import { Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Tabs, Tab, Button, Colors } from '@blueprintjs/core';
import WorkspacePage from './pages/WorkspacePage'
import AccountPage from './pages/AccountPage'

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTabId = searchParams.get('workspace');
  
  const navigate = useNavigate();
  const navigateToWorkspace = (tabId) => {
    navigate(`/?workspace=${tabId}`);
  }

  return (
    <>
      <Navbar>
        <NavbarGroup>
          <NavbarHeading style={{ fontWeight: 'bold', color: Colors.GRAY1 }}>Jetstream</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup>
          <NavbarDivider/>
          <Tabs id="workspace-tabs" selectedTabId={selectedTabId} onChange={navigateToWorkspace}>
            <Tab id="dashboard" title="Dashboard" icon="home"/>
            <Tab id="editor" title="Editor" icon="cube-edit"/>
            <Tab id="files" title="Files" icon="folder-open"/>
            <Tab id="database" title="Database" icon="data-search"/>
          </Tabs>
          <NavbarDivider/>
        </NavbarGroup>
        <NavbarGroup align={Alignment.END}>
          <Button icon="user" variant="minimal" onClick={() => {navigate('/account')}} />
        </NavbarGroup>
      </Navbar>
      <div style={{ height: "calc(100vh - 50px)"}} id="page-wrapper">
        <Routes>
          <Route path="/" element={<WorkspacePage/>}/>
          <Route path="/account" element={<AccountPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
