Meteor.methods({
	'insertEvent': function(e) {
		Events.insert({
			title: e.title,
			author: Meteor.user(),
			description: e.desc,
			location: e.location,
			img_url: e.imgURL,
			offers: [],
			created_at: new Date(),
			cancel: { is_cancelled: false, reason: '' }
		});
	},
	'RSVP': function(userId, eventId){
		Events.update(
			{
				_id: eventId
			},
			{
				$addToSet:{
					rsvp_users: userId
				}
			}
		);

		Meteor.users.update(
			{
				_id: userId
			},
			{
				$addToSet:{
					rsvp_events : eventId
				}
			}
		);
	},
	'unRSVP': function(userId, eventId){
		Events.update(
			{
				_id: eventId
			},
			{
				$pull:{
					rsvp_users: userId
				}
			}
		);

		Meteor.users.update(
			{
				_id: userId
			},
			{
				$pull:{
					rsvp_events : eventId
				}
			}
		);
	},
	'cancelEvent': function(options) {
		Events.update(
			{
				_id: options.eventId
			},
			{
				$set: {
					"cancel.is_cancelled": true,
				//	"cancel.reason": options.reason
				}

			}
		);
		Events.remove({
			_id : options.eventId
		});
	}
});
