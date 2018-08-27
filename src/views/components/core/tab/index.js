import React from "react";

export const Tabs = (props) => {
  let className = props.className ? 'tab-navs ' + props.className : 'tab-navs';
  return <div className={className}>
    <div className="list-nav row">
      {
        props.children
      }
    </div>
  </div>;
};

export const Tab = (props) => {
  let className = props.className ? 'tab-nav ' + props.className : 'tab-nav';
  return <div className={className} onClick={() => props.handleChange(props.tabId)}>
    {props.label}
  </div>;
};

export const TabContainer = (props) =>
  <div className={props.className}>
    {
      props.children
    }
  </div>;