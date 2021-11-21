import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import React from "react";
import { Row, TableOptions, useTable } from "react-table";
import { grey } from "@mui/material/colors";

interface MaterialTableProps<D extends object> extends TableOptions<D> {
  isHoverStyle?: boolean;
  onRowClick?: (row: Row<D>) => void;
}

const MaterialTableFactory = <D extends object>() => {
  const Instance: React.FC<MaterialTableProps<D>> = ({
    columns,
    data,
    isHoverStyle,
    onRowClick,
  }) => {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    });
    const hoverStyle = isHoverStyle
      ? {
          bgcolor: grey[200],
          cursor: "pointer",
        }
      : undefined;
    return (
      <Table {...getTableProps}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                onClick={() => onRowClick!(row)}
                sx={{
                  ":hover": hoverStyle,
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  };
  Instance.defaultProps = {
    isHoverStyle: true,
    onRowClick: () => {},
  };

  return Instance;
};

export default MaterialTableFactory;
