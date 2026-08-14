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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.3011028671974!2d77.56148554924785!3d8.467657488093193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04680278a2fa99%3A0x93cbc859e8b04da0!2z4K6J4K6y4K6V4K6z4K6o4K-N4K6kIOCuqOCuvuCupOCuqeCvjSDgrqrgrqTgrr8sIOCuieCun-CviOCur-Cun-Cuv-CupOCun-CvjeCun-CvgQ!5e0!3m2!1sen!2sin!4v1786419941161!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
