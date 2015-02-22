// routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return Meteor.subscribe('users');
	}
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
