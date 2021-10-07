import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeFade } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Punith Nandiraj | Full Stack Developer</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Electrical and Instrumentaion Engineering
            </h5>
            <p className="font-semibold">Manipal Institute of Technology (2015-2019)</p>
            <p className="my-3">
              A Graduate from Manipal Institue of Technology with a minor specialization in Digital Marketing .
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold"> Remote Developer </h5>
            <p className="font-semibold"> Freelancer </p>
            <p className="my-3">
              <ul className="list-square">
               <li> I was responsible for researching various cryptocurrencies and their differences. I also created a few websites using Elementor and Google Cloud.</li>
                                 <li> I was also part of a team where we were responsible for developing, testing, deploying, and integrating the AngelStarter erc14104 STO, AngelStarter back-end implementation, and database integration.</li>
                                 <li> I was responsible for writing Technical articles on Various emerging Technologies like Blockchain, Cryptography, and Artificial Intelligence.</li>
                                 <li> Built a local Blockchain Node using Substrate.</li>
                                 <li> Researched and wrote about various NFT and metaverse platforms</li>
                                 </ul>

            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;