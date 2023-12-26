const Contact = () => {
  return (
    <section
      id="contact"
      className="custom-scroll-margin w-full max-w-[1440px] mx-auto mb-20"
    >
      <h2 className="text-center text-2xl md:text-4xl">Contact</h2>
      <hr className=" border-Poseidon w-2/3 max-w-[375px] mx-auto mt-5 mb-10" />
      <div className="w-full max-w-[600px] mx-auto ">
        <div>
          <img
            src="/assets/icons8-twitterx-48.png"
            alt="X"
            className="inline-block mr-8"
            height={48}
            width={48}
          />
          @MWA_WebDev
        </div>
        <div>
          <img
            src="/assets/icons8-whatsapp-48.png"
            alt="Whatsapp"
            className="inline-block mr-8"
            height={48}
            width={48}
          />
          +92 314 5013062
        </div>
        <div>
          <img
            src="/assets/icons8-gmail-48.png"
            alt="Gmail"
            className="inline-block mr-8"
            height={48}
            width={48}
          />
          0100waleedahmed0100@gmail.com
        </div>
      </div>
    </section>
  );
};
export default Contact;
