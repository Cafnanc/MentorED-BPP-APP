import { Component, Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService, ToastService, UtilService , AttachmentService} from 'src/app/core/services';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { CommonRoutes } from 'src/global.routes';
import { AnimationController } from '@ionic/angular';
import { DynamicFormComponent,JsonFormData } from '../dynamic-form/dynamic-form.component';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService } from 'src/app/core/services/';

@Component({
  selector: 'app-generic-profile-header',
  templateUrl: './generic-profile-header.component.html',
  styleUrls: ['./generic-profile-header.component.scss'],
})
export class GenericProfileHeaderComponent implements OnInit { 
  @ViewChild('form1') form1: DynamicFormComponent;
  @Input() headerData:any;
  @Input() buttonConfig:any;
  @Input() showRole:any;
  @Input() isMentorVerified?:boolean=false
  @Output() refresh? = new EventEmitter();
  labels = ["CHECK_OUT_MENTOR","PROFILE_ON_MENTORED_EXPLORE_THE_SESSIONS"];
  showCredentials:boolean=false
  credentialType:any='identity'
  idType:any='aadhaar'
  selectedFile:any=''
  fileSelected:boolean=false
  formData: JsonFormData = {
    controls: [
   {
    name: 'aadhaar',
    label: 'Enter the id',
    value: '',
    class: 'ion-margin',
    type: 'text',
    position: 'floating',
    errorMessage:'Enter a valid id',
    validators: {
      required: true,
      minLength: 12,
      maxLength: 12,
      pattern:'^[0-9]*$',
    },
  }
    ]
  };

  formControl:any={
    name:'Label',
    label: 'Enter the id',
    value: '',
    class: 'ion-margin',
    type: 'text',
    position: 'floating',
    errorMessage:'Enter a valid id',
    validators: {
      required: true,
    },
  }

  skillsList:any=[
    { label: 'Degree',value: 'Degree' },
    { label: 'B-Tech',value: 'B-Tech' },
    { label: 'BSc',value: 'BSc' },
    { label: 'Mbbs',value: 'Mbbs' },
  ]

  universityList:any=[
    { label: 'Bangalore University',value: 'Bangalore University' },
    { label: 'Indian Institute of Science',value: 'Indian Institute of Science' },
    { label: 'Anna university',value: 'Anna university' },
    { label: 'University of Mysore',value: 'University of Mysore' },
  ]

  skillControl:any = [{
      name: 'skill',
      label: 'Select a skill',
      value: '',
      class: 'ion-margin',
      type: 'select',
      position: 'floating',
      errorMessage:'Select a skill',
      validators: {
        required: true
      },
      options: this.skillsList
    },
    {
      name: 'university',
      label: 'Select university',
      value: '',
      class: 'ion-margin',
      type: 'select',
      position: 'floating',
      errorMessage:'Select university',
      validators: {
        required: true
      },
      options: this.universityList
    },
    {
      name: 'rollNo',
      label: 'Roll no.',
      value: '',
      class: 'ion-margin',
      type: 'text',
      position: 'floating',
      errorMessage:'Enter your roll no.',
      validators: {
        required: true,
      },
    },
    {
      name: 'YOP',
      label: 'Year of passing',
      value: '',
      class: 'ion-margin',
      type: 'text',
      position: 'floating',
      errorMessage:'Enter a year',
      validators: {
        required: true,
        pattern:'^[0-9]*$',
        minLength:4,
        maxLength:4
      },
    }
]

  workControl:any = [
    {
      name: 'experience',
      label: 'Years of experience',
      value: '',
      class: 'ion-margin',
      type: 'text',
      position: 'floating',
      errorMessage:'Enter your experience',
      validators: {
        required: true,
      }
    },
    {
      name: 'companyName',
      label: 'Company name',
      value: '',
      class: 'ion-margin',
      type: 'text',
      position: 'floating',
      errorMessage:'Enter company name',
      validators: {
        required: true,
      }
    }
]

  proofList:any=[
    {name:'Identity',value:'identity'},{name:'Skill',value:'skill'},{name:'Work',value:'work'}
  ]
  idsList:any=[
    {name:'Aadhaar',value:'aadhaar'},{name:'Voter Id',value:'voter'},{name:'Driving License',value:'license'}
  ]



  constructor(private navCtrl:NavController, private profileService: ProfileService, private utilService:UtilService,private toast: ToastService, private translateService: TranslateService,
    private animationCtrl: AnimationController, private httpService: HttpService, private loaderService: LoaderService, private attachment: AttachmentService,) { }

  ngOnInit() {
  }

