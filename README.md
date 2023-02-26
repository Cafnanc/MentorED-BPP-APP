CONTENTS OF THIS FILE
---------------------

 * Dependencies
 * Ionic-Android build Setup
 * Cli setup
 * Project setup
 * Build apk
 * Debug apk


DEPENDENCIES
---------------------

* Ionic:

   Ionic CLI                     : 5.4.16 (/usr/local/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 6.5.6
   @angular-devkit/build-angular : 13.2.6
   @angular-devkit/schematics    : 13.2.6
   @angular/cli                  : 13.2.6
   @ionic/angular-toolkit        : 6.1.0


* Capacitor:

   Capacitor CLI      : 3.9.0
   @capacitor/android : 3.6.0
   @capacitor/core    : 3.9.0
   @capacitor/ios     : 3.5.0


* Utility:

   cordova-res : 0.15.4
   native-run  : 1.7.1


* System:

   Android SDK Build-tools : 34-rc1
   Android SDK Platform-tools : 33.0.3
   NodeJS            : v18.12.1 (/usr/local/bin/node)
   npm               : 8.19.2
   OS                : Linux 5.15


IONIC-ANDROID BUILD SETUP
---------------------

- [Install java] (https://www.oracle.com/java/technologies/downloads/#java11)
- [Install Gradle] (https://gradle.org/install/)
- [Install Android Studio] (https://developer.android.com/studio)

- After Android studio installation, install SDK
- Open Android studio and goto settings/appearance and behavior/system settings/Android SDK
- Install appropriate Android sdk platform package.
- Add environment variables in ~/.bashrc or ~/.bash_profile as follows
        export ANDROID_SDK_ROOT=path_to_sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
- Reference: https://ionicframework.com/docs/installation/android


CLI SETUP
---------------------

- `npm install -g ionic`   
- `npm install @capacitor/core`   
- `npm install @capacitor/cli --save-dev` 


PROJECT SETUP
---------------------

- git clone the repo ( https://github.com/Cafnanc/MentorED-BPP-App.git)
- Add environment files inside src/environments
- Go to project folder and run npm i


BUILD APK
---------------------

- To check attached devices do adb devices
- Run ionic build (Make sure you have attached device)
- Run ionic cap sync
- Run ionic cap run android
- Apk location project_folder/android/app/build/outputs/apk/debug/apk_name.apk


DEBUG APK
---------------------

- Open chrome and enter chrome://inspect
- Select app
