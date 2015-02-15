posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  // At the bottom of the client code
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
	
	Template.Posts.helpers({
		'posts':function(){
			return posts.find();
		}
	});
	
	Template.Posts.events({
		'click .post':function(event){
			//alert(window.location.href);
			Router.go('thisPost',{id:this._id});
			//console.log(this._id);
		}
	});
	
	Template.newPost.events({
    'submit form.newPostForm': function(event){
      event.preventDefault();
      var title = event.target.newtitle.value;
      var imgURL = event.target.newimgURL.value;
      var descp = event.target.newdescription.value;
      var time = event.target.newtime.value;
      var location = event.target.newlocation.value;
      Meteor.call('insertNewEvent', title, descp, imgURL, time, location);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
	
	Meteor.methods({
    'insertNewEvent': function(title, descp, imgURL, time, location){
		  posts.insert({
			title: title,
			author: Meteor.user().username,
			description: descp,
			time: time,
			location: location,
			imgURL: imgURL,
			rsvp: 0,
			userlist: []
		  });
		}
	});
}