  async action(event) {
    if(event==="edit"){
      this.navCtrl.navigateForward(CommonRoutes.EDIT_PROFILE);
    }else{
      this.translateText();
      let shareLink = await this.profileService.shareProfile(this.headerData._id);
      if (shareLink) {
        let url = `/${CommonRoutes.MENTOR_DETAILS}/${shareLink.shareLink}`;
        let link = await this.utilService.getDeepLink(url);
        this.headerData.name = this.headerData.name.trim();
        let params = { link: link, subject: this.headerData?.name, text: this.labels[0] + ` ${this.headerData.name}` + this.labels[1] }
        this.utilService.shareLink(params);
      } else {
        this.toast.showToast("No link generated!!!", "danger");
      }
    }
    //add output event and catch from parent; TODO
  }

  translateText() {
    this.translateService.get(this.labels).subscribe(translatedLabel => {
      let labelKeys = Object.keys(translatedLabel);
      labelKeys.forEach((key) => {
        let index = this.labels.findIndex(
          (label) => label === key
        )
        this.labels[index] = translatedLabel[key];
      })
    })
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  onSelect(event){
    this.formData.controls=[]
    this.selectedFile=''
    switch(event.target.value){
      case 'identity':
        this.idType='aadhaar'
        let validator={required:true, minLength: 12, maxLength: 12, pattern:'^[0-9]*$'}
        this.formData.controls.push(this.formPrefiller('aadhaar','Enter id',validator))         
      break;
      case 'skill':
        this.formData.controls=this.skillControl
      break;
      case 'work':
        this.formData.controls = this.workControl
      break;
    }
    this.credentialType=event.target.value
  }



  onIdSelect(event){
    this.formData.controls=[]
    this.selectedFile=''
    let validator:any={required:true}
    switch(event.target.value){
      case 'aadhaar':
        validator={required:true, minLength: 12, maxLength: 12, pattern:'^[0-9]*$'}
        this.formData.controls.push(this.formPrefiller('aadhaar','Enter id',validator))
      break;
      case 'voter':
        this.formData.controls.push(this.formPrefiller('voter','Enter id',validator))
      break;
      case 'license':
        this.formData.controls.push(this.formPrefiller('license','Enter id',validator))
      break;
    }
    this.idType=event.target.value

  }

  selectFile() {
    let element = document.getElementById('upload') as HTMLInputElement;
    element.click();
  }

  uploadFile(event){
    let file = event.target.files[0] 
    this.selectedFile = {name:file.name.replace(/\s/g,'').toLowerCase(),type:file.type,size:file.size}
  }

  close(){
    this.showCredentials=false
    this.credentialType='identity'
    this.idType=''
    this.formData.controls=[]
    this.selectedFile=''
  }


  formPrefiller(name,label,validator?,options?,type?){
    let form = this.formControl
    form['name'] = name,
    form['label'] = label
    if(validator){
      form['validators'] = validator
    }
    if(options){
      form['options'] = options
    }
    if(type){
      form['type'] = type
    }
    return form
  }

  async submit(type){
    await this.loaderService.startLoader()
    this.form1.onSubmit();
    let data={type:type, userId:this.headerData._id}
    if(this.selectedFile){
      await this.getFileLink()
    }
    let formData = this.form1.myForm.value
    switch(type){
      case 'identity':
        data['documentType']=this.idType
        if(this.idType==='aadhaar'){
          data['uid']=formData[this.idType]
        }else{
          data['documentId']=formData[this.idType]
        }
                
      break;
      case 'skill':
        data={...data,...formData}
        data['skill'] = formData.skill[0].value
        data['university'] = formData.university[0].value
      break;
      case 'work':
        data={...data,...formData}
      break;
    }
    if(this.selectedFile){
      data['url'] = this.selectedFile.uploadUrl.destFilePath
    }

    const config = {
      url: urlConstants.API_URLS.ADD_CREDENTIALS,
      payload: data,
    };
    try {
      const data: any = await this.httpService.post(config);
      this.loaderService.stopLoader();
      this.toast.showToast("Credentials added successfully", "success");
      this.refresh.emit()
      this.close()
    }
    catch (error) {
      this.loaderService.stopLoader();
    }

    this.refresh.emit()
    this.close()
  }

  async getFileLink(){
    let config = {
      url: urlConstants.API_URLS.GET_CREDENTIAL_IMAGE_UPLOAD_URL + this.selectedFile.name
    }
    let data: any = await this.httpService.get(config);
    this.selectedFile.uploadUrl = data.result;
    this.upload();
  }


   async upload() {
    let data = this.selectedFile
     await this.attachment.cloudImageUpload(data).then(resp => {
      this.selectedFile['url'] = data.uploadUrl.destFilePath;
    }, error => {
    })
  }
}