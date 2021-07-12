import React from "react";

const Item = ({ item }) => {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.hours}</td>
      <td>{item.description}</td>
      <td>{item.project}</td>
      <td>{item.comments}</td>
      <td>{item.links}</td>
    </tr>
  );
};

export default Item;
