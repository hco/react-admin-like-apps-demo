import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Example: React.FunctionComponent = () => {
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
        <TableRow>
          <TableCell>2024-01-01</TableCell>
          <TableCell>Error</TableCell>
          <TableCell>This is an error message</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
