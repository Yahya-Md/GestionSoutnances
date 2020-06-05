import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from '../../service/navbarservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public nav: NavbarserviceService) { }

  ngOnInit(): void {
  }

}
