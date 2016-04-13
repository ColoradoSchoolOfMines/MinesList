Template.customUpload.created = function() {
 Uploader.init(this);
 $('.jqUploadclass').prop('disabled', false);
}

// Template.customUpload.rendered = function () {
//   Uploader.render.call(this);
// };

Template.customUpload.events({
 'click .start': function (e) {
  Uploader.startUpload.call(Template.instance(), e);
 }

});

Template.customUpload.helpers({
 'infoLabel': function() {
  var instance = Template.instance();

    // we may have not yet selected a file
    var info = instance.info.get()
    if (!info) {
     return;
    }

    var progress = instance.globalInfo.get();

    // we display different result when running or not
    return progress.running ?
    info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
    info.name + ' - ' + info.size + 'B';
   },
   'progress': function() {
    return Template.instance().globalInfo.get().progress + '%';
   }
  });

$(".buttonSubmit").on("hover", function() {
 console.log("Anything");
 $('.jqUploadclass').prop('disabled', false);

});
$( document ).ready(function() {
 console.log( "ready!" );


    // $(":input").disabled = false;

   });