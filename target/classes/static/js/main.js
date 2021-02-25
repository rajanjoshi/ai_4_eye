$(document).ready(function () {

    $("#submit-form").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();
        take_snapshot();

    });

});

function take_snapshot() {

 // take snapshot and get image data
 Webcam.snap( function(data_uri) {
  // display results in page
  var screenShotImg = '<img src="'+data_uri+'"/>';
  alert(screenShotImg);
  } );
}

function fire_ajax_submit() {

    var submit = {}
    submit["username"] = $("#username").val();
    //submit["email"] = $("#email").val();

    $("#btn-submit").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/submit",
        data: JSON.stringify(submit),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-submit").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-submit").prop("disabled", false);

        }
    });

}