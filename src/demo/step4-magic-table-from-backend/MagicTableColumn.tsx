import { TableCell } from "@/components/ui/table";

import { Field } from "./Field";

type MagicTableColumnProps = {
  field: string;
  name: string;
};

export const MagicTableColumn = ({ field }: MagicTableColumnProps) => {
  return (
    <TableCell>
      <Field name={field} />
    </TableCell>
  );
};
