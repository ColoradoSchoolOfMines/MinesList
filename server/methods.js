Meteor.methods({
	'insertEvent': function(e) {
		Events.insert({
			title: e.title,
			author: Meteor.user(),
			description: e.desc,
			time: e.time,
			location: e.location,
			img_url: e.imgURL,
			rsvp_users: []
		});
	},
	'RSVP': function(userId, eventId){
		console.log("calling this method");

		Events.update(
		{
			_id: eventId
		},
      	{
            $addToSet:{
              rsvp_users: userId
            }
        });

        Meteor.users.update(
		{
			_id: userId
		},
        {
          $addToSet:{
            rsvp_events : eventId
          }
        });
	},
	'unRSVP': function(userId, eventId){
		console.log("calling this method");

		Events.update(
		{
			_id: eventId
		},
      	{
            $pull:{
              rsvp_users: userId
            }
        });

        Meteor.users.update(
		{
			_id: userId
		},
        {
          $pull:{
            rsvp_events : eventId
          }
        });
	}
});
