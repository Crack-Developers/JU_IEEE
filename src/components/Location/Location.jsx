import React from "react";

const Location = () => {
  return (
    <>
    <div className="bg-black">
      <span id="location "></span>
      <section data-aos="fade-up" className="bg-black">
        <div className="container my-4 bg-black">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl text-white">
            Location to visit (Gowrivakkam Office)
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6438508868405!2d80.21791737415275!3d12.866264617180782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbace477413%3A0xf70e4decbbd645ea!2sJeppiaar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1725858285421!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Location;
