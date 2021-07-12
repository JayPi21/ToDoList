import React, { useEffect, useState } from "react";
import Item from "./Item";
//import data from "../data/data.json";

const TaskList = ({ tasks }) => {
  const [items, setItems] = useState(tasks);
  useEffect(() => {
    setItems(tasks);
  }, [tasks]);
  return (
    // <div></div>
    //   {data.map((itrtr) => <h1>{itrtr.id}</h1>
    //   )}
    // </div>
    <table>
      <tr>
        <th>date</th>
        <th>hours</th>
        <th>description</th>
        <th>project</th>
        <th>comments</th>
        <th>links</th>
      </tr>
      {items?.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </table>
    // <div>
    //
    //     </div>
  );
};

export default TaskList;
