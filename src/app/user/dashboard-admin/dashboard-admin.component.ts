import { Component, OnInit } from '@angular/core';
import {NavbarserviceService} from '../../service/navbarservice.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(public nav: NavbarserviceService) { }

  ngOnInit(): void {
  }

}
