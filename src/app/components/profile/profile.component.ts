import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppUser } from './../../models/AppUser';
import { LoginService } from './../../services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user$: Observable<AppUser>;
  constructor(private auth: LoginService) {
    this.user$ = auth.appUser$;
  }
}
