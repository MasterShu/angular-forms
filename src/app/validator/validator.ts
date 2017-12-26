import { FormControl, FormGroup } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

function mobileValidator(control: FormControl): any {
  let valid;
  const MOREG = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]))+\d{8})$/;
  valid = MOREG.test(control.value);
  console.log('mobilephone is ' + valid);
  return valid ? null : {mobile: true};
}

// 模拟流处理
function mobileAsyncValidator(control: FormControl): any {
  let valid;
  const MOREG = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]))+\d{8})$/;
  valid = MOREG.test(control.value);
  console.log('mobilephone is ' + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

function equalValidator(group: FormGroup): any {
  let password: FormControl, pconfirm: FormControl, valid: boolean;
  password = group.get('password') as FormControl;
  pconfirm = group.get('pconfirm') as FormControl;
  valid = (password.value === pconfirm.value);
  console.log(' password valid is ' + valid);
  return valid ? null : {equal: {content: 'Twice input are not equal!'}};
}

export {
  mobileValidator,
  mobileAsyncValidator,
  equalValidator
};
