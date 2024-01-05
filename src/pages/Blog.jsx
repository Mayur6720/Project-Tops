import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';




const Blog = () => {
  return (
    <>
      <div className="container mx-auto w-100">
        <div className="mx-auto my-10 w-100 justify-center lg:justify-around items-center flex flex-wrap lg:flex-row flex-col gap-8 ">
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col lin ">
            <img className="w-92 " src={image1} alt="" />
            <h5>Nature</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut earum voluptas iste minus atque.</p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92 my-4" src={image2} alt="" />
            <h5>Weather</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet quae officia ab in?</p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image3} alt="" />
            <h5>Mountain</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptatum quisquam mollitia ratione? Error.</p>
          </div>
        {/* </div>

        <div className="mx-auto my-10 w-100 justify-center lg:justify-around items-center flex lg:flex-row flex-col gap-8 "> */}
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image4} alt="" />
            <h5>Home</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptatum quisquam mollitia ratione? Error.</p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image2} alt="" />
            <h5>Greenish</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptatum quisquam mollitia ratione? Error.</p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image1} alt="" />
            <h5>Yellow</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptatum quisquam mollitia ratione? Error.</p>
          </div>
        {/* </div>

        <div className="mx-auto my-10 w-100 justify-center lg:justify-around items-center flex lg:flex-row flex-col gap-8 "> */}
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image5} alt="" />
            <h5>Tea</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt natus adipisci ipsam itaque consequuntur.</p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image3} alt="" />
            <h5>Farm</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio eveniet enim quaerat harum!
            </p>
          </div>
          <div className="lg:w-1/3 w-2/3 mx-2 items-center flex flex-col ">
            <img className="w-92" src={image1} alt="" />
            <h5>Sweet</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur sapiente nesciunt ea dolore.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
