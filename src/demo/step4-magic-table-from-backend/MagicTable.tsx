import React, { Children, isValidElement, PropsWithChildren } from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useResourceListContext } from "./ResourceListContext";
import { ResourceContextProvider } from "./ResourceContext";
import { MagicTableColumn } from "./MagicTableColumn";
export const MagicTable: React.FunctionComponent<PropsWithChildren> = ({
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
          {columns.map((column, index) => (
            <TableHead key={index}>{column.props.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource, index) => (
          <ResourceContextProvider resource={resource} key={index}>
            <TableRow>
              {columns.map((column, index) => (
                <MagicTableColumn {...column.props} key={index} />
              ))}
            </TableRow>
          </ResourceContextProvider>
        ))}
      </TableBody>
    </Table>
  );
};
