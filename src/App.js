import { useState } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Timeline from "./Timeline";
import List from "./List";

function App() {
  const data = [
    {
      date: "20230522",
      status: 0,
      tasks: [],
    },
    {
      date: "20230523",
      status: 0,
      tasks: [],
    },
    {
      date: "20230524",
      status: 0,
      tasks: [
        { name: "New Sahla Update", status: -1 },
        { name: "Top Selling Item", status: 0 },
        { name: "Change Display", status: 2 },
      ],
    },
    {
      date: "20230525",
      status: 0,
      tasks: [
        { name: "New Sahla Update", status: -1 },
        { name: "Top Selling Item", status: 0 },
      ],
    },
    {
      date: "20230526",
      status: 0,
      tasks: [
        { name: "New Sahla Update", status: -1 },
        { name: "Top Selling Item", status: 0 },
      ],
    },
    {
      date: "20230527",
      status: 0,
      tasks: [],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div>
      <Header />
      <Tabs />
      <Timeline
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        data={data}
      />
      <List date={data[selectedItem].date} data={data} />
    </div>
  );
}

export default App;
