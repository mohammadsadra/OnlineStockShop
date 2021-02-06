import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../Services/Category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public category: Array<any> = [];
  // @ts-ignore
  selectedID;
  isSelected = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.category = res;
    });
  }
  selectCategory(id: any): void{
    this.selectedID = id;
    this.isSelected = true;
  }

}
