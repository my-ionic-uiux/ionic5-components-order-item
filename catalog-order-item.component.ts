import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-order-item',
  templateUrl: './catalog-order-item.component.html',
  styleUrls: ['./catalog-order-item.component.scss'],
})
export class CatalogOrderItemComponent implements OnInit {

  @Input() orderItem;
  
  constructor() { }

  ngOnInit() {}

}
