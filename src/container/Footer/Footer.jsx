import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useForm } from "../../hooks/useForm";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import "./Footer.scss";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The field 'Name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The field 'Name' leads only letters and spaces";
  }

  if (!form.email.trim()) {
    errors.email = "The field 'Email' is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The field 'Email' is wrong";
  }

  if (!form.subject.trim()) {
    errors.subject = "The field 'Subject' is required";
  }

  if (!form.comments.trim()) {
    errors.comments = "The field 'Comments' is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "The field 'Comments' can't exceeded 255 characters";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Footer = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h2 className="head-text">Get in Touch Today</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:lanchasdev@gmail.com" className="p-text">
            lanchasdev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel +34 672027968" className="p-text">
            +34 672 027 968
          </a>
        </div>
      </div>

      <form className="app__flex app__footer-form " onSubmit={handleSubmit}>
        <div className="app__flex">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="p-text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>
        {errors.name && <p style={styles}>{errors.name}</p>}
        <div className="app__flex">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="p-text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        {errors.email && <p style={styles}>{errors.email}</p>}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Mail subject"
            className="p-text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
        </div>
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <div>
          <textarea
            name="comments"
            cols="30"
            rows="10"
            placeholder="Give me your feedback! :)"
            className="p-text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
        </div>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <button type="submit" value="Enviar" className="p-text">
          SEND
        </button>
      </form>
      {loading && <Loader />}
      {response && <Message msg="The data has been send!" bgColor="#198754" />}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
