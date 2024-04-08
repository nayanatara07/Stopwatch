import Stopwatch from "./Stopwatch";

function App() {

    return (
        <>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 1: College Work</span>
                <Stopwatch />
            </div>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 2: Router protocol and 0xCommit</span>
                <Stopwatch />
            </div>
            <div className="stopwatch-container">
                <span className="stopwatch-label">Stopwatch 3: Donatuz</span>
                <Stopwatch />
            </div>
        </>
    );
    

}
export default App;