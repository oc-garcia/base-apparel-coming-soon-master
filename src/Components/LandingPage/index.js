import "./LandingPage.css";
import submitIcon from "./icon-arrow.svg"

const LandingPage = () => {
  return (
    <main className="container">
      <section className="contact-container">
        <div className="logo-container-desktop"></div>
        <h1>
          <span>WE'RE</span>
          <br></br>COMING<br></br>SOON
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. Add your email bellowto stay up-to-date
          with announcements and our launch deals.
        </p>
        <form className="input-container">
          <input type="email" placeholder="Email Address" required />
          <button type="submit">
            <img src={submitIcon} alt="" />
          </button>
        </form>
      </section>
      <section className="image-container"></section>
      <div className="logo-container-mobile"></div>
    </main>
  );
};

export default LandingPage;
