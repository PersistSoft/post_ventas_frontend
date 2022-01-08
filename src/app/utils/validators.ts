import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, delay, map } from 'rxjs/operators';
import { ApartmentAnswerValidatonModel } from '../core/models/aparment.model';
import { AparmentService } from '../core/services/aparment/aparment.service';

export class MyValidators {
  static validateAparment(service: AparmentService): any {
    console.log('asyncValidators');
    return (control: AbstractControl) => {
      console.log('AbstractControl', control.value);
      const id = control.value.aparment.id;
      const value = control.value.aparmentCode;
      return service.validateAparment(id, value);

      // return service.validateAparment(id, value).pipe(
      //   // TDOO implement a debounceitme
      //   debounceTime(500),
      //   map((response: ApartmentAnswerValidatonModel) => {
      //     console.log('respuesta', response);
      //     const isAvailable = response.appartmentKey;
      //     console.log(isAvailable);
      //     if (!isAvailable) {
      //       console.log('validatorResTrue');
      //       return { not_available: true };
      //     }
      //     return null;
      //   })
      // )
    };
  }
}
