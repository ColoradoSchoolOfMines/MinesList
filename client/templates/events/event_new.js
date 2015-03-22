Session.set('uploadUrl', null);

Template.eventNew.helpers({
	finishedUpload: function() {
    return {
        finished: function(index, fileInfo, context) { 
        	console.log(fileInfo.url);
        	Session.set('uploadUrl', fileInfo.url);
         }
    }
  },
  getUploadUrl: function(){
  	return Session.get('uploadUrl');
  }
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