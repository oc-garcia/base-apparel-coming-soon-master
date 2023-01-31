import "./LandingPage.css";
import submitIcon from "./icon-arrow.svg";
import { useForm } from "react-hook-form";

const LandingPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

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
        <form
          className={errors.email ? "input-container-error" : "input-container"}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <input
            {...register("email", {
              required: "Please provide a valid email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please provide a valid email",
              },
            })}
            placeholder="Email Address"
          />
          <button type="submit">
            <img src={submitIcon} alt="" />
          </button>
        </form>
        <p className="errorMsg">{errors.email?.message}</p>
      </section>
      <section className="image-container"></section>
      <div className="logo-container-mobile"></div>
    </main>
  );
};

export default LandingPage;
