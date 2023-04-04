import React, { useEffect } from "react";

function Validation(props) {
  const errors = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (props.count >= 20) {
      alert("Exceeded the limit, try again later!");
    } else {
      if (props.email == undefined || props.email == "") {
        errors.email = "Undefined email value";
        // alert("Enter all values, try again...");
      } else {
        if (ValidateEmail(props.email) == false) {
          errors.email = "Improper Email Authentication";
          // alert("Wrong email address, try again...");
        }
      }
      if (props.password == undefined || props.password == "") {
        errors.password = "Undefined password value";
        // alert("Enter all values, try again...");
      } else {
        if (ValidatePassword(props.password) !== true) {
          errors.password = "Improper Password Authentication";
          // alert("Wrong password, try again...");
        }
      }
    }
    console.log(errors);
  }, [props]);

  function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  //To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  function ValidatePassword(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validation;
