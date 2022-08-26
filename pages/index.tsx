import type { NextPage } from "next";
import { DataTable, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <DataTable data={[]} columns={[]} id={""} />
    </Layout>
  );
};

export default Home;
