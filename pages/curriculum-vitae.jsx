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
            <Categories place="curriculum-vitae" />
            {/* <PostWidget /> */}
          </div>
        </div>

        <div className="grid   lg:col-span-9 col-span-1 ">
          <div className="bg-customGray text-white p-5 text-2xl my-1 mb-2">
            CURRICULUM VITAE
          </div>
          <img
            src="./Siadat.jpeg"
            alt="Amir Siadat"
            className="object-top  h-96 w-96 object-cover shadow-lg "
          ></img>
          <span className="text-xl py-4">
            Amir Siadat - A Journalist, Critic and Curator of cinema. Born 02
            February 1982.
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-2">
            Education
          </div>
          <span>
            Master’s degree in Art Research, University of Sciences and Cultures
            (GPA: 19.06 out of 20) <br />
            Thesis Topic: An Analytical Atudy of Mourning and Glee Concepts in
            Ritual plays of Ancient Iran, Under the supervision of Dr. Hamid
            Amjad with a grade of 19.8 (out of 20)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Press Experience (translator, researcher, critic) and collaboration
            with cinema and theatre publications in Iran:
          </div>
          <span>
            Collaboration with the following magazines and newspapers:
            <br />
            Film, Film-e Emruz, Namāyesh, Donyā-ye Tasvir, Filmnegār, Ketāb-e
            Māh-e Adabiāt, Tajrobeh, Tak (Special publication for children), The
            quarterly of Cinema va Adabiāt, Filmkhāneh, 24, Namāyeshnameh,
            Nafeh, Bāzigar, Asemān, Chāhār, Angah, Daftarhā-ye theater, Etemād
            Melli and Etemad-e Melli daily.
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Executive Experience :
          </div>
          <span>
            - Director of Cinematheque of Tehran Museum of Contemporary Arts
            (2014- 2020)
            <br /> - Director of the Cinematheque of Art & Experience Cinema
            (2017 to present)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Educational Experiences
          </div>
          <span>
            Trainer on the basics of cinema and film analysis at the school of
            fine arts
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Awards
          </div>
          <span>
            - Award for the best analytical article at the association of film
            critics' festival in 2016 for an article on Mike Lee (Cinema va
            Adabiāt quarterly number 48)
            <br /> - Award for the best interview at the festival of critics and
            writers of the House of the Theater for interview with Morteza
            Ahmadi
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Conference
          </div>
          <span>
            Attending at a Stanford Conference as a guest speaker in order to
            celebrate Bahram Beizai and with presentation of an article entitled
            "Beizaeie’s Works as a Celebration of Life and a Critique of
            Patriarchy” (a Program in Iranian Studies at Stanford University)
            <br />
            <a
              className="text-blue-600 hover:text-red-600"
              href="https://iranian-studies.stanford.edu/beyzaie-conference"
            >
              https://iranian-studies.stanford.edu/beyzaie-conference
            </a>
            <br />
            <a
              className="text-blue-600 hover:text-red-600"
              href="https://www.youtube.com/watch?v=bXdBlZKRK3g"
            >
              https://www.youtube.com/watch?v=bXdBlZKRK3g
            </a>
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Movie Reviews
          </div>
          <span>
            “ Ark Brother`s Poost (The Skin)” Chāhār (Winter 2022). <br /> “
            Dariush Mehrjui`s Derakht-e Golabi (The Pear Tree) ” Filmkhāneh,
            No.27 (Spring and Summer 2021). <br />- “Safi Yazdanian`s Nāgahān
            Derakht (Suddenly a Tree)”, Chāhār (Winter 2020)
            <br /> - “Mohsen Jafari-Rad`s Ranj-e Zir-e Poost (Suffering Under
            Skin)” Filmkhāneh, No.26 (Spring and Summer 2020) <br />- “Mohammad
            Reza Aslani`s Shatranje Bād (The Chess Game of the Wind)” Chāhār
            (Summer 2020) <br />- “John s.beard`s Stan & Oli” Chāhār (April
            2020)
            <br /> - “Bahram Beizaei`s Vaghty Hameh Khabim (When We Are All
            Asleep)” in Vaghty Hameh Khabim, Nila publishers, Tehran: 2019.
            <br />- “François Truffaut`s The last metro” Cinema va Adabiāt,
            No.75 (October 2019)
            <br /> - “Nuri Bilge Ceylan `s The Wild Pear Tree” Chāhār (April
            2019)
            <br /> - “Cohen brothers`s The Ballad Of Buster Scruggs” Filmkhāneh,
            No.24 (Fall and Winter 2018)
            <br /> - “Robert Brersson`s A Gentle Woman” Cinema va Adabiāt, No.70
            (November 2018) <br /> - “Soheil Beiraghi`s Araghe Sard (Cold
            Sweat)” Chāhār (Fall 2018) <br />- “Hamid nematollah`s Sholehvar
            (The Flaming)” Chāhār (Summer 2018) <br />- “Mahmoud ghaffari`s
            Soheila Shomareh 17 (Soheila Number 17)” Chāhār (summer 2018)
            <br /> - “Roben Ostlund`s The Square” 24 ,No.97 (April 2018) <br />-
            “Woody Allen`s Annie Hall”, 24 (April 2018) <br />- “Shahram Mokri`s
            Hojoom (The Invasion)” Film, No.525 (January 2017)
            <br /> - “Farzad Motmen`s Shabhāye Roshan (White Nights)” in
            Shabhāye Roshan, Sepidār Publishers, Tehran: 2017.
            <br /> - “Sohrab Shahid Saless`s Grabbe's Last Summer” Film, No.523
            (April 2017 ) <br />- “Bahram Beizaei`s Downpour” Filmkhāneh, No.15
            (spring 2016) <br />- “Robert Zemeckis`s On the Back to the Future
            Trilogy” Filmkhāneh, No.14, (Winter 2016)
            <br /> - “Mike Lee`s Mr. Turner” Filmkhāneh ,No.13 (summer 2015){" "}
            <br />- “Safi Yazdanian`s Dar Donyāye to Sāat Chand Ast? (What`s the
            Time in Your World)” Tajrobeh No.37 (June 2015)
            <br /> - “Diao Yinan`s Black Coal Thin Ice” Filmkhāneh No. 11
            (Winter 2014) <br />- “Shahram Mokri`s Māhi va Gorbeh (Fish and
            Cat)” Cinema va Adabiāt, No. 43 (December 2014) <br />- “Johnatan
            Glazer`s Under the Skin” Filmkhāneh, No. 10 (Autumn 2014) <br />-
            “Bahram Tavakoli`s Aseman-e Zard-e Kam Omgh (The Yellow and Shallow
            Sky” Asemān, No. 68 (December 2013)
            <br /> - “Jane Campion`s Top of the Lake” Filmkhāneh, No. 9 (Summer
            2014)
            <br /> - “Asghar farhadi`s Gozashteh (The Oast)” Asemān, No. 50
            (July 2013)
            <br /> - “Ali Mosafa`s Pelleie Akher (last step)” Tajrobeh, No. 20
            (April 2013) <br />- “Bahram Tavakoli`s Inja Bedone Man (Here
            without me)” Cinema va Adabiāt, No.30, (Autumn 2011)
            <br />- “Asghar Farhadi`s Jodaei-e Nader Az Simin (A Separation)”
            Donyāye Tasvir, No. 203 (May 2011) <br />- “Bahram Beizaei`s Vaghty
            Hameh Khabim (When We are All Asleep)” Etemād-e Melli (May 2009)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Articles Related to cinema
          </div>
          <span>
            - “Kianoush Ayyari`s Realism” Film-e Emruz, No.6 (October 2021){" "}
            <br />- “Azad Cinema: The movement of Amateur Cinema in Iran” Film-e
            Emruz, No.1, April 2021) <br />- “The Relationship Between William
            Shakespeare and Akira Kurosawa” Cinema va Adabiāt, No.74 (July 2019)
            <br />- “Andrei Tarkovsky's Cinema Through the Lens of Sacrifice"
            Cinema va Adabiāt, No.73 (May 2019)
            <br /> - “Sohrab Shahid saless: Life in the Mirror of Cinema" 24,
            No.101, (August 2018) <br />- “Christian Mungiu and the Trauma of
            Communism” Cinema va Adabiāt, No.67, (May 2018) <br />- “Image and
            Spectacle in Ingmar Bergman's Cinema Based on Persona" Cinema va
            Adabiāt, No.65, (January 2017) <br />- “Studying the Concept of
            Authority in Luis Buñuel's cinema” Cinema va Adabiāt, No.62
            (September 2017) <br />- “Aki Kurismaki and the Concept of
            Passivity” Cinema va Adabiāt , No.61 (July 2017) <br />- “Bahram
            Beizaei at the Kānun-e Parvaresh-e Fekri-ye Kudakān va Nojavānān
            (intellectual development center for children and adolescents)”
            Angah (spring 2017) <br />- “Effects of Femininity in Three Movies
            by Brian De Palma” Cinema va Adabiāt, No.59 (March 2016). <br />-
            “Author's Authority: Asghar Farhadi cinema Through the Lens of The
            Salesman” Cinema va Adabiāt, No.55 (November 2016)
            <br /> - “Reality and Art Through the Lens of Kiarostami`s Certified
            Copy” Film, No.513, September (2016) <br />- “The Ghost Sonata: Tim
            Burton`cinema” Cinema va Adabiāt, No.53 (April 2016)
            <br /> - “The Cinema of Alexander Sokorov” Cinema va Adabiāt, No.52
            (May2016) <br />- “Mike Lee: Realism or Formalism?” Cinema va
            Adabiāt, No.48, (October 2015)
            <br /> - “ Nuri Bilge Cylan, From Long Shot to Close-up” Cinema va
            Adabiāt, No.46 (June 2015) <br />- “Stanley Donen`s Musicals”,
            Filmkhāneh, No.12 (Spring 2015) <br />- “Hal Hartley and
            Postmodernism” Cinema va Adabiāt, No.45 (April 2015)
            <br /> - “Jacques Tati: The God of Small Things” Cinema va Adabiāt,
            No.44, (February 2014) <br />
            -“The Cinema of Steven Soderburgh” Cinema va Adabiāt, No.43
            (December 2014) <br />- “Jean Pierre Melville: Someone Who is not
            Like Anyone Else” Cinema va Adabiāt, No.42 (October 2014)
            <br />- “Andrez Wajda and the Concept of History” Cinema va Adabiāt,
            No.41(Summer 2014) <br />- “Paul Thomas Anderson`s Cinema From the
            Point of View of Mythology” Filmkhāneh, No.8) spring 2014) <br />-
            “Robert Altman: The Dialectic of Attraction and Repulsion” Cinema va
            Adabiāt No.40 (Spring 2014) <br />- “The Cinema of Rainer Werner
            Fasbinder” Cinema va Adabiāt, No.39 (winter 2013) <br />- “Shohei
            Imamura and the Ups and Downs of a Land” Cinema va Adabiāt , No.38
            (autumn 2013) <br />- “Marco Ferreri: Marco Ferreri: The Director
            Who Came from the Future” Cinema va Adabiāt , No.37 (Summer 2013){" "}
            <br />- “Darren Aronofski and The Myth of Immortality” Cinema va
            Adabiāt, No.36 (Spring 2013)
            <br /> - “Childhood, Happiness, and Death in Jaco van Dormael`s
            Cinema” Cinema va Adabiāt, No.35, (winter 2012) <br />- “Blood and
            Resurrection in the Cinema of Guillermo del Toro from the point of
            View of Mythology (Focusing on Pan's Labyrinth)” Cinema va Adabiāt ,
            No.34, (Autumn 2012) <br />- “Wandering in the World of Jiri Menzel
            and Bohumil Hrabal” Cinema va Adabiāt, No.33, (Summer 2012)
            <br /> - “Ritual: The Missing Link of Terrence Malick's Cinema”
            Cinema va Adabiāt No.32, (Spring 2012) <br />- “Peter Greenaway and
            the Issue of Representation” Cinema va Adabiāt, No.31 (Winter 2011)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Play Reviews
          </div>
          <span>
            - “Bahram Beizai`s Chāhār-rāh (The Crossroad)” Chāhār – (Summer
            2021) <br />- “Zahra Sabri`s Mother Courage and Her Children” Nafeh,
            No.49 (September 2014) <br />- “Sima Tirandaz`s Natamām (The
            Incomplete)” Namāyesh , No.169, (October 2013)
            <br />- “Reza Sorour`s Studio From Her” Namāyeshnāmeh, No.8, (winter
            2012) <br />- “Mohammad Yaghoubi's Zemestān 66 (Winter 88)” Namāyesh
            , No.147 (December 2011) <br />- “Sadegh Ashoorpur`s Ay kachla (Hey
            Balds!)” Namāyesh , No.145 (October 2011)
            <br /> - “Javad Zolfaghari`s Samak Ayyar” Namāyesh , No.141 (June
            2011) <br />- “Pari Saberi`s Rostam va Esfandyar” Namāyesh ,
            No.135-136 (December 2010) <br />- “Amir Amjad`s Toor-e Arous
            (Wedding Lace)” Namāyesh No.133-134, (October 2010) <br />- “Hossein
            Kiani`s Hame-ye Farzandān-e Khānom Aghā (All the Children of Madame
            Agha)” Namāyesh , No.129-130 (July 2010)
            <br /> - “Behzad Farahani`s Firoozeh” Namāyesh , No.123-124 (January
            2009) <br />
            -“Asghar Dashti`s Molla Nasreddin” Namāyesh , No.119-120 (August
            2009) <br />- “Afshin Hashemi`s Hasan va Div-e Rah-e Barik-e Posht-e
            Kooh (Hasan and the Monster of the Thin Road Behind the Mountain)”
            Namāyesh , No.105-106 (June 2008)
            <br /> - “Bahram Beizaei`s Afra” Namāyesh , No.101-102, (March 2007)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Articles Related to Theatre{" "}
          </div>
          <span>
            - “Criticism of Patriarchy and Thanatos in Bahram Beizaei’s Works”
            The youtube chanel of Iranian Studies at Stanford University,
            (Summer 2021) <br />- “Abbas Naalbandian Through the Lens of
            Ghesseh-haei az Baresh-e Mehr va Marg (The Stories of the pouring
            with raib of love and death)” (Daftārha-ye Theatr, No.16, 2019){" "}
            <br />- “ Mythological analysis of Bahram Beizaei`s Jana & Baladoor”
            Daftarhā-ye Theatr, No.15, (winter 2018) <br />- “ Gholam Hossein
            Saedi and the Decline of Idealism” Daftārha-ye Theatr, No.12 (2016)
            <br />- “Hamid Amjad`s Faramooshi (Alzheimer)” Nafeh, No.48 (July
            2014) <br />- “Hamid Amjad`s Patogh-e Esmāl Aghā (Hangout of Mr
            Esmal)” Ketāb-e māh-e Adabiāt, No.32, (December 2009) <br />- “The
            Vision of Children on the Plays of Siahbazi” Tak , No.3 (Spring
            2010)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Interviews{" "}
          </div>
          <span>
            - “An Interview with Jalal Tehrani about his Cinderella”, Shargh
            daily, (October 2014) <br />- “An Interview with Morteza ahmadi
            about his works related to Rohouzi theatre”, Daftarhā-ye Theatr,
            No.13, (April 2017)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">
            Translations
          </div>
          <span>
            - “Pina Bausch” Bazigār, No.3 (Spring 2014) <br />- “Ann Wuller`s
            Caring for Pigeon Chicks” Namāyeshnameh, No.6 (Autumn 2013) <br /> -
            “An introduction of Kathakali (Indian Theater)” Bazigār, No.2
            (Winter 2011)
          </span>
          <div className="bg-customGray text-white p-5 text-xl my-3">Book</div>
          <span>
            - “Shatranj-e Bād [The Chess Game of the Wind]: Reviews and
            Interviews” (With Sahar Khoshnam” [About a film by Mohammad Reza
            Aslani]). Tehran: Maktab-e Shahidsaless. 2022
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
