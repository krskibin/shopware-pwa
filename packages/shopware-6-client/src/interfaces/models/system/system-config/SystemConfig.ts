import { SalesChannel } from "../sales-channel/SalesChannel";
export interface SystemConfig {
  configurationKey: string;
  configurationValue: any;
  salesChannelId: string | null;
  salesChannel: SalesChannel | null;
}
