import { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Timeline from "./Timeline";
import List from "./List";
import { fetchAll } from "./api/query";

export default function Overview() {
  const [selectedItem, setSelectedItem] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchAll();
      if (tasks) setData(tasks);
    };
    getTasks();
  }, []);

  return (
    <>
      <Tabs />
      {data && data.length > 0 && (
        <>
          <Timeline
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            data={data}
          />
          <List date={data[selectedItem].date} data={data} />
        </>
      )}
    </>
  );
}
