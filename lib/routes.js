// routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
	path: '/'
});

Router.route('profile', {
	path: '/profile/:userId',
	data: function() {
		return Meteor.users.findOne(this.params.userId);
	}
});

Router.route('event', {
	path: '/event/:eventId',
	template: 'event_item',
	data: function(){
		return Events.findOne(this.params.eventId);
	}
});
