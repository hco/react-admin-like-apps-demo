import { Example } from "./demo/Example";
import { WorkingExample } from "./demo/step1-single-resource/WorkingExample";

function App() {
  return (
    <>
      <div className="text-red-500">Hello world</div>
      <Example />
      <hr />
      <WorkingExample />
    </>
  );
}

export default App;
