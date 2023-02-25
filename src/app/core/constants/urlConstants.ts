export const urlConstants = {
    API_URLS:{
        CREATE_ACCOUNT:"/hackathon-user/v1/account/create",
        ACCOUNT_LOGIN:"/hackathon-user/v1/account/login",
        LOGOUT_ACCOUNT:"/hackathon-user/v1/account/logout",
        REFRESH_TOKEN:"/hackathon-user/v1/account/generateToken",
        TERMS_CONDITIONS:"/hackathon-user/v1/account/acceptTermsAndCondition",
        PROFILE_UPDATE:"/hackathon-user/v1/profile/update",
        PROFILE_DETAILS: "/hackathon-user/v1/profile/details",
        MENTOR_PROFILE_DETAILS: "/hackathon-mentoring/v1/mentors/profile/",
        MENTEE_PROFILE_DETAILS:"/hackathon-mentoring/v1/mentees/profile/",
        MENTORS_DIRECTORY:"/hackathon-user/v1/mentors/list?page=",
        FILE_UPLOAD:"/hackathon-user/v1/cloud-services/file/upload",
        SESSIONS:"/hackathon-mentoring/v1/mentees/sessions?enrolled=", //sessions?enrolled=true/false&page=1&limit=5&search=:search
        HOME_SESSION:"/hackathon-mentoring/v1/mentees/homeFeed?page=", ///v1/mentees/homefeed?page=1&limit=4
        GET_IMAGE_UPLOAD_URL:'/hackathon-user/v1/cloud-services/file/getSignedUrl?fileName=',
        GET_SESSION_IMAGE_UPLOAD_URL:"/hackathon-mentoring/v1/cloud-services/getSignedUrl?fileName=",
        SUBMIT_FEEDBACK:"/hackathon-mentoring/v1/feedback/submit/",
        UPCOMING_SESSIONS:"/hackathon-mentoring/v1/mentors/upcomingSessions/",
        SHARE_MENTOR_PROFILE:"/hackathon-mentoring/v1/mentors/share/",
        REPORT_ISSUE:"/hackathon-mentoring/v1/issues/create",
        
        // FORMS
        FORM_READ:'/hackathon-mentoring/v1/form/read',
        GENERATE_OTP:"/hackathon-user/v1/account/generateOtp",
        REGISTRATION_OTP:"/hackathon-user/v1/account/registrationOtp",
        RESET_PASSWORD:"/hackathon-user/v1/account/resetPassword",
        CREATE_SESSION:"/hackathon-mentoring/v1/sessions/update",
        GET_SESSIONS_LIST:"/hackathon-mentoring/v1/sessions/list?page=",
        GET_SESSION_DETAILS:"/hackathon-mentoring/v1/sessions/details/",
        GET_SHARE_SESSION_LINK:"/hackathon-mentoring/v1/sessions/share/",
        ENROLL_SESSION:"/hackathon-mentoring/v1/sessions/enroll/",
        UNENROLL_SESSION:"/hackathon-mentoring/v1/sessions/unEnroll/",
        START_SESSION:"/hackathon-mentoring/v1/sessions/start/",
        JOIN_SESSION:"/hackathon-mentoring/v1/mentees/joinSession/",
        MENTOR_REPORTS:"/hackathon-mentoring/v1/mentors/reports?filterType=",
        MENTEE_REPORTS:"/hackathon-mentoring/v1/mentees/reports?filterType=",
        MENTOR_FEEDBACK_QUESTION_SET:"/hackathon-mentoring/v1/questionsSet/read/61b867df5201107b3c2fb435",
        MENTEE_FEEDBACK_QUESTIONS_SET:"/hackathon-mentoring/v1/questionsSet/read/61b8656fed665f7b5470a9f1",
        GET_FEEDBACK_QUESTION:"/hackathon-mentoring/v1/questions/read/", 

        //hackathon
        AUTOFILL:"/bpp-innovation/autofill"
    }
};
