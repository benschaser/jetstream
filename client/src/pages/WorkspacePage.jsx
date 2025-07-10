import * as React from 'react';
import { Classes, Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Tabs, Tab, TabPanel } from '@blueprintjs/core';
import DashboardView from '../views/DashboardView';
import EditorView from '../views/EditorView';
import FilesView from '../views/FilesView';
import DatabaseView from '../views/DatabaseView';
import { useSearchParams } from 'react-router-dom';


function WorkspacePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTabId = searchParams.get('workspace');

  React.useEffect(() => {
    const validTabs = ['dashboard', 'editor', 'files', 'database'];
    if (!selectedTabId || !validTabs.includes(selectedTabId)) setSearchParams({ workspace: 'dashboard'});
  }, [selectedTabId, setSearchParams]);
  return (
    <>
      <TabPanel id="dashboard" selectedTabId={selectedTabId} panel={<DashboardView/>}/>
      <TabPanel id="editor" selectedTabId={selectedTabId} panel={<EditorView/>}/>
      <TabPanel id="files" selectedTabId={selectedTabId} panel={<FilesView/>}/>
      <TabPanel id="database" selectedTabId={selectedTabId} panel={<DatabaseView/>}/>
    </>
  )
}

export default WorkspacePage
