import { SalesChannel } from "../../system/sales-channel/SalesChannel";
import { Promotion } from "./Promotion";
export interface PromotionSalesChannel {
  promotionId: string;
  salesChannelId: string;
  priority: number;
  promotion: Promotion | null;
  salesChannel: SalesChannel | null;
}
