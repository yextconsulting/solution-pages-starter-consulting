import { createSlugManager } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/mod.ts";

declare const API_KEY: string;

export const {webhook, connector} = createSlugManager({
	apiKey: API_KEY,
	slugFormat: "[[localeCode]]/[[c_serviceArea]]-[[c_stateName]]",
	slugFormatLocaleOverrides: {
		"en": "[[c_serviceArea]]-[[c_stateName]]"
	},
	entityTypes: ["ce_serviceArea"],
});
