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

  async warrantyContactInfo() {
    if (this.infoStep2 && this.infoStep2.dataController === true) {
      const newContact = new ContactInfo();
      newContact.name = this.infoStep2.name;
      newContact.phone = this.infoStep2.name;
      newContact.email = this.infoStep2.email;
      newContact.dataTreatment = this.infoStep2.dataController;
      this.contactInfoService
        .createContactAfterSell(newContact)
        .subscribe((res) => {
          console.log(res);
          this.contact = res;
        });
    }
  }

  async changeStep3($event) {
    this.infoStep3 = $event.step3info;
    console.log('stept1', this.infoStep1);
    console.log('infoStep2', this.infoStep2);
    console.log('infoStep3', this.infoStep3);

    const newWarranty = new WarrantyModel();
    newWarranty.clientSign = null;
    newWarranty.apartmentId = this.infoStep1.aparment.id;
    newWarranty.warrantyTypeIds = this.infoStep3.warranties;
    newWarranty.statusId = 1; // Creada
    newWarranty.value = null;
    newWarranty.explanation = this.infoStep3.explanation;

    await this.warrantyContactInfo();
    newWarranty.contractInfoId = this.contact.id;

    // console.log(this.warrantyService.createWarranty(newWarranty));

    Swal.fire({
      title: 'Se ha Creado exitosamente la postventa!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  }
}
