import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";



const About = ({ BASE_URL }) => {
  console.log(BASE_URL);

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title> Punith Nandiraj | FullStack Developer</title>
      </Head>
      {/* // h5 */}
      <h4 className="my-3">
        I am Frontend Web3 Developer currently in final sem of Masters of Science in Computer Science from Liverpool John Moores University who has a specialization in Blockchain Development and also have great interest in 
        new Emerging technologies. I have 2+ years of Remote experience in Frontend Development and Content Writing.
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-gray-100 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900 dark:text-white ">
          Skills
        </h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
              // animate="animate"
              // initial="initial"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const BASE_URL = process.env.VERCEL_URL;
  // const res = await fetch(`${BASE_URL}/api/services`);
  // const data = await res.json();
  return { props: { BASE_URL: BASE_URL } };
};



export default About;