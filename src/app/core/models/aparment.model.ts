export class AparmentModel {
  name: string;
  deliveryDate: Date;
  buildingId: number;
  aparmentTypeId: number;
}

export interface ApartmentAnswerValidatonModel {
  id: number;
  name: string;
  deliveryDate: string;
  createdAt: string;
  updatedAt: string;
  appartmentKey: string;
}
