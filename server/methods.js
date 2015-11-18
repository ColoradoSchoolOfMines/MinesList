Meteor.methods({
	'insertPost': function(p) {
		Posts.insert({
			title: p.title,
			author: Meteor.user(),
			description: p.desc,
			location: p.location,
			img_url: p.imgURL,
			offers: [],
			created_at: new Date(),
			cancel: { is_cancelled: false, reason: '' }
		});
		console.log("Serverside: Check");
	}
});
