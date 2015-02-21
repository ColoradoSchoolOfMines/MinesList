Meteor.methods({
	'insertEvent': function(e) {
		Events.insert({
			title: e.title,
			author: Meteor.user(),
			description: e.desc,
			time: e.time,
			location: e.location,
			img_url: e.imgURL,
			rsvp_list: []
		});
	}
});
