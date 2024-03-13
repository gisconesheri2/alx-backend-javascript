/// <reference path='./crud.d.ts' />
import { RowElement, RowId } from "./interface";
import * as CRUD from "./crud";

const row:RowElement = {firstName: 'Guillaume', lastName:'Salva'};
const newRowId: RowId = CRUD.insertRow(row);
const updatedRow:RowElement = {...row, age:23};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);