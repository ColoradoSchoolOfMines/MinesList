// routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

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

	this.route('thisPost', {
		path: '/post/:id',
		data: function(){
			return posts.findOne(this.params.id);
		}
	});

});