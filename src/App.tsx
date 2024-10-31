import { Example } from "./demo/Example";
import { WorkingExample } from "./demo/step1-single-resource/SingleResourceExample";
import { StaticListExample } from "./demo/step2-static-list/StaticListExample";
function App() {
  return (
    <>
      <div className="text-red-500">Hello world</div>
      <Example />
      <hr />
      <WorkingExample />
      <hr />
      <h2 className="text-2xl font-bold">Static List Example</h2>
      <StaticListExample />
    </>
  );
}

export default App;
