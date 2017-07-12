import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
