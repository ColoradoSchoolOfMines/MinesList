Template.eventItem.helpers({
	'rsvped': function(){
      if(Meteor.user().rsvp_events.indexOf(this._id) != -1){
        return true;
      }
    },
    'isAuthor': function() {
    	return Meteor.userId() == this.author._id;
    }
});

Template.eventItem.events({
	'click .rsvp':function(){
		Meteor.call('RSVP',Meteor.userId(), this._id);
	},
	'click .unrsvp':function(){
		Meteor.call('unRSVP',Meteor.userId(), this._id);
	},
	'click .cancel-event': function() {
		var options = {
			eventId: this._id,
		}
		console.log("id:" + options["eventId"]);
		//$this.next(".cancel-event-form").toggleClass("hide show");
		Meteor.call('cancelEvent', options)
	},
	'submit .cancel-event-form': function(e) {
		e.preventDefault();
		if ($.trim(e.target.reason.value)) {
			var options = {
				eventId: this._id,
				reason: e.target.reason.value
			}
			Meteor.call('cancelEvent', options)
		} else {
			console.log("don't cancel");
		}
	}
});

