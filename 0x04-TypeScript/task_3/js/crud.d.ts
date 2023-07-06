import {RowID, RowElement} from './interface';

export function insertRow(row: RowElement): number; // return rowId
export function deleteRow(rowId: RowID): void; // returns nothing
export function updateRow(rowId: RowID, row: RowElement): RowID; // returns rowId
