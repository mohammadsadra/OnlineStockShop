import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.scss']
})
export class NewAdvertisementComponent implements OnInit {

  // @ts-ignore
  newAdForm: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) { }

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
      CreationDate: ['', Validators.required],
      ExpireDate: ['', Validators.required],

    });
  }

}
