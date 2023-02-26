import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService, ToastService, UserService } from 'src/app/core/services';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import {
  DynamicFormComponent,
  JsonFormData,
} from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { CommonRoutes } from 'src/global.routes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild('form1') form1: DynamicFormComponent;

  public headerConfig: any = {
    menu: true,
    notification: true,
    headerColor: 'primary',
    // label:'MENU'
  };

  public formData: JsonFormData;
  user: any;

  constructor(private profileService: ProfileService, private http: HttpClient, private router: Router,private localStorage: LocalStorageService, private userService: UserService) {
  }
  async ngOnInit() {
    this.getUser();
    this.userService.userEventEmitted$.subscribe(data => {
      if (data) {
        this.user = data;
      }
    })
  }

  getUser() {
    this.profileService.profileDetails().then(data => {
      this.user = data
    })
  }

  onSubmit() {
    this.form1.onSubmit();
  }

  resetForm() {
    this.form1.reset();
  }

  async createSession(type) {
    let userDetails = await this.localStorage.getLocalData(localKeys.USER_DETAILS);
    if (userDetails?.about) {
      this.router.navigate([`${CommonRoutes.CREATE_SESSION}`], { queryParams: { type: type }});
    } else {
      // this.toast.showToast("Please update your profile", "danger")
      this.router.navigate([`/${CommonRoutes.TABS}/${CommonRoutes.PROFILE}`]);
    }
  }
}
