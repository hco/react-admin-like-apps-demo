import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ResourceContextProvider } from "./ResourceContext";
import { Field } from "./Field";
import { LogMessage } from "../LogMessage";

export const WorkingExample: React.FunctionComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <ResourceContextProvider
          resource={
            {
              "@timestamp": "2024-10-31T08:57:41.578Z",
              severity: "Error",
              message: "This is an error message",
            } satisfies LogMessage
          }
        >
          <TableRow>
            <TableCell>
              <Field name="@timestamp" />
            </TableCell>
            <TableCell>
              <Field name="severity" />
            </TableCell>
            <TableCell>
              <Field name="message" />
            </TableCell>
          </TableRow>
        </ResourceContextProvider>
      </TableBody>
    </Table>
  );
};
