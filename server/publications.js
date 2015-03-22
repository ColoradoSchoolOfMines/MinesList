Meteor.publish('users', function() {
	return Meteor.users.find({_id:this.userId}, {fields:{rsvp_events:1}});
});

Meteor.publish('events', function() {
	return Events.find({},  { sort: { created_at: 1 } });
});