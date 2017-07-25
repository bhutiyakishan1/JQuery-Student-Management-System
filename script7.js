/**
 * Created by Kishan on 6/20/2017.
 */


var test = JSON.parse(localStorage.getItem('userList'));
var d;
if(test == null){
    test = [];}


var fname = document.getElementById("firstname").value;
var lname = document.getElementById('lastname').value;
var uname = document.getElementById('username').value;
var eml = document.getElementById('email').value;
var pwd = document.getElementById('password').value;
var loc = document.getElementById('location').value;
var phn = document.getElementById('phone').value;
var btc=document.getElementById('batch').value;
var communication = document.getElementById('communication').value;
var permanent = document.getElementById('permanent').value;
var google =document.getElementById('google').value;
var facebook =document.getElementById('facebook').value;
var linkedin =document.getElementById('linkedin').value;
var genderM = document.getElementById('male');
var genderF = document.getElementById('female');


// DRAG AND DROP


document.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Text', event.target.innerHTML);
});


//REMOVING VALIDATION ERRORS
function dltObj() {
    if (document.getElementById("removee")) {
        document.querySelector("#removee").remove();
    }
}

//ON SUBMIT FUNCTION
function register() {

    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById('lastname').value;
    var uname = document.getElementById('username').value;
    var eml = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var loc = document.getElementById('location').value;
    var phn = document.getElementById('phone').value;
    var btc=document.getElementById('batch').value;
    var communication = document.getElementById('communication').value;
    var permanent = document.getElementById('permanent').value;
    var google =document.getElementById('google').value;
    var facebook =document.getElementById('facebook').value;
    var linkedin =document.getElementById('linkedin').value;
    var genderM = document.getElementById('male');
    var genderF = document.getElementById('female');

    if (fname === '') {
        document.getElementById('form1').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Firstname cannot be empty</p>");

    } else {
        if (lname === "") {
            document.getElementById('form2').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Lastname cannot be empty</p>");

        }
        else {
            if (uname === "") {

                document.getElementById('form3').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Username cannot be empty</p>");
            } else {
                if (eml === "") {

                    document.getElementById('form4').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Email cannot be empty</p>");
                } else {
                    if (pwd === "") {

                        document.getElementById('form5').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Password cannot be empty</p>");
                    }
                    else {
                        if (phn === '') {
                            document.getElementById('form6').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Phone number cannot be empty</p>");
                        }
                        else {
                            if (btc === '') {
                                document.getElementById('form7').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Batch number cannot be empty</p>");
                            } else {
                                if (loc === '') {
                                    document.getElementById('form8').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Location  cannot be empty</p>");
                                } else {
                                    if (communication === '') {
                                        document.getElementById('form9').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Address communication  cannot be empty</p>");
                                    } else {
                                        if (permanent === '') {
                                            document.getElementById('form10').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Address permanent cannot be empty</p>");
                                        }
                                        else {
                                            if (google === '') {
                                                document.getElementById('form11').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer google cannot be empty</p>");
                                            }
                                            else {
                                                if (facebook === '') {
                                                    document.getElementById('form12').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer facebook cannot be empty</p>");
                                                }
                                                else {
                                                    if (linkedin === '') {
                                                        document.getElementById('form13').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer linkedin cannot be empty</p>");
                                                    }

                                                    /*else {
                                                     if (genderM.checked == false && genderF.checked == false) {

                                                     document.getElementById('form6').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'> Please select the gender</p>");
                                                     return false;

                                                     }*/

                                                    else {
                                                        var userobj = {
                                                            firstname: fname,
                                                            lastname: lname,
                                                            username: uname,
                                                            email: eml,
                                                            password: pwd,
                                                            phone: phn,
                                                            batch: btc,
                                                            location: loc,
                                                            address: {
                                                                communication: communication,
                                                                permanent: permanent
                                                            },
                                                            previous_employer: {
                                                                google: google,
                                                                facebook: facebook,
                                                                linkedIn: linkedin
                                                            }

                                                        }
                                                        //var test = JSON.parse(localStorage.getItem('userList'));
                                                        test.push(userobj);
                                                        localStorage.setItem('userList', JSON.stringify(test));
                                                        loctable();
                                                        regForm.reset();
                                                    }
                                                }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    return true;
}

// displaying table
function loctable() {


    if (localStorage.userList) {


        //  var rtobj = JSON.parse(localStorage.getItem('userList'));
        var htm = "<table class='classoftable' border='1' style='border-collapse:collapse;' cellpadding='5'>";


// DROPDOWN TO SELECT ROWS


        $(document).ready(function () {
            $("#dropdown").change(function () {
                if ($("#dropdown").val() == '10') {
                    htm = '';
                    jQuery('#data').html(htm);
                    htm += '<tr ><th >Firstname</th><th >Lastname</th><th >Username</th><th >Email</th><th >Action 1</th><th >Action2</th><th >Action 3</th>'

                    for (var i = 0; i < 10; i++) {


                        htm += '<tr id="tr_' + i + '"><td >' + test[i].firstname + '</td>';
                        htm += '<td >' + test[i].lastname + '</td>';
                        htm += '<td >' + test[i].username + '</td>';
                        htm += '<td >' + test[i].email + '</td>';
                        htm += '<td ><a href="#" id="edit_' + i + '" style="color: darkred">Edit</a></td>';
                        htm += '<td ><a href="#" id="view_' + i + '" style="color: darkred">View</a></td>';
                        htm += '<td ><a href="#" id="delete_' + i + '" style="color: darkred">Delete</a></td>';
                        htm += '</tr>';
                    }

                    htm += '</table>';
                    jQuery('#data').html(htm);
                    $(".classoftable").show();

                }
                else if ($("#dropdown").val() == '20') {
                    htm = '';
                    jQuery('#data').html(htm);
                    htm += '<tr ><th >Firstname</th><th >Lastname</th><th >Username</th><th >Email</th><th >Action 1</th><th >Action2</th><th >Action 3</th>'
                    for (var i = 0; i < 20; i++) {
                        htm += '<tr id="tr_' + i + '"><td >' + test[i].firstname + '</td>';
                        htm += '<td >' + test[i].lastname + '</td>';
                        htm += '<td >' + test[i].username + '</td>';
                        htm += '<td >' + test[i].email + '</td>';
                        htm += '<td ><a href="#" id="edit_' + i + '" style="color: darkred">Edit</a></td>';
                        htm += '<td ><a href="#" id="view_' + i + '" style="color: darkred">View</a></td>';
                        htm += '<td ><a href="#" id="delete_' + i + '" style="color: darkred">Delete</a></td>';
                        htm += '</tr>';
                    }

                    htm += '</table>';
                    jQuery('#data').html(htm);
                    $(".classoftable").show();


                }
                else if ($("#dropdown").val() == '50') {

                    htm = '';
                    jQuery('#data').html(htm);
                    htm += '<tr ><th >Firstname</th><th >Lastname</th><th >Username</th><th >Email</th><th >Action 1</th><th >Action2</th><th >Action 3</th>'
                    for (var i = 0; i < 50; i++) {
                        htm += '<tr id="tr_' + i + '"><td >' + test[i].firstname + '</td>';
                        htm += '<td >' + test[i].lastname + '</td>';
                        htm += '<td >' + test[i].username + '</td>';
                        htm += '<td >' + test[i].email + '</td>';
                        htm += '<td ><a href="#" id="edit_' + i + '" style="color: darkred">Edit</a></td>';
                        htm += '<td ><a href="#" id="view_' + i + '" style="color: darkred">View</a></td>';
                        htm += '<td ><a href="#" id="delete_' + i + '" style="color: darkred">Delete</a></td>';
                        htm += '</tr>';
                    }

                    htm += '</table>';
                    jQuery('#data').html(htm);
                    $(".classoftable").show();

                }
                else if ($("#dropdown").val() == '100') {
                    htm = '';
                    jQuery('#data').html(htm);
                    htm += '<tr ><th >Firstname</th><th >Lastname</th><th >Username</th><th >Email</th><th >Action 1</th><th >Action2</th><th >Action 3</th>'
                    for (var i = 0; i < test.length; i++) {
                        htm += '<tr id="tr_' + i + '"><td >' + test[i].firstname + '</td>';
                        htm += '<td >' + test[i].lastname + '</td>';
                        htm += '<td >' + test[i].username + '</td>';
                        htm += '<td >' + test[i].email + '</td>';
                        htm += '<td ><a href="#" id="edit_' + i + '" style="color: darkred">Edit</a></td>';
                        htm += '<td ><a href="#" id="view_' + i + '" style="color: darkred">View</a></td>';
                        htm += '<td ><a href="#" id="delete_' + i + '" style="color: darkred">Delete</a></td>';
                        htm += '</tr>';

                    }

                    htm += '</table>';
                    jQuery('#data').html(htm);
                    $(".classoftable").show();
                }
                else {
                    $(".classoftable").hide();
                }

            });

            $("#dropdown").change();

        });
    }
    else {

        jQuery.ajax({
            "type": "GET",
            "url": "content.json",
            "datatype": "JSON",
            "success": function (data) {
                localStorage.setItem("userList", JSON.stringify(data));
            },
            "error": function () {
                alert('Error happened while making server request!!!');
            }
        });


    }
}

    //Search Box

    $(document).ready(function()
    {
        $('#search').keyup(function()
        {
            searchTable($(this).val());
        });
    });

    function searchTable(inputVal)
    {
        var table = $('#data');
        table.find('tr').each(function(index, row)
        {
            var allCells = $(row).find('td');
            if(allCells.length > 0)
            {
                var found = false;
                allCells.each(function(index, td)
                {
                    var regExp = new RegExp(inputVal, 'i');
                    if(regExp.test($(td).text()))
                    {
                        found = true;
                        return false;
                    }
                });
                if(found == true)$(row).show();else $(row).hide();
            }
        });
    }

//EDIT BUTTON

jQuery(document).on('click', 'a[id^="edit_"]', function () {

    $("#inputsubmit").hide();
    $("#inputupdate").show();
    var idSplit = jQuery(this).attr('id').split('_'),
        trId = 'tr_' + idSplit[1];
    d=idSplit[1];

    for(var i=0;i<test.length;i++) {
        if (i == d) {

            $("#firstname").val(test[d].firstname);
            $("#lastname").val(test[d].lastname);
            $("#username").val(test[d].username);
            $("#email").val(test[d].email);
            $("#phone").val(test[d].phone);
            $("#batch").val(test[d].batch);
            $("#location").val(test[d].location);
            $("#communication").val(test[d].address.communication);
            $("#permanent").val(test[d].address.permanent);
            $("#google").val(test[d].previous_employer.google);
            $("#facebook").val(test[d].previous_employer.facebook);
            $("#linkedin").val(test[d].previous_employer.linkedin);

            //Calling edit function
        }
    }

});


$("#inputupdate").click(function(){

    test[d].firstname = $("#firstname").val();
    test[d].lastname = $("#lastname").val(),
        test[d].username = $("#username").val(),
        test[d].email = $("#email").val(),
        test[d].batch = $("#batch").val(),
        test[d].location = $("#location").val(),
        test[d].address.communication = $("#communication").val(),
        test[d].address.permanent = $("#permanent").val(),
        test[d].previous_employer.google = $("#google").val(),
        test[d].previous_employer.facebook = $("#facebook").val(),
        test[d].previous_employer.linkedin = $("#linkedin").val()


    localStorage.setItem("userList", JSON.stringify(test));
    loctable();
    regForm.reset();
    $("#inputupdate").hide();
    $("#inputsubmit").show();



});



//VIEW BUTTON
jQuery(document).on('click', 'a[id^="view_"]', function (event) {

    event.preventDefault();


    var idSplit = jQuery(this).attr('id').split('_'),
        trId = 'tr_' + idSplit[1];
    d=idSplit[1];

    if (test[d] != '') {
        var htm1 = "<table border='1' style='border-collapse:collapse;'>";
        htm1 += '<tr ><th >Phone</th><th >Batch</th><th >Location</th><th >Address</th><th >Previous Employer</th></tr>';
        htm1 += '<td >' + test[d].phone + '</td>';
        htm1 += '<td >' + test[d].batch + '</td>';
        htm1 += '<td >' + test[d].location + '</td>';
        htm1 += '<td >' + '<strong>Communication :</strong>' + test[d].address.communication + "<br>" + '<strong>Permanent:</strong>' + test[d].address.permanent + '</td>';
        htm1 += '<td >' + '<strong>Google :</strong>' + test[d].previous_employer.google + "<br>" + '<strong>Facebook:</strong>' + test[d].previous_employer.facebook + "<br>" + '<strong>Linkedin:</strong>' + test[d].previous_employer.linkedin + '</td>';
        htm1 += '</tr>';
        htm1 += '</table>';

        jQuery('#' + trId).after('<tr><td colspan="7">'+htm1+'</td></tr>');
        test[d] = '';
    }

    else {
        jQuery('#' + trId).next().toggle(htm1);
    }

});


//DELETE BUTTON

jQuery(document).on('click', 'a[id^="delete_"]', function (event) {

    event.preventDefault();

    //rtobj = JSON.parse(localStorage.getItem('userList'));
    var idSplit = jQuery(this).attr('id').split('_'),
        trId = 'tr_' + idSplit[1];


    jQuery('#' + trId).closest('tr').remove();
    test.splice(idSplit[1],1)
    localStorage.setItem("userList", JSON.stringify(test));
    loctable();
});






