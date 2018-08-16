import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../services/api/api.service';
import { GlobalVariablesService } from '../../services/global-variables/global-variables.service';

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
        private router: Router,
        private globalVar:GlobalVariablesService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    
    validateAllFormFields(formGroup: FormGroup) {
        console.log('1');
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
                    this.globalVar.setCookieCurrentUser(reply);
                    console.log(this.globalVar.getCookieCurrentUser());
                    this.loginWasWrong = false;
                    this.toastr.success('Login successful!', '', {
                        timeOut: 5000,
                        positionClass: 'toast-bottom-right'
                    });
                    this.router.navigate(['/people']);
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
    }

}
