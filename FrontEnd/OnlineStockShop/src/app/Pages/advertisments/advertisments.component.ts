import {Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AdvertismentService} from 'src/app/Services/advertisment/advertisment.service';


@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.scss']
})
export class AdvertismentsComponent implements OnInit {
  public result: Array<any> = [];

  constructor(public dialog: MatDialog,
              // tslint:disable-next-line:no-shadowed-variable
              private AdvertismentService: AdvertismentService) {
  }

  ngOnInit(): void {
    this.getAds();
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


  getAds(): void {
    this.AdvertismentService.getAdvertisment().subscribe(res => {
      this.result = res;
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
