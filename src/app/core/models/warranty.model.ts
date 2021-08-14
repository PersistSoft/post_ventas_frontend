import { WarrantyTypeModule } from './warranty-type.model';
import { ContactInfo } from './contactInfo.model';
import { StatusModel } from './status.model';

export class WarrantyModel {
  clientSign: number;
  aparment: number;
  warrantyTypes: WarrantyTypeModule[];
  status: StatusModel;
  value: number;
  contactInfo: ContactInfo;
  closeAt: Date;
  explanation: string;
}
