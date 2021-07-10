import Header from "./components/Header";
import TaskList from "./components/TaskList";
// const path = require('path');


function App() {
  // console.log(path(__dirname));
  return (
    <div className="container">
      <Header />
      <TaskList />
      
    </div>
  );
}

export default App;
