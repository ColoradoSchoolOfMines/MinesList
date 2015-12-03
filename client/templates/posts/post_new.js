Session.set('uploadUrl', null);

Template.postNew.helpers({
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

Template.postNew.events({
	'submit form': function(post) {
		console.dir(post);
		post.preventDefault();
		var p = {
			title: post.target.title.value,
			//imgURL: post.target.imgURL.value,
			desc: post.target.description.value,
			location: post.target.location.value,
			tags: getTagslist(),
		}
		
		console.log("title");
		console.log("check");
		console.dir(p);
		Meteor.call('insertPost', p);
	}
});