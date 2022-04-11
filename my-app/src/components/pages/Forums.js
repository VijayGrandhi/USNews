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
          <ForumEntries currentUserId="1" topic="Politics" discussiontopics={[" Is the american media a balanced medium which represents several points of view?", " What is next for the democratic party?", " Question for the usnews crowd, how do you prefer to consume information?"]} />
        </Tab>
        <Tab eventKey="health" title="Health">
          <ForumEntries currentUserId="1" topic="Health" discussiontopics={[" What keeps you motivated to stay healthy?", " Talk about the craziest home remedies you have ever heard", " What is your favorite facemask design?"]}/>
        </Tab>
        <Tab eventKey="travel" title="Travel">
          <ForumEntries currentUserId="1" topic="Travel" discussiontopics={[" Top destinations that were tarnished by social media?", " Where would you love to take your dog", " Best food in France?"]}/>
        </Tab>
        <Tab eventKey="education" title="Education">
          <ForumEntries currentUserId="1" topic="Education" discussiontopics={[" Besides educational ranking, what is the most import aspect for any college", " How many years does a PhD take at most?", " Question for the usnews crowd, what is your biggest regret in college?"]}/>
        </Tab>
      </Tabs>
    </div>
  );
};
