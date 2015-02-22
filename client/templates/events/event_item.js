Template.eventItem.helpers({
	'rsvped': function(){
      if(Meteor.user().rsvp_events.indexOf(this._id) != -1){
        return true;
      }
    }
});

Template.eventItem.events({
	'click .rsvp':function(){
		Meteor.call('RSVP',Meteor.userId(), this._id);
	},

	'click .unrsvp':function(){
		Meteor.call('unRSVP',Meteor.userId(), this._id);
	}
});