import {Inject} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.scss']
})
export class AdvertismentsComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      minWidth: '600px',
      minHeight: '400px',
      data: {},
      // backdropClass: 'backdropBackground',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
  teamData;
  thisTeamLinks = [];
  newLinks = [];
  isNewLinkAvailable = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    this.teamData = this.data.dataKey;
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
