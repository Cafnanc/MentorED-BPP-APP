import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import * as conversationalForm from "conversational-form";
import * as moment from 'moment';
import { AttachmentService, ToastService } from 'src/app/core/services';
import { CommonRoutes } from 'src/global.routes';
@Component({
  selector: 'app-conversational-form',
  templateUrl: './conversational-form.component.html',
  styleUrls: ['./conversational-form.component.scss'],
})
export class ConversationalFormComponent implements OnInit {
  @ViewChild("myCf") myCf: ElementRef;
  @Output() onSubmit = new EventEmitter();
  @Output() imageUploadEvent = new EventEmitter();
  formulario: any;
  data: any;
  arrayKeys = ['recommendedFor', 'categories', 'medium']
  timeKeys = ['startDate', 'startTime']
  obj = {};
  profileImageData = {
    name: "",
    type: "image/jpeg",
    isUploaded: false
  }

  currentDateTimeArray:Array<object> = [
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: moment().add(1, 'h').format("HH") + ':00',
      "cf-label": moment().add(1, 'h').format("HH") + ':00',
      "cf-questions": "Choose the start time?",
    },
  ]

  completeTimeArray = [
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '00:00',
      "cf-label": '00:00',
      "cf-questions": "Choose the start time?",
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '01:00',
      "cf-label": '01:00',
      // value: moment().add(2, 'h').format("HH") + ':00',
      // "cf-label": moment().add(2, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '02:00',
      "cf-label": '02:00',
      // value: moment().add(3, 'h').format("HH") + ':00',
      // "cf-label": moment().add(3, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '03:00',
      "cf-label": '03:00',
      // value: moment().add(4, 'h').format("HH") + ':00',
      // "cf-label": moment().add(4, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '04:00',
      "cf-label": '04:00',
      // value: moment().add(5, 'h').format("HH") + ':00',
      // "cf-label": moment().add(5, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '05:00',
      "cf-label": '05:00',
      // value: moment().add(6, 'h').format("HH") + ':00',
      // "cf-label": moment().add(6, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '06:00',
      "cf-label": '06:00',
      // value: moment().add(7, 'h').format("HH") + ':00',
      // "cf-label": moment().add(7, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '07:00',
      "cf-label": '07:00',
      // value: moment().add(8, 'h').format("HH") + ':00',
      // "cf-label": moment().add(8, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '08:00',
      "cf-label": '08:00',
      // value: moment().add(9, 'h').format("HH") + ':00',
      // "cf-label": moment().add(9, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '09:00',
      "cf-label": '09:00',
      // value: moment().add(10, 'h').format("HH") + ':00',
      // "cf-label": moment().add(10, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '10:00',
      "cf-label": '10:00',
      // value: moment().add(11, 'h').format("HH") + ':00',
      // "cf-label": moment().add(11, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '11:00',
      "cf-label": '11:00',
      // value: moment().add(12, 'h').format("HH") + ':00',
      // "cf-label": moment().add(12, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '12:00',
      "cf-label": '12:00',
      // value: moment().add(13, 'h').format("HH") + ':00',
      // "cf-label": moment().add(13, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '13:00',
      "cf-label": '13:00',
      // value: moment().add(14, 'h').format("HH") + ':00',
      // "cf-label": moment().add(14, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '14:00',
      "cf-label": '14:00',
      // value: moment().add(15, 'h').format("HH") + ':00',
      // "cf-label": moment().add(15, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '15:00',
      "cf-label": '15:00',
      // value: moment().add(16, 'h').format("HH") + ':00',
      // "cf-label": moment().add(16, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '16:00',
      "cf-label": '16:00',
      // value: moment().add(17, 'h').format("HH") + ':00',
      // "cf-label": moment().add(17, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '17:00',
      "cf-label": '17:00',
      // value: moment().add(18, 'h').format("HH") + ':00',
      // "cf-label": moment().add(18, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '18:00',
      "cf-label": '18:00',
      // value: moment().add(19, 'h').format("HH") + ':00',
      // "cf-label": moment().add(19, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '19:00',
      "cf-label": '19:00',
      // value: moment().add(20, 'h').format("HH") + ':00',
      // "cf-label": moment().add(20, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '20:00',
      "cf-label": '20:00',
      // value: moment().add(21, 'h').format("HH") + ':00',
      // "cf-label": moment().add(21, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '21:00',
      "cf-label": '21:00',
      // value: moment().add(22, 'h').format("HH") + ':00',
      // "cf-label": moment().add(22, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '22:00',
      "cf-label": '22:00',
      // value: moment().add(23, 'h').format("HH") + ':00',
      // "cf-label": moment().add(23, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '23:00',
      "cf-label": '23:00',
      // value: moment().add(23, 'h').format("HH") + ':00',
      // "cf-label": moment().add(23, 'h').format("HH") + ':00'
    }
  ]

  fields = [
    {
      tag: "input",
      required: "required",
      type: "text",
      name: "aboutSession",
      "cf-questions": "What is this session about?<br><br>Hint: Please provide key points about the session so that Chat-GPT can create accurate contents for your session",
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-questions": "Choose the recommended attendee?",
      "cf-label": "Head master",
      value: '{"label":"Head Master","value":"hm"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-label": "District education officer",
      value: '{"label":"District education officer","value":"deo"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-label": "Block education officer",
      value: '{"label":"Block education officer","value":"beo"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-questions": "Choose the category which this session belongs to?",
      "cf-label": "School process",
      value: '{"label":"School process","value":"School process"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "Educational leadership",
      value: '{"label":"Educational leadership","value":"Educational leadership"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "SQAA",
      value: '{"label":"SQAA", "value":"SQAA"}'
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().format("YYYY-MM-DD"),
      "cf-questions": "Choose the start date?",
      "cf-label": moment().format("DD-MM-YYYY"),

    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(1, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(1, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(2, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(2, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(3, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(3, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(4, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(4, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(5, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(5, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(6, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(6, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '30',
      "cf-questions": "Please select the duration of the session",
      "cf-label": "30 min"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '60',
      "cf-label": "1 hr"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '90',
      "cf-label": "1 hr 30 min"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '120',
      "cf-label": "2 hrs"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "medium",
      "cf-questions": "Great!!!. Now tell me the language in which you planning to take the session",
      "cf-label": "English",
      value: '{"label":"English","value":"1"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "medium",
      "cf-label": "Hindi",
      value: '{"label":"Hindi","value":"2"}'
    }
  ];
  subscription: any;

  constructor(private platform: Platform, private toast: ToastService, private router: Router) {
    this.subscribeBackButton();
    this.setCurrentDayTimes();
  }

  setCurrentDayTimes() {
    let i;
    let index = 2;
    for (i = parseInt(moment().add(index, 'h').format("HH")); i < 24; i++) {
      this.currentDateTimeArray.push({
        tag: "input",
        type: "radio",
        name: "startTime",
        value: moment().add(index, 'h').format("HH") + ':00',
        "cf-label": moment().add(index, 'h').format("HH") + ':00',
      })
      index++;
    }
  }

  subscribeBackButton() {
    this.subscription = this.platform.backButton.subscribeWithPriority(10,async () => {
      this.formulario.remove();
      this.router.navigate([`/${CommonRoutes.TABS}/${CommonRoutes.HOME}`], { replaceUrl: true });
    })
  }

  ngOnInit() {
    this.formulario = conversationalForm.startTheConversation({
      options: {
        scrollAcceleration: 0,
        showProgressBar: true,
        submitCallback: this.submitCallbackRobot.bind(this),
        flowStepCallback: this.onStepCallback.bind(this),
        preventAutoFocus: true
      },
      tags: this.fields,
    });
    this.myCf.nativeElement.appendChild(this.formulario.el);
  }

  onStepCallback = function (dto, success, error) {
    if (dto.tag.name === 'startDate') {
      (dto.tag.value[0] === moment().format("YYYY-MM-DD")) ? this.formulario.addTags(this.currentDateTimeArray, true) : this.formulario.addTags(this.completeTimeArray, true);
      success();
    } else {
      success();
    }
  }

  submitCallbackRobot() {
    let formDataSerialized = this.formulario.getFormData(true);
    formDataSerialized.startDate = new Date(formDataSerialized.startDate + " " + formDataSerialized.startTime).getTime();
    formDataSerialized.endDate = moment(formDataSerialized.startDate).add(formDataSerialized.duration, 'm').toDate().getTime();
    formDataSerialized.startDate = formDataSerialized.startDate / 1000
    formDataSerialized.endDate = formDataSerialized.endDate / 1000
    this.formulario.addRobotChatResponse(
      "Please upload image for your session"
    );
    setTimeout(async () => {
      this.formulario.remove()
      this.onSubmit.emit(formDataSerialized)
    }, 3000)
    this.arrayKeys.forEach((value: string) => {
      let i = 0;
      formDataSerialized[value].forEach((entry: any) => {
        formDataSerialized[value][i] = JSON.parse(entry)
        i++;
      })
    })
  }

  handleError(error: any): any {
    console.log(error)
    this.toast.showToast("Something went wrong", "danger")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
