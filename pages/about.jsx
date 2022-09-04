import React from "react";
import { useRouter } from "next/router";

import { Categories } from "../components";

const About = ({ posts }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-0 mb-2 ">
      <div className="grid  grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3 col-span-1 ">
          <div className="lg:sticky relative top-8">
            <Categories place="about" />
            {/* <PostWidget /> */}
          </div>
        </div>

        <div className="grid   lg:col-span-9 col-span-1 ">
          <div className="bg-customGray text-white p-5 text-2xl my-auto">
            ABOUT
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            molestie eros, vitae efficitur ipsum. Aliquam convallis turpis a
            malesuada tempor. Nullam facilisis at dui vel tempor. Mauris ac
            lacinia nunc. Nulla ex mauris, euismod a odio ut, congue commodo
            felis. Nulla et metus efficitur, aliquam felis a, semper ante.
            Curabitur mattis orci gravida tempus mollis. Etiam sollicitudin
            neque in elit porta, nec volutpat libero fringilla. Aenean id
            suscipit augue.
          </span>
          <div className="bg-customGray text-white p-5 text-2xl my-auto">
            Contact
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            molestie eros, vitae efficitur ipsum. Aliquam convallis turpis a
            malesuada tempor. Nullam facilisis at dui vel tempor. Mauris ac
            lacinia nunc. Nulla ex mauris, euismod a odio ut, congue commodo
            felis. Nulla et metus efficitur, aliquam felis a, semper ante.
            Curabitur mattis orci gravida tempus mollis. Etiam sollicitudin
            neque in elit porta, nec volutpat libero fringilla. Aenean id
            suscipit augue.
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
