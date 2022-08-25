import React from "react";
import Box from "./Box";
import "../Styles/Table.css";

import useTableState from "../Hooks/TableState";

export default function Table() {
  const { table, handleClick } = useTableState();
  return (
    <div className="table">
      <Box
        content={table[0]}
        onClick={() => {
          handleClick(0);
        }}
      />
      <Box
        content={table[1]}
        onClick={() => {
          handleClick(1);
        }}
      />
      <Box
        content={table[2]}
        onClick={() => {
          handleClick(2);
        }}
      />
      <Box
        content={table[3]}
        onClick={() => {
          handleClick(3);
        }}
      />
      <Box
        content={table[4]}
        onClick={() => {
          handleClick(4);
        }}
      />
      <Box
        content={table[5]}
        onClick={() => {
          handleClick(5);
        }}
      />
      <Box
        content={table[6]}
        onClick={() => {
          handleClick(6);
        }}
      />
      <Box
        content={table[7]}
        onClick={() => {
          handleClick(7);
        }}
      />
      <Box
        content={table[8]}
        onClick={() => {
          handleClick(8);
        }}
      />
    </div>
  );
}
