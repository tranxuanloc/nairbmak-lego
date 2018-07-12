import React from "react";

export const Tabs = (props) =>
  <div className="tab-navs">
    <div className="list-nav row">
      {
        props.children
      }
    </div>
  </div>;

export const Tab = (props) =>
  <div className={props.className} onClick={() => props.handleChange(props.tabId)}>
    {props.label}
  </div>;

export const TabContainer = (props) =>
  <div className={props.className}>
    {
      props.children
    }
  </div>;