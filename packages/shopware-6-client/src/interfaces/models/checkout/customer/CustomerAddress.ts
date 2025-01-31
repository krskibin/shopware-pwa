import { Country } from "../../system/country/Country";
import { CustomField } from "../../common/CustomField";

export interface CustomerAddress {
  customerId?: string;
  countryId?: string;
  countryStateId?: string | null;
  salutationId: string;
  firstName: string;
  lastName: string;
  zipcode: string;
  city: string;
  company?: string | null;
  department?: string | null;
  title?: string | null;
  street: string;
  vatId?: string | null;
  phoneNumber?: string | null;
  additionalAddressLine1?: string;
  additionalAddressLine2?: string;
  country?: Country;
  countryState?: string;
  salutation: string;
  customer?: string;
  customFields?: CustomField;
  id?: string;
}
