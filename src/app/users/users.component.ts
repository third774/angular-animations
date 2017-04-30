import {Component, HostBinding, OnInit} from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../animations/route.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeStateTrigger, routeSlideStateTrigger]
})
export class UsersComponent implements OnInit {

  // @HostBinding('@routeFadeState') routeFadeState = true;
  @HostBinding('@routeSlideState') routeFadeState = true;
  

  constructor() {
  }

  ngOnInit() {
  }

}
