import { createSlugManager } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/mod.ts";

declare const API_KEY: string;

const countriesWithRegion = [
	"AE", "AU", "BB", "CA", "CH", "DM", "HK", "IE", "IN", "KN", "KY", "LC", "US"
]

export const {webhook, connector} = createSlugManager({
	apiKey: API_KEY,
	slugFormat: "[[localeCode]]/[[countryCode]]/[[address.region]]/[[address.city]]/[[address.line1]]/[[entityId]]",
	slugGeneratorFn: (lang, profile) => {
		if (profile.address && profile.address.countryCode && countriesWithRegion.indexOf(profile.address.countryCode) !== -1) {
			return `[[localeCode]]/${profile.address.countryCode.toLowerCase()}/[[address.region]]/[[address.city]]/[[address.line1]]/[[entityId]]`
		} else if (profile.address && profile.address.countryCode){
			return `[[localeCode]]/${profile.address.countryCode.toLowerCase()}/[[address.city]]/[[address.line1]]/[[entityId]]`
		}
	},
	slugGeneratorFnFields: ['address'],
});
