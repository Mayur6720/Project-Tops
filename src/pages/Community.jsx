import React from "react";
import CommunityIMG from "../assets/greenCommunity.jpg";
const Community = () => {
  return (
    <>
      <div className="container flex-col flex lg:flex-row justify-around gap-8 my-12 lg:my-16 mx-auto">
        <div className="w-auto mx-4 lg:w-auto flex justify-center">
          <img className="w-2/3 lg:w-auto" src={CommunityIMG} alt="" />
        </div>
        <div className="  text-justify mx-8">
          <p className="mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi
            ipsa totam. Explicabo cumque similique eius perspiciatis, animi
            ipsam, iure eum tempora beatae voluptate quam laborum, saepe odit
            cum veniam pariatur qui? Sequi hic officia rem consequatur sed
            voluptate mollitia eligendi, ipsum nulla? Aperiam, voluptates eum!
          </p>
        </div>
      </div>
      <div className="container flex-col flex lg:flex-row justify-around gap-8 my-12 lg:my-16 mx-auto">
      <div className="w-auto mx-4 lg:w-auto flex justify-center">
          <img className="w-2/3 lg:w-auto" src={CommunityIMG} alt="" />
        </div>
        <div className="  text-justify mx-8">
          <p  className="mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi
            ipsa totam. Explicabo cumque similique eius perspiciatis, animi
            ipsam, iure eum tempora beatae voluptate quam laborum, saepe odit
            cum veniam pariatur qui? Sequi hic officia rem consequatur sed
            voluptate mollitia eligendi, ipsum nulla? Aperiam, voluptates eum!
          </p>
        </div>
      </div>
    </>
  );
};

export default Community;
