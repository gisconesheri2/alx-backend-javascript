import { RowElement, RowId } from "./interface";

declare  function insertRow(row: RowElement): RowId;

declare function updateRow(rowId: RowId, row: RowElement);

declare function deleteRow(rowId: RowId);

