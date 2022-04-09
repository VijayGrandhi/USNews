import React from "react";
import { ForumEntries } from "../forum/ForumEntries"
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Forums = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="politics"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="politics" title="Politics">
          <ForumEntries currentUserId="1" topic="Politics"/>
        </Tab>
        <Tab eventKey="health" title="Health">
          <ForumEntries currentUserId="1" topic="Health"/>
        </Tab>
        <Tab eventKey="travel" title="Travel">
          <ForumEntries currentUserId="1" topic="Travel"/>
        </Tab>
        <Tab eventKey="education" title="Education">
          <ForumEntries currentUserId="1" topic="Education"/>
        </Tab>
      </Tabs>
    </div>
  );
};
