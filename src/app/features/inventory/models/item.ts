import { Interaction } from '../../../shared/services/interaction';

export interface Item {
  title: string;
  description: string;
  img_url: string;
  price: number;
  chance_of_appearing: number;
  interaction: Interaction;
}
