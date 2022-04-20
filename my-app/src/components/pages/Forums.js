import React from "react";
import { ForumEntries } from "../forum/ForumEntries";
import { ForumEntriesChangeable } from "../forum/ForumEntriesChangeable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { Button, NavItem } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const Forums = () => {
  const [forumTopic, setforumTopic] = useState("");
  const [forumEntries, setforumEntries] = useState([]);

  const addToTopicArray = () => {
    setforumEntries([forumTopic, ...forumEntries]);
    console.log(forumEntries);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="politics"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="politics" title="Politics">
          {forumEntries.map((item) => (
            <ForumEntriesChangeable
              currentUserId="1"
              topic="Politics"
              discussiontopics={item}
            />
          ))}
          <ForumEntries
            currentUserId="1"
            topic="Politics"
            discussiontopics={[
              " Is the american media a balanced medium which represents several points of view?",
              " What is next for the democratic party?",
              " Question for the usnews crowd, how do you prefer to consume information?",
            ]}
          />
          <br />

          {/* <label><h1>Insert Topic</h1></label>
          <input
            type="text"
            placeholder="Enter your desired topic below"
            style={{width:350}}
            onChange={(e) => {
              setforumTopic(e.target.value);
            }}
          />
          <button onClick={addToTopicArray}>Enter!</button> */}

          <Form>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              style={{width:1000}}
              as="textarea"
              rows={2}
              size="lg"
              type="text"
              placeholder="Enter your desired topic here"
              onChange={(e) => {
                setforumTopic(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Think of any topic and add it here to discuss with the USNews
              crowd!
            </Form.Text>
            <br />
            <Button onClick={addToTopicArray} variant="primary">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="health" title="Health">
          <ForumEntries
            currentUserId="1"
            topic="Health"
            discussiontopics={[
              " What keeps you motivated to stay healthy?",
              " Talk about the craziest home remedies you have ever heard",
              " What is your favorite facemask design?",
            ]}
          />
          <Form>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              style={{width:1000}}
              as="textarea"
              rows={2}
              size="lg"
              type="text"
              placeholder="Enter your desired topic here"
              onChange={(e) => {
                setforumTopic(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Think of any topic and add it here to discuss with the USNews
              crowd!
            </Form.Text>
            <br />
            <Button onClick={addToTopicArray} variant="primary">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="travel" title="Travel">
          <ForumEntries
            currentUserId="1"
            topic="Travel"
            discussiontopics={[
              " Top destinations that were tarnished by social media?",
              " Where would you love to take your dog",
              " Best food in France?",
            ]}
          />
          <Form>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              style={{width:1000}}
              as="textarea"
              rows={2}
              size="lg"
              type="text"
              placeholder="Enter your desired topic here"
              onChange={(e) => {
                setforumTopic(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Think of any topic and add it here to discuss with the USNews
              crowd!
            </Form.Text>
            <br />
            <Button onClick={addToTopicArray} variant="primary">
              Submit
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="education" title="Education">
          <ForumEntries
            currentUserId="1"
            topic="Education"
            discussiontopics={[
              " Besides educational ranking, what is the most import aspect for any college",
              " How many years does a PhD take at most?",
              " Question for the usnews crowd, what is your biggest regret in college?",
            ]}
          />
          <Form>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              style={{width:1000}}
              as="textarea"
              rows={2}
              size="lg"
              type="text"
              placeholder="Enter your desired topic here"
              onChange={(e) => {
                setforumTopic(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Think of any topic and add it here to discuss with the USNews
              crowd!
            </Form.Text>
            <br />
            <Button onClick={addToTopicArray} variant="primary">
              Submit
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};
