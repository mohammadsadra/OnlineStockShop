import {Inject, Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AdvertismentService} from 'src/app/Services/advertisment/advertisment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportService} from '../../Services/Report/report.service';
import {ReportDTO} from '../../DTOs/ReportDTO';


@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.scss']
})
export class AdvertismentsComponent implements OnInit {
  @Input() categoryId = '0';

  public result: Array<any> = [];
  isZero = false;

  constructor(public dialog: MatDialog,
              // tslint:disable-next-line:no-shadowed-variable
              private AdvertismentService: AdvertismentService) {
  }

  ngOnInit(): void {
    if (this.categoryId === '0'){
      this.getAds();
    }
    else {
      this.getAdsByID(this.categoryId);
    }

  }

  openDialog(ad: Array<any>): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        dataKey: ad
      },
      backdropClass: 'backdropBackground',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openReportDialog(ad: Array<any>): void {
    const dialogRef = this.dialog.open(ReportDialogPage, {
      data: {
        dataKey: ad
      },
      backdropClass: 'backdropBackground',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getAds(): void {
    this.AdvertismentService.getAdvertisment().subscribe(res => {
      this.result = res;
      if (res.length === 0){
        this.isZero = true;
      }
    });
  }
  getAdsByID(id: any): void {
    this.AdvertismentService.getAdvertismentByCategory(id).subscribe(res => {
      this.result = res;
      if (res.length === 0){
        this.isZero = true;
      }
    });
  }


}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-example-dialog',
  templateUrl: 'readMore.html',
  styleUrls: ['./readMoreStyles.scss'],
})

// tslint:disable-next-line:component-class-suffix
export class DialogContentExampleDialog implements OnInit {
  adData;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    this.adData = this.data.dataKey;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

//// REPORT ////

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-example-dialog',
  templateUrl: 'reportPage.html',
  styleUrls: ['./reportPageStyle.scss'],
})

// tslint:disable-next-line:component-class-suffix
export class ReportDialogPage implements OnInit {
  adData;
  // @ts-ignore
  reportForm: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              // tslint:disable-next-line:variable-name
              private _formBuilder: FormBuilder,
              private reportService: ReportService) {
    this.adData = this.data.dataKey;
  }

  ngOnInit(): void {
    this.reportForm = this._formBuilder.group({
      Title: ['', Validators.required],
      Description: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  creatReport(): void{
    const reportInfo = new ReportDTO(
      this.reportForm.controls.Title.value,
      this.reportForm.controls.Description.value,
      this.adData.id
    );
    this.reportService.creatReport(reportInfo).subscribe(res => {
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
