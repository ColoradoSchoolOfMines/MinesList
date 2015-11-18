Meteor.publish('users', function() {
	return Meteor.users.find({_id:this.userId});
});

Meteor.publish('posts', function() {
	return Posts.find({},  { sort: { created_at: 1 } });
});