import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

    constructor(private toastr: ToastrService) { }
    
    success(text:string, time:any) {
        this.toastr.success(text, '', {
            timeOut: time,
            positionClass: 'toast-bottom-right'
        });
    }
    
    warning(text:string, time:any) {
        this.toastr.warning(text, 'Error!', {
            timeOut: time,
            positionClass: 'toast-bottom-right'
        });
    }
}
