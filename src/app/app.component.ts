import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SeabattleUI';

  constructor(public accountService: AccountService, private router: Router){}
  
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  }
}
