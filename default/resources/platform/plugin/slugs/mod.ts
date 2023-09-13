import { createSlugManager } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/mod.ts";

declare const API_KEY: string;

const countriesWithRegion = [
	"AF", "AU", "BR", "CA", "CD", "PF", "GM", "GT", "GW", "HN", "IN", "IE", "JP", "KI", "ML", "MX", "NR", "NP", "NI", "MP", "OM", "PW", "SH", "LC", "TV", "UA", "VI", "US", "UZ", "VE", "YE", "GB"
]

export const {webhook} = createSlugManager({
	apiKey: API_KEY,
	slugFormat: "[[localeCode]]/[[countryCode]]/[[address.region]]/[[address.city]]/[[address.line1]]",
	slugGeneratorFn: (lang, profile) => {
		if (profile.address && profile.address.countryCode && countriesWithRegion.indexOf(profile.address.countryCode) !== -1) {
			return `[[localeCode]]/${profile.address.countryCode.toLowerCase()}/[[address.region]]/[[address.city]]/[[address.line1]]`
		} else if (profile.address && profile.address.countryCode){
			return `[[localeCode]]/${profile.address.countryCode.toLowerCase()}/[[address.city]]/[[address.line1]]`
		}
	},
	slugGeneratorFnFields: ['address'],
});
