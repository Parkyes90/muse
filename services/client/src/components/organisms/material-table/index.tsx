import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import React from "react";
import { TableOptions, useTable } from "react-table";

const MaterialTableFactory = <D extends object>() => {
  const Instance: React.FC<TableOptions<D>> = ({ columns, data }) => {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    });
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
              <TableRow {...row.getRowProps()}>
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

  return Instance;
};

export default MaterialTableFactory;
