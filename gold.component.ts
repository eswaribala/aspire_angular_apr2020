import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PhotoService} from '../services/photoservice';
@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor( private photoService: PhotoService) {


  }

  displayedColumns: string[] = [ 'id', 'title',
    'thumbnailUrl'];
 tableSource = new MatTableDataSource();
  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(response => {
    this.tableSource.data = response;
    });
  }
  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }
}
