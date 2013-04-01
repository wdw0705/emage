define({
	name : "Miss Etikate",
	description : "A photo filter based on a Photoshop action by Miss Etikate: http://miss-etikate.deviantart.com/art/Photoshop-Action-15-120151961",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/lookup_miss_etikate.png)"
			}
		}
	}]
})