import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactScreen() {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const closeSuccessMessage = () => {
    setIsEmailSent(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xc0z5nb",
        "template_lq454ri",
        form.current,
        "k60Bc6ThjyTBNMXji"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsEmailSent(true);

          // Show success SweetAlert
          Swal.fire({
            title: "Success!",
            text: "Your email has been successfully sent!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => closeSuccessMessage());

          console.log("isEmailSent:", isEmailSent);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={styles.container}>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <h1>Contact Us</h1>
        <input style={styles.input} name="user_name" placeholder='Name' required />
        <br /><br />
        <input style={styles.input} name="user_email" placeholder='Email' type="email" required />
        <br /><br />
        <textarea style={styles.textarea} name="message" placeholder='Write your message here...' required />
        <br /><br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    paddingTop: '5em',
    alignItems: 'center',
    flexDirection: 'column',
  },
  form: {
    width: '70%',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  },
  input: {
    width: '100%',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    resize: 'none',
    overflow: 'auto',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'pointer',
  },
};
