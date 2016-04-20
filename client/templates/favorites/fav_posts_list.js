Template.favPostsList.helpers({
    /**
     * Returns a list of all of the current user's favorite posts.
     */
    'favPosts': function() {
        return Meteor.user().favorites;
    }
});

Template.favPostsList.events({
});
