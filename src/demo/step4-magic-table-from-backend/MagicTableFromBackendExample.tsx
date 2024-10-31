import { MagicTable } from "./MagicTable";
import { MagicTableColumn } from "./MagicTableColumn";
import { BackendResources } from "./BackendResources";

export const MagicTableFromBackendExample: React.FunctionComponent = () => {
  return (
    <>
      <h3 className="text-2xl font-bold">Log Messages</h3>
      <BackendResources url="/api/logMessages">
        <MagicTable>
          <MagicTableColumn field="@timestamp" name="Date" />
          <MagicTableColumn field="severity" name="Severity" />
          <MagicTableColumn field="message" name="Message" />
        </MagicTable>
      </BackendResources>
      <h3 className="text-2xl font-bold">Users</h3>
      <BackendResources url="/api/users">
        <MagicTable>
          <MagicTableColumn field="id" name="ID" />
          <MagicTableColumn field="name" name="Name" />
        </MagicTable>
      </BackendResources>
    </>
  );
};
