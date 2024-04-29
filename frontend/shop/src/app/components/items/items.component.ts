import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any;

  constructor(
    private router: Router,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    let Items = this.itemsService.getItems().subscribe(
      {
        next: (data: any) => { 
          this.items = data;
          console.log(data);
        },
        error: (err: any) => { 
          console.error(err);
        }
      }
    );
  }
}
