import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  @Input()
  items: MenuItem[];

}
