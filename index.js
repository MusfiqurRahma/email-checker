const regExp = () => {
    const emailField = document.getElementById('email-checker');
    const emailText = emailField.value;
    emailField.value = '';
    const validEmailRe = /^[-a-z0-9~!$%^&*_=+}{'?]+(.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(.[-a-z0-9_]+)*.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    
    // let output = validEmailRe.test(emailText);
  
    if (validEmailRe.test(emailText)) {
        document.getElementById('display').innerHTML = '✅ Yup this is a Valid Email';
        document.getElementById('display').style.textAlign='center';
    } else {
        document.getElementById('display').innerHTML = '❎ooppss!!!This is Invalid Email';
        document.getElementById('display').style.textAlign='center'
        return false;
    }
}