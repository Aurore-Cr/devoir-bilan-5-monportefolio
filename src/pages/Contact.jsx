function Contact() {
  return (
    <div className="Contact-page">
      <h2>Contact Me</h2>
      <form className="Contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;
