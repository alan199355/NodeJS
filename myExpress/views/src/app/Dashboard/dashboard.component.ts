import { AccountService } from './../Services/account.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [AccountService]
})
export class DashboardComponent implements OnInit {
  testData: {};
  constructor(
    private accountService: AccountService
  ) { }
  ngOnInit(): void {
    this.accountService.getData().then(res => this.testData = res);
    console.log(this.testData);
  }
}
