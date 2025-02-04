import { Example } from "./demo/Example";
import { WorkingExample } from "./demo/step1-single-resource/SingleResourceExample";
import { StaticListExample } from "./demo/step2-static-list/StaticListExample";
import { MagicTableExample } from "./demo/step3-magic-table/MagicTableExample";
import { MagicTableFromBackendExample } from "./demo/step4-magic-table-from-backend/MagicTableFromBackendExample";
function App() {
  return (
    <>
      <h2 className="text-2xl font-bold">Example</h2>
      <Example />
      <hr />
      <h2 className="text-2xl font-bold">Working Example</h2>
      <WorkingExample />
      <hr />
      <h2 className="text-2xl font-bold">Static List Example</h2>
      <StaticListExample />
      <hr />
      <h2 className="text-2xl font-bold">Magic Table Example</h2>
      <MagicTableExample />
      <hr />
      <h2 className="text-2xl font-bold">Magic Table from Backend</h2>
      <MagicTableFromBackendExample />
    </>
  );
}

export default App;
