import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../services/items/items.service';


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items: any;
  constructor(private router: Router,
    private ItemService: ItemsService
  ) { }

  ngOnInit(): void {
    let items = this.ItemService.getItems().subscribe(
      {
        next: (data => {
          this.items= data;
          console.log(data);
        }),
        error: (err => err)
      }
    );

  }
}
