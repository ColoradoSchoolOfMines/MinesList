Template.eventNew.helpers({

});

Template.eventNew.events({
	'submit form': function(event) {
		event.preventDefault();
		var e = {
			title: event.target.title.value,
			imgURL: event.target.imgURL.value,
			desc: event.target.description.value,
			time: event.target.time.value,
			location: event.target.location.value
		}
		Meteor.call('insertEvent', e);
	}
});