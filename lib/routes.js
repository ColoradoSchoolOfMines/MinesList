// routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function(){
		return [Meteor.subscribe('users'), Meteor.subscribe('posts')];
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

Router.route('post', {
	path: '/post/:postId',
	template: 'postItem',
	data: function(){
		return Posts.findOne(this.params.postId);
	}
});

Router.route('createNew', {
	path: 'createNew',
	template: 'postNew'
});


Router.route('test', {
	path: '/test',
	template: 'test'
});
