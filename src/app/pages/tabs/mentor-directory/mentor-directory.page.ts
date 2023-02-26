import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { SKELETON } from 'src/app/core/constants/skeleton.constant';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import {
  HttpService,
  LoaderService,
  ToastService,
  UserService
} from 'src/app/core/services';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { CommonRoutes } from 'src/global.routes';

@Component({
  selector: 'app-mentor-directory',
  templateUrl: './mentor-directory.page.html',
  styleUrls: ['./mentor-directory.page.scss'],
})
export class MentorDirectoryPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  page = 1; //todo: Enable pagenation
  limit = 100;
  searchText: string = '';
  public headerConfig: any = {
    menu: true,
    label: 'MENTORS_DIRECTORY',
    headerColor: 'primary',
    notification: false,
  };

  mentors = [];
  mentorsCount;
  user: any;
  pastSessions: any;
  sessionsCount: any;
  sessions: any;
  SKELETON = SKELETON;
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private httpService: HttpService,
    private userService: UserService,
    private profileService: ProfileService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
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


  async ionViewWillEnter() {
    var obj = { page: this.page, limit: this.limit, searchText: "", status:'completed' };
    this.pastSessions = await this.sessionService.getAllSessionsAPI(obj);
  }

  gotToTop() {
    this.content.scrollToTop(1000);
  }

  eventAction(event) {
    console.log(event, "event");
    switch (event.type) {
      case 'cardSelect':
        this.router.navigate([CommonRoutes.MENTOR_DETAILS,event?.data?._id]);
        break;
    }
  }
}
