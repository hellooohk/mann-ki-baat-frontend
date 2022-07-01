import React from "react";
const ContactForm = () => {
  return (
    <div className="ContactForm col">
      <form>
        <div className="col">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="col">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="col">
          <label htmlFor="">Message</label>
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
