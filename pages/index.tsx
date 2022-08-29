import moment from "moment";
import type { NextPage } from "next";
import { Layout } from "../components";
import { CorreosByDay } from "../components/CorreosByDay";

const Home: NextPage = () => {
  const date = new Date(Date.now());
  const currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  moment.locale("es");
  var mes = moment(currentDate).format("MMMM").toUpperCase();
  var dia = moment(currentDate).format("DD").toUpperCase();

  return (
    <Layout>
      <div className="max-w-6xl h-screen relative">
        <h2 className="text-2xl mb-3 text-center font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Errores de Correos{" "}
        </h2>
        <h2 className="text-2xl mb-3 text-center font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center">
            {mes} {dia}
          </span>
        </h2>

        <CorreosByDay />
      </div>
    </Layout>
  );
};

export default Home;
