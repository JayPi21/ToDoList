import React from "react";
import data from "../data/data.json";
import Task from "./Task";

const TaskList = () => {
  return (
    // <div>
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
  {/* {data.map((item)=><Task myitem={item} key={item.date}/>)} */}
  {data.map((item)=><tr>
            <td>{item.date}</td>
            <td>{item.hours}</td>
            <td>{item.description}</td>
            <td>{item.project}</td>
            <td>{item.comments}</td>
            <td>{item.links}</td>
        </tr>)}
    </table>
    // <div>
    //        
    //     </div>
  );
};

export default TaskList;
