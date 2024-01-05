import React from "react";
import comapny1 from "../assets/company1.png";
import comapny2 from "../assets/company2.png";
import comapny3 from "../assets/company3.png";
import comapny4 from "../assets/company4.png";
import comapny5 from "../assets/company5.png";
import comapny6 from "../assets/company6.png";
import comapny7 from "../assets/company7.png";


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Iconn.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Icon1.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/Icon2.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGray">
          We have been working with some Fortune 500+ clients
        </p>

        {/* company logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={comapny1} alt="" />
          <img src={comapny2} alt="" />
          <img src={comapny3} alt="" />
          <img src={comapny4} alt="" />
          <img src={comapny5} alt="" />
          <img src={comapny6} alt="" />
          <img src={comapny7} alt="" />
        </div>
      </div>

      {/* service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralDGrey ">Who is Nextcent suitable for?</p>
        
      </div>

      {/* card */}

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {
            services.map((service)=> <div className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full" key={service.id}>
                <div>
                    <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img src={service.image} alt="" className="-ml-5"/>
                    </div>
                    <h4 className="text-2xl font-bold text-neutral-600 mb-2 px-2">{service.title}</h4>
                    <p className="text-sm text-neutralDGrey ">{service.description}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Services;
