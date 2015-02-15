// routes.js

Router.map(function() {

	this.route('home', {
		path: '/'
	});

	this.route('profile', {
		path: '/profile/:userId',
		data: function() {
			return Meteor.users.findOne({_id: this.params.userId});
		}
	});

});