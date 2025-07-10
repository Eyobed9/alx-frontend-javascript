/// <reference path="./crud.d.ts" />
import {RowID , RowElement} from './interface';
import * as CRUD from "./crud.js" ;


// Test the insertRow, updateRow and deleteRow commands
const row: RowElement = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(row);
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);


