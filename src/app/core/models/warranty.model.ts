import { WarrantyTypeModule } from './warranty-type.model';

export class WarrantyModel {
  clientSign: number;
  apartmentId: number;
  warrantyTypeIds: WarrantyTypeModule[];
  statusId: number;
  value: number;
  contractInfoId: number;
  closeAt: Date;
  explanation: string;
}
