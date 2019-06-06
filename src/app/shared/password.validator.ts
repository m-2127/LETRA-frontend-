import { AbstractControl } from '@angular/forms';


export function PasswordValidator(control: AbstractControl): { [key: string]: boolean} | null{
    const newpassword = control.get('newPassword');
    const confirmpassword = control.get('reEnterPassword');
    return newpassword && confirmpassword && newpassword.value != confirmpassword.value ?
    { 'mismatch': true } : null;
} 