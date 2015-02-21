Template.eventsList.helpers({
	'events': function() {
		return Events.find();
	}
});

Template.eventsList.events({
	'click .event': function(event) {
		Router.go('event', { eventId: this._id });
	}
});