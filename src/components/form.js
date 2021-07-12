import { useState } from "react";

const Form = ({ tasks, setTasks }) => {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [desc, setDesc] = useState("");
  const [project, setProject] = useState("");
  const [comments, setComments] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      date: date,
      hours: hours,
      description: desc,
      project: project,
      comments: comments,
    };
    //tasks.push(obj);

    setTasks((prevTask) => [...prevTask, obj]);

    setDate("");
    setHours("");
    setDesc("");
    setProject("");
    setComments("");
  };

  return (
    <form className="taskform" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Hours</label>
        <input
          type="text"
          placeholder="Add Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Project</label>
        <input
          type="text"
          placeholder="Add Project Name"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Comments</label>
        <input
          type="text"
          placeholder="Add Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Entry" className="btn btn-block" />
    </form>
  );
};

export default Form;
