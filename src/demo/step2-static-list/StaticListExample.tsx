import React from "react";

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
import { ResourceList } from "./ResourceList";
export const StaticListExample: React.FunctionComponent = () => {
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
        <ResourceList
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
        </ResourceList>
      </TableBody>
    </Table>
  );
};
