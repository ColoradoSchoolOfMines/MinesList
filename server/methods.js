Meteor.methods({
	'insertPost': function(p) {
		Posts.insert({
			title: p.title,
			author: Meteor.user(),
			description: p.desc,
			location: p.location,
			img_url: p.imgURL,
			tags: p.tags,
			created_at: new Date(),
			cancel: { is_cancelled: false, reason: '' }
		});
	},
	'favoritePost': function(post) {
		alreadyExists = false;

		Meteor.user().favorites.forEach(function(favPost) {
			if (favPost._id == post._id) {
				alreadyExists = true;
			}
		});

		if (!alreadyExists) {
			Meteor.users.update({ _id: Meteor.user()._id },{ $push: { favorites: post }});
			console.log("adding to favorites");
		}
	}
});
