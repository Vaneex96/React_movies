import "./AppNewsletter.scss";

const AppNewsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__mask">
        <div className="newsletter__label">NEWSLETTER</div>
        <div className="newsletter__descr">
          Enter your email address to receive all news, updates on new arrivals,{" "}
          <br />
          special offers and other discount information.
        </div>
        <form action="" className="newsletter__form">
          <input placeholder="Your email..." type="text" className="input" />
          <button className="btn">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
};

export default AppNewsletter;
