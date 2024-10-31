import React, { Children, isValidElement, PropsWithChildren } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Field } from "./Field";
import { LogMessage } from "../LogMessage";

import {
  ResourceListContextProvider,
  useResourceListContext,
} from "./ResourceListContext";
import { ResourceContextProvider } from "./ResourceContext";

const MagicTable: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { resources } = useResourceListContext();
  const columns = Children.toArray(children).filter(
    (
      child,
    ): child is React.ReactElement<
      React.ComponentProps<typeof MagicTableColumn>
    > => isValidElement(child) && child.type === MagicTableColumn,
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead>{column.props.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <ResourceContextProvider resource={resource}>
            <TableRow>
              {columns.map((column) => (
                <MagicTableColumn {...column.props} />
              ))}
            </TableRow>
          </ResourceContextProvider>
        ))}
      </TableBody>
    </Table>
  );
};

type MagicTableColumnProps = {
  field: string;
  name: string;
};

const MagicTableColumn = ({ field }: MagicTableColumnProps) => {
  return (
    <TableCell>
      <Field name={field} />
    </TableCell>
  );
};

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
