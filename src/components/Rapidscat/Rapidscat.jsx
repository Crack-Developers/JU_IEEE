import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt="Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase text-2xl sm:text-3xl font-bold"
              >
                Advancing Technology for Humanity
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                IEEE is at the forefront of technological innovation, fostering advancements in engineering, computing, and technology information. Join us to explore new developments, participate in seminars, and collaborate on projects that aim to make a positive impact on society. Our initiatives include workshops, conferences, and research opportunities that drive the future of technology.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
