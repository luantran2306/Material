import {Component , OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'age', 'job'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  position: number;
  name: string;
  age: number;
  job: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Quynh', age: 22, job: 'Giao vien'},
  {position: 2, name: 'Tai', age: 26, job: 'Lap trinh Web'},
  {position: 3, name: 'Thien', age: 41, job: 'Ban Hang'},
  {position: 4, name: 'Hoa', age: 22, job: 'Giao vien'},
];
