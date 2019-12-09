import React from "react";
import axios from "axios";

import "./HomeContactForm.scss";

import Button from "../../../../components/Button/Button";

import { useFormValidate, ValidateContact } from "../../../../utils";

const INITIAL_STATE = {
  name: "",
  mail: "",
  company: "",
  message: "",
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const HomeContactForm = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    posted,
  } = useFormValidate(INITIAL_STATE, ValidateContact, sendMessage);

  function sendMessage() {
    // const body = {
    //   name: `${values.name}`,
    //   mail: `${values.mail}`,
    //   company: `${values.company}`,
    //   message: `${values.message}`,
    // };

    // axios
    //   .post("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({ "form-name": "contact", ...values }),
    //   })
    //   .then(() => alert("Success!"))
    //   .catch(err => alert(err));

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then(res => console.log(`Response: ${res}`))
      .catch(error => alert(error));

    console.log(encode({ "form-name": "contact", ...values }));

    console.log("Message Body: ", body);
  }

  return (
    <div className="home-contact__form-wrapper">
      <h3 className="home-contact__form__cta">Let's talk!</h3>
      <form
        onSubmit={handleSubmit}
        className="home-contact__form"
        name="contact"
        // method="post"
        // action="/contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Required for netlify to detect form */}
        <input type="hidden" name="form-name" value="contact" />
        {/* NAME AND COMPANY ROW */}
        <div className="home-contact__form__row">
          <div className="home-contact__form__input-container home-contact__form__input-container--half">
            <input
              type="text"
              name="name"
              autoComplete="nope"
              className="home-contact__form__input"
              value={values.name}
              errors={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="name"
              aria-label="name"
              className={`home-contact__form__label ${values.name &&
                "home-contact__form__label--active"}`}
            >
              Name
            </label>
            {errors.name && (
              <span className="home-contact__form__error">{errors.name}</span>
            )}
          </div>
          <div className="home-contact__form__input-container home-contact__form__input-container--half">
            <input
              type="text"
              name="company"
              autoComplete="off"
              className="home-contact__form__input"
              value={values.company}
              errors={errors.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="company"
              aria-label="company"
              className={`home-contact__form__label ${values.company &&
                "home-contact__form__label--active"}`}
            >
              Company
            </label>
            {errors.company && (
              <span className="home-contact__form__error">
                {errors.company}
              </span>
            )}
          </div>
        </div>
        {/* EMAIL ROW */}
        <div className="home-contact__form__row">
          <div className="home-contact__form__input-container">
            <input
              type="text"
              name="mail"
              autoComplete="nope"
              className="home-contact__form__input"
              value={values.mail}
              errors={errors.mail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label
              htmlFor="mail"
              aria-label="mail"
              className={`home-contact__form__label ${values.mail &&
                "home-contact__form__label--active"}`}
            >
              Email
            </label>
            {errors.mail && (
              <span className="home-contact__form__error">{errors.mail}</span>
            )}
          </div>
        </div>
        <div className="home-contact__form__row home-contact__form__row--textarea">
          <div className="home-contact__form__input-container">
            <textarea
              name="message"
              className={`home-contact__form__textarea ${values.message &&
                "home-contact__form__textarea--active"}`}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            <label
              htmlFor="message"
              aria-label="message"
              className={`home-contact__form__label ${values.message &&
                "home-contact__form__label--active"}`}
            >
              Message
            </label>
            {errors.message && (
              <span
                className={`home-contact__form__error ${values.message &&
                  "home-contact__form__error--active"}`}
              >
                {errors.message}
              </span>
            )}
          </div>
        </div>
        <Button
          btnText="Send Message"
          btnStyle="blue"
          btnSize="md"
          addClass="home-contact__form__submit"
        />
      </form>
    </div>
  );
};

export default HomeContactForm;
