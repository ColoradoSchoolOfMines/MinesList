// routes

Router.route('/', function () {
  this.render('Home');
});

Router.route('/profile/:_id', function () {
  this.render('Profile', {
    data: function () {
      templateData = Meteor.users.findOne({_id: this.params._id});
      console.log(templateData);
      return templateData;
    }
  });
});

Router