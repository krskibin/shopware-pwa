import { ProductManufacturer } from "./ProductManufacturer";
import { CustomField } from "../../common/CustomField";

export interface ProductManufacturerTranslation {
  productManufacturerId: number;
  name: string | null;
  description: string | null;
  productManufacturer: ProductManufacturer | null;
  customFields: CustomField[];
}
