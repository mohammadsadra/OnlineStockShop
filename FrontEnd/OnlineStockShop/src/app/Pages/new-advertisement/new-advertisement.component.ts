import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../Services/Category/category.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AdDTO} from '../../DTOs/AdDTO';
import {AdvertismentService} from '../../Services/advertisment/advertisment.service';

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
              private categoryService: CategoryService,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              private advertismentService: AdvertismentService) {

    this.adDate = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  ngOnInit(): void {
    this.newAdForm = this._formBuilder.group({
      Title: ['', Validators.required],
      City: ['', Validators.required],
      Region: ['', Validators.required],
      Category: ['', Validators.required],
      Status: ['', Validators.required],
      Address: ['', Validators.required],
      Description: ['', Validators.required],
      PictureLink: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Price: ['', Validators.required],
      Days: ['', Validators.required]
    });
    this.getCategories();
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.category = res;
    });
  }

  postAd(): void {
    const adInfo = new AdDTO(
      this.newAdForm.controls.Title.value,
      this.newAdForm.controls.City.value,
      this.newAdForm.controls.Region.value,
      this.newAdForm.controls.Status.value,
      this.newAdForm.controls.Address.value,
      this.newAdForm.controls.Description.value,
      this.newAdForm.controls.PictureLink.value,
      this.newAdForm.controls.PhoneNumber.value,
      this.adDate.controls.end.value,
      this.newAdForm.controls.Category.value,
      // tslint:disable-next-line:radix
      parseInt(this.newAdForm.controls.Price.value)
    );
    // console.log(this.newAdForm.controls.Title.value);
    // console.log(this.newAdForm.controls.City.value);
    // console.log(this.newAdForm.controls.Region.value);
    // console.log(this.newAdForm.controls.Category.value);
    // console.log(this.newAdForm.controls.Status.value);
    // console.log(this.newAdForm.controls.Address.value);
    // console.log(this.newAdForm.controls.Description.value);
    // console.log(this.newAdForm.controls.PictureLink.value);
    // console.log(this.newAdForm.controls.PhoneNumber.value);
    // tslint:disable-next-line:radix
    console.log(parseInt(this.newAdForm.controls.Price.value));
    // this.openSnackBar(this.newAdForm.controls.Status.value, this.newAdForm.controls.Category.value);
    this.advertismentService.postAd(adInfo).subscribe(res => {
        this.openSnackBar('Successfully Created!', 'Done');
        // this.newAdForm.reset();
        // this.adDate.reset();
      }, error => {
      this.openSnackBar('Try Again!', 'Done');
      console.log(error.message);
      }
    );
  }

}
