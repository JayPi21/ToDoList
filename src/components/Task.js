import React from 'react'

const Task = (myitem) => {
    return (
        <tr>
            <td>{myitem.date}</td>
            <td>{myitem.hours}</td>
            <td>{myitem.description}</td>
            <td>{myitem.project}</td>
            <td>{myitem.links}</td>
        </tr>
    )
}

export default Task
