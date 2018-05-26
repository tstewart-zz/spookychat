import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MuhTableDataSource } from './muh-table-datasource';

@Component({
  selector: 'muh-table',
  templateUrl: './muh-table.component.html',
  styleUrls: ['./muh-table.component.css']
})
export class MuhTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MuhTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MuhTableDataSource(this.paginator, this.sort);
  }
}
