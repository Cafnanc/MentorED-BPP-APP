import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonFormData } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { CommonRoutes } from 'src/global.routes';
import { ModalController, NavController, Platform, IonContent } from '@ionic/angular';
import { SKELETON } from 'src/app/core/constants/skeleton.constant';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { HttpService, LoaderService, LocalStorageService, ToastService, UserService, UtilService } from 'src/app/core/services';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { SessionService } from 'src/app/core/services/session/session.service';
import { Location } from '@angular/common';
import { TermsAndConditionsPage } from '../../terms-and-conditions/terms-and-conditions.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public formData: JsonFormData;
  user;
  SESSIONS: string = CommonRoutes.SESSIONS;
  SKELETON = SKELETON;
  page = 1;
  limit = 100;
  sessions;
  sessionsCount = 0;
  status = "published,live";
  @ViewChild(IonContent) content: IonContent;

  public headerConfig: any = {
    menu: true,
    notification: true,
    headerColor: 'primary',
    // label:'MENU'
  };
  // public segmentButtons = [{ name: "all-sessions", label: "ALL_SESSIONS" }, { name: "created-sessions", label: "CREATED_SESSIONS" }, { name: "my-sessions", label: "ENROLLED_SESSIONS" }]
  public segmentButtons = [{ name: "bot", label: "Create session using BOT" }, { name: "form", label: "Create session using form" }]
  public mentorSegmentButton = ["created-sessions"]
  selectedSegment = "created-sessions";
  createdSessions: any;
  obj: { page: number; limit: number; searchText: string; status: string; };
  constructor(
    private http: HttpClient,
    private router: Router,
    private navController: NavController,
    private profileService: ProfileService,
    private loaderService: LoaderService,
    private httpService: HttpService,
    private sessionService: SessionService,
    private modalController: ModalController,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private toast:ToastService) { }

  ngOnInit() {
    this.getUser();
    this.userService.userEventEmitted$.subscribe(data => {
      if (data) {
        this.user = data;
      }
    })
  }
  gotToTop() {
    this.content.scrollToTop(1000);
  }

  async ionViewWillEnter() {
    this.obj = { page: this.page, limit: this.limit, searchText: "", status:'published,live' };
    this.createdSessions = await this.sessionService.getAllSessionsAPI(this.obj);
  }
  async eventAction(event) {
    switch (event.type) {
      case 'cardSelect':
        (this.selectedSegment=="my-sessions")?this.router.navigate([`/${CommonRoutes.SESSIONS_DETAILS}/${event.data.sessionId}`]):this.router.navigate([`/${CommonRoutes.SESSIONS_DETAILS}/${event.data._id}`]);
        break;

      case 'joinAction':
        (event.data.sessionId)?await this.sessionService.joinSession(event.data.sessionId):await this.sessionService.joinSession(event.data._id);
        this.sessionService.getAllSessionsAPI(this.obj);
        break;

      case 'enrollAction':
        let enrollResult = await this.sessionService.enrollSession(event.data._id);
        if(enrollResult.result){
          this.toast.showToast(enrollResult.message, "success")
          this.sessionService.getAllSessionsAPI(this.obj);
        }
        break;

      case 'startAction':
        this.sessionService.startSession(event.data._id);
        this.sessionService.getAllSessionsAPI(this.obj);
        break;
    }
  }
  viewMore(data) {
    this.router.navigate([`/${CommonRoutes.SESSIONS}`], { queryParams: { type: data } });
  }

  search() {
    this.router.navigate([`/${CommonRoutes.HOME_SEARCH}`]);
  }
  getUser() {
    this.profileService.profileDetails().then(data => {
      this.user = data
      if (!this.user?.hasAcceptedTAndC) {
        this.openModal();
      }
    })
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: TermsAndConditionsPage,
      backdropDismiss: false,
      swipeToClose: false
    });
    return await modal.present();
  }
  async segmentChanged(event) {
    // this.selectedSegment = event.name;
  }
  async createSession() {
    let userDetails = await this.localStorage.getLocalData(localKeys.USER_DETAILS);
    if (userDetails?.about) {
      this.router.navigate([`${CommonRoutes.CREATE_SESSION}`]);
    } else {
      this.router.navigate([`/${CommonRoutes.TABS}/${CommonRoutes.PROFILE}`]);
    }
  }
}
