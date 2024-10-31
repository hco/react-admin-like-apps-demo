import { LogMessage } from "../LogMessage";

import { ResourceListContextProvider } from "./ResourceListContext";
import { MagicTable } from "./MagicTable";
import { MagicTableColumn } from "./MagicTableColumn";

export const MagicTableExample: React.FunctionComponent = () => {
  return (
    <ResourceListContextProvider
      resources={[
        {
          "@timestamp": "2024-10-31T08:57:41.578Z",
          severity: "Error",
          message: "This is an error message",
        } satisfies LogMessage,
        {
          "@timestamp": "2024-10-31T08:57:41.578Z",
          severity: "Warning",
          message: "This is a warning message",
        } satisfies LogMessage,
      ]}
    >
      <MagicTable>
        <MagicTableColumn field="@timestamp" name="Date" />
        <MagicTableColumn field="severity" name="Severity" />
        <MagicTableColumn field="message" name="Message" />
      </MagicTable>
    </ResourceListContextProvider>
  );
};
