import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;
    errorMessage:string = "";
    loginWasWrong:boolean = false;

    constructor(private formBuilder: FormBuilder, 
        private api:ApiService, 
        private spinner: NgxSpinnerService, 
        private toastr: ToastrService, 
        private router: Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    
    submitLogin() {
        this.spinner.show();
        console.log(this.loginForm.value);
        console.log(this.loginForm.valid);
        
        if(this.loginForm.valid) { 
            this.api.login(this.loginForm.value).then(reply => {
                console.log(reply);
                if(reply.result === 1) {
                    this.loginWasWrong = false;
                    this.router.navigate(['/people']);
                    this.toastr.success('Login successful!', '', {
                        timeOut: 5000,
                        positionClass: 'toast-bottom-right'
                    });
                } else {
                    this.loginWasWrong = true;
                    this.errorMessage = reply.message;
                    this.toastr.warning(this.errorMessage, 'Error!', {
                        timeOut: 10000,
                        positionClass: 'toast-bottom-right'
                    });
                }
                this.spinner.hide();
            });
        } else {
             this.validateAllFormFields(this.loginForm);
             this.spinner.hide();
        }

        
        
//        
//        this.spinnerService.show();
//        var th = this;
//        this.api.login(loginData).then(reply => {
//            if(reply.token !== undefined) {
//                this.loginWasWrong = false;
//                this.globalVariables.setToken(reply.token); 
//                
//                this.api.getProfileData(reply.token).then(userData => {
//                    
//                    if(userData.email !== undefined) {
//                        this.sendGTM(userData.id);
//                        this.oneSignalFunction(reply.token, userData.device_tokens, userData.id);
//                        this.loginWasWrong = false;
//                        this.globalVariables.setUserData(userData);
//                        
//                        this.zendeskService.zendeskIdentifyMethod(userData);
//    
//                        this.spinnerService.hide();
//
//                        this.ckeckUserPlan(userData.registration_state, userData.trial_info.in_trial);
//                        
//                    } else {
//                        console.log('ERROR get profile');
//                        this.loginWasWrong = true;
//                        this.spinnerService.hide();
//                    }
//                });
//            } else {
//                console.log('ERROR b2c');
//                console.log(reply);
//                this.loginWasWrong = true;
//                this.spinnerService.hide();
//            }
//        }, function(error) {
//            th.loginWasWrong = true;
//            console.log(error);
//            th.errorMessage = th.validationService.checkAPIError(error);
//            th.spinnerService.hide();
//        });
    }

}
