import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../Services/Category/category.service';

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.scss']
})
export class NewAdvertisementComponent implements OnInit {

  // @ts-ignore
  newAdForm: FormGroup;
  adDate: FormGroup;
  public category: Array<any> = [];

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private categoryService: CategoryService) {

    this.adDate = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  ngOnInit(): void {
    this.newAdForm = this._formBuilder.group({
      Title: ['', Validators.required],
      City: ['', Validators.required],
      Category: ['', Validators.required],
      Status: ['', Validators.required],
      Address: ['', Validators.required],
      Description: ['', Validators.required],
      PictureLink: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    });
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.category = res;
    });
  }

}
