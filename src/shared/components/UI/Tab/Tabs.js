import React, { useState } from 'react';

import './Tabs.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState({
    'content': props.children[0].props.content,
    'id': props.children[0].props.id,
  });

  return (
    <div className='tabs'>
      <ul>
        {props.children.map((tab) => {
          if (tab !== false) {
            return (
              <li
                key={tab.props.id}
                id={tab.props.id}
                className={`tab ${activeTab.id === tab.props.id ? 'tab-active' : ''}`}
              >
                <a
                  onClick={() => setActiveTab({ 'content': tab.props.content, 'id': tab.props.id })}
                >
                  {tab.props.navTitle}
                </a>
              </li>
            );
          }
        })}
      </ul>
      <div>{activeTab.content}</div>
    </div>
  );
};
export default Tabs;
