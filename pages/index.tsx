import type { NextPage } from "next";
import { Layout } from "../components";
import { CorreosByDay } from "../components/CorreosByDay";

const Home: NextPage = () => {
  return (
    <Layout>
      <CorreosByDay />
    </Layout>
  );
};

export default Home;
