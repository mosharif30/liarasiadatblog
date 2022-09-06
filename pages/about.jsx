import React from "react";
import { useRouter } from "next/router";

import { Categories } from "../components";

const About = ({ posts }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-0 mb-2 ">
      <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="xl:col-span-2 lg:col-span-3 col-span-1 bg-customGray">
          <div className="lg:sticky relative top-4 ">
            <Categories place="about" />
            {/* <PostWidget /> */}
          </div>
        </div>

        <div className="grid   lg:col-span-9 xl:col-span-10 col-span-1 ">
          <div className="bg-customGray text-white p-5 text-2xl my-auto">
            ABOUT
          </div>
          <span className=" p-5 text-xl my-auto">
            This website is a space for publishing my articles and reviews. My
            name is Amir Siadat. I am a film critic from Iran, and my
            professional background is presented in detail in the “Curriculum
            Vitae “ section of this website. Most of these articles and reviews
            have been written in Persian and published in Iranian monthly or
            quarterly film magazines, therefore the texts you read on this site
            have mostly been translated from Persian to English. The “Brief
            Encounter” section of this website consists of concise and compact
            texts that reflect my feelings about movies immediately after the
            first viewing. Please do reference this website if you quote a part
            of this site's writings.
          </span>
          <div className="bg-customGray text-white p-5 text-2xl my-auto">
            Contact
          </div>
          <span className=" p-5 text-xl my-auto">
            amirhosein.siadat82@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
