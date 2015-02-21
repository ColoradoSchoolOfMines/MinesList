Meteor.publish('users', function() {
	return Meteor.users.find();
});

Meteor.publish('events', function() {
	return Events.find();
});