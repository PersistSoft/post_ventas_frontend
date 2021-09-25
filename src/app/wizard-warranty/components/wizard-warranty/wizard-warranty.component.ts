import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientModel } from 'src/app/core/models/client.model';
import { ContactInfo } from 'src/app/core/models/contactInfo.model';
import { WarrantyModel } from 'src/app/core/models/warranty.model';
import { ContactInfoService } from 'src/app/core/services/contactInfo/contact-info.service';
import { WarrantyService } from 'src/app/core/services/warranty/warranty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wizard-warranty',
  templateUrl: './wizard-warranty.component.html',
  styleUrls: ['./wizard-warranty.component.scss'],
})
export class WizardWarrantyComponent implements OnInit {
  step = 1;
  infoStep1;
  infoStep2;
  infoStep3;
  contact: ContactInfo;
  newWarranty = new WarrantyModel();
  constructor(
    private contactInfoService: ContactInfoService,
    private warrantyService: WarrantyService
  ) {}

  ngOnInit(): void {}

  changeStep($event): number {
    console.log('step', $event.infoStep1);
    this.infoStep1 = $event.infoStep1;
    return (this.step = $event.step);
  }
  changeStep2($event): number {
    this.infoStep2 = $event.step2contact;
    return (this.step = $event.step);
  }
  // changeStep3($event): number {
  //   this.infoStep3 = $event.step2contact;
  //   return (this.step = $event.step);
  // }
  // createContact(): void {
  //   const contact = new ContactInfo();
  //   contact.name = this.infoContact.name;
  //   contact.email = this.infoContact.email;
  //   contact.phone = this.infoContact.phone;
  //   contact.dataTreatment = this.infoContact.dataTreatment;
  //   this.contactWithID =
  //     this.contactInfoService.createContactAfterSell(contact);
  //   console.log(this.contactWithID);
  // }
  // createWarranty(): void {
  //   const newWarranty = new WarrantyModule();
  //   if (this.contactWithID) {
  //     newWarranty.apartmentId = this.infoAparment.aparment.id;
  //     newWarranty.statusId = 1;
  //     newWarranty.warrantyTypeIds = [
  //       this.formStep3.value.warranties.forEach(
  //         (type: WarrantyTypeModule) => type.id
  //       ),
  //     ];
  //     newWarranty.contractInfoId = this.contactWithID.id;
  //     newWarranty.explanation = this.formStep3.value.explanation;
  //   }
  // }

  changeStep3($event): void {
    this.infoStep3 = $event.step3info;
    console.log(this.infoStep3);
    this.newWarranty.clientSign = null;
    this.newWarranty.aparment = this.infoStep1.aparment;
    this.newWarranty.warrantyTypes = this.infoStep3.warranties;
    this.newWarranty.status = { id: 1, name: 'creada' };
    this.newWarranty.value = null;
    this.newWarranty.explanation = this.infoStep3.explanation;

    this.warrantyContactInfo();
  }

  warrantyContactInfo(): void {
    if (this.infoStep2 && this.infoStep2.dataController === true) {
      const newContact = new ContactInfo();
      newContact.name = this.infoStep2.name;
      newContact.phone = this.infoStep2.phone;
      newContact.email = this.infoStep2.email;
      newContact.dataTreatment = this.infoStep2.dataController;
      console.log(newContact);
      this.contactInfoService
        .createContactAfterSell(newContact)
        .subscribe((res) => {
          this.contact = res;
          this.newWarranty.contactInfo = this.contact;
          this.saveWarranty();
        });
    }
  }
  saveWarranty(): void {
    console.log('this.newWarranty', this.newWarranty);
    this.warrantyService.createWarranty(this.newWarranty).subscribe((res) => {
      console.log('res', res);
      Swal.fire({
        title: `Hola! ${this.infoStep2.name},`,

        html: `
        Gracias por comunicarte con nosotros</b></b>
        Se ha Creado exitosamente la postventa el radicado es el numero <b>${res.id}</b>.<br>
         En los proximos 3 dias habiles uno de nuestros ingeniros se comunicara contigo`,
        footer: `Siempre`,
        icon: 'success',
        grow: 'column',
        allowEnterKey: true,
        confirmButtonText: 'Cool',
      }).then((res) => {
        window.location.reload();
      });
    });
  }
}
