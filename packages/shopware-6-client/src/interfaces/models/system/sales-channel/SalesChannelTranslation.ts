import { SalesChannel } from "./SalesChannel";
import { CustomField } from "../../common/CustomField";
export interface SalesChannelTranslation {
  salesChannelId: string;
  name: string | null;
  salesChannel: SalesChannel | null;
  customFields: CustomField[];
}
