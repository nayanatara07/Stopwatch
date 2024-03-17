import Stopwatch from "./Stopwatch";

function App() {

  return (
    <>
        <div>
            <span style={{ fontWeight: 'bold' }}>Stopwatch 1: Task A</span>
            <Stopwatch />
        </div>
        <div>
            <span style={{ fontWeight: 'bold' }}>Stopwatch 2: Task B</span>
            <Stopwatch />
        </div>
        <div>
            <span style={{ fontWeight: 'bold' }}>Stopwatch 3: Task C</span>
            <Stopwatch />
        </div>
    </>
);

}
export default App;