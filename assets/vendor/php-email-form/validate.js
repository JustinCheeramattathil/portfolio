/* 
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
/*(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error)
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();*/
/*function validateForm()
{
  var name=document.Submission.name.value;
  var email=document.Submission.email.value;
  var subject=document.Submission.subject.value;
  var message=document.Submission.message.value; 
  var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
 var error=document.getElementById("error-message");
  
if(name==""){
     error.innerHTML='The box is Empty'
     return false;
}
if(name.length<5||(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
{
 error.innerHTML='Name Should Contain atleast five Elements'
     return false;
}
if(email==""){
 error.innerHTML='The box is Empty'
     return false;
}  
if(regex.test(email)==false)
{
 error.innerHTML='Invalid Email Id, try another one'
     return false;
}
if(subject.length<5)
{
 error.innerHTML='subject Should Contain atleast 5 Elements'
     return false;
} 
if(message.length<10)
{
 error.innerHTML=' Message Should Contain 10 Words'
     return false;
} 
if(message.length>100)
{
 error.innerHTML='Exceeds Limit'
     return false;
} 
     return true;
}*/

/*var nameError= document.getElementById('name');
var emailError= document.getElementById('email');
var subjectError= document.getElementById('subject');
var messageError= document.getElementById('message');
var nameError= document.getElementById('submitForm');*/

function validateName()
{
    var name=document.getElementById('name').Value;
    if(name.length==0){
        nameError.innerHTML='Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validateEmail()
{
    var email=document.getElementById('email').Value;


    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email Invalid'
    return false;
    }
   emailError.innerHtml='valid';
   return true;
}
function validateMessage()
{
    var message=document.getElementById('message').Value; 
    var required=30;
    var left=required-message.length;


    if(left>0){
        messageError.innerHTML=left +'more characters required';
        return false;
    }
    messageError.innerHtml='valid';
   return true;
}
function validateForm()
{
    if(!validateName()||!validateEmail()||!validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}

var nameError= document.getElementById('submitForm');
var nameError= document.getElementById('name');
var emailError= document.getElementById('email');
var subjectError= document.getElementById('subject');
var messageError= document.getElementById('message');