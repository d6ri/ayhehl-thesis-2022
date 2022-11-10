import React, { useState } from "react";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.content);
  return (
    <div>
      <ul>
        {props.children.map((tab) => {
          if (tab !== false) {
            return (
              <li key={tab.props.id} id={tab.props.id}>
                <a onClick={() => setActiveTab(tab.props.content)}>{tab.props.navTitle}</a>
              </li>
            );
          }
        })}
      </ul>
      <div>{activeTab}</div>
    </div>
  );
};
export default Tabs;
