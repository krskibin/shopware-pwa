import { Plugin } from "./Plugin";
import { CustomField } from "../../common/CustomField";
export interface PluginTranslation {
  pluginId: string;
  label: string | null;
  description: string | null;
  manufacturerLink: string | null;
  supportLink: string | null;
  changelog: [] | null;
  plugin: Plugin | null;
  customFields: CustomField[];
}
