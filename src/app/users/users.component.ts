import {Component, HostBinding, OnInit} from '@angular/core';
import {routeFadeStateTrigger} from '../animations/route.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeStateTrigger]
})
export class UsersComponent implements OnInit {

  @HostBinding('@routeFadeState') routeFadeState = true;

  constructor() {
  }

  ngOnInit() {
  }

}
