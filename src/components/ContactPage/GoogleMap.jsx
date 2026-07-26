const GoogleMap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Visit Our Office
          </span>

          <h2 className="text-5xl font-bold mt-4">Find Us on the Map</h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            We welcome you to visit our office and discuss your industrial
            automation requirements with our engineering team.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          {/* <iframe
            title="Google Map"
            src="YOUR_GOOGLE_MAP_EMBED_URL"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.990794174079!2d77.73580577506199!3d8.692422991356116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040ddb22236947%3A0xf651948893b827fc!2seFloz%20IT%20Services!5e0!3m2!1sen!2sin!4v1784968632700!5m2!1sen!2sin"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
