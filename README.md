# MinesList

Welcome to MinesList, the defacto buying/selling tool for Mines!

### What is there?

The following files are here.

### Files
* Client
  * Template
    * common
      * layout.html: Layout for all pages
      * loading.html: Loading page
      * notFound.html: Shows Content when it is not found (Shows error 404)
    * favorites
      * fav_posts_list.html: List of posts favorited by user
      * favorites.html: The Actual page that shows the list of favorite posts
    * home
      * home.html: Shows the homepage
    * posts
      * post_item.html: The entry for each post on the site
      * post_new.html: Page where new posts are made.
      * post_list.html: List of all the post_item posts
    * profile
      * profile.html: Profile page for user currently logged in. (Work in Progress)

* Server
  * methods.js: Writes the output for posts, users, etc to MongoDB database.

### How to Run


Check out [this link](https://github.com/tomitrescak/meteor-uploads) for the image uploading software we used.

To run the program, type `meteor run` inside the directory of your project.

### Known Bugs
* Upload image's browse button is disabled by default. Work around has been added but needs to be changed.
* It is still possible to make posts that have nothing in them. (Check for required fields).


