import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {NgxSpinnerService} from 'ngx-spinner';

import {RekrutiApiService} from '../../services/api/api.service';
import {GlobalVariablesService} from '../../services/global-variables/global-variables.service';
import {NotificationsService} from '../../services/notifications/notifications.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorMessage: any = '';
    loginWasWrong: any = false;

    constructor(private formBuilder: FormBuilder,
                private api: RekrutiApiService,
                private spinner: NgxSpinnerService,
                private router: Router,
                private globalVar: GlobalVariablesService,
                private notifications: NotificationsService) {
    }

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
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    submitLogin() {
        this.spinner.show();

        if (this.loginForm.valid) {
            this.api.account_wLogin(this.loginForm.value).then(reply => {
                if (reply.result === 1) {
                    this.globalVar.setCookieCurrentUser(reply);
                    this.loginWasWrong = false;
                    this.notifications.success('Login successful!', 5000);
                    this.router.navigate(['/people']);
                } else {
                    this.loginWasWrong = true;
                    this.errorMessage = reply.message;
                    this.notifications.warning(this.errorMessage, 10000);
                }
                this.spinner.hide();
            });
        } else {
            this.validateAllFormFields(this.loginForm);
            this.spinner.hide();
        }
    }

}
