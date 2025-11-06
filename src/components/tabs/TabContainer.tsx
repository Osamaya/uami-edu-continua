import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import React from "react";
import "./TabContainer.css";
import type{TabItem, TabsContainerProps}from "./TabContainerType"

export const TabsContainer: React.FC<TabsContainerProps> = ({ tabs }) => {
  return (
    <TabGroup>
      <TabList className="tabs-list">
        {tabs.map((t) => (
          <Tab key={t.label} className="tab-item data-[selected]:active">
            {t.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((t, i) => (
          <TabPanel key={i}>{t.content}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
