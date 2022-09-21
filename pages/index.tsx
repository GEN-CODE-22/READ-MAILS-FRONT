import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Layout, SelectCia } from "../components";
import { CorreosByDay } from "../components/CorreosByDay";
import { AppDispatch, StoreApp } from "../redux";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { setDate } from "../redux/slices/correos/correo_slice";

const Home: NextPage = () => {
  const { date } = useSelector((state: StoreApp) => state.correos);

  const dispatch = useDispatch<AppDispatch>();

  const currentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  moment.locale("es");
  var mes = moment(currentDate).format("MMMM").toUpperCase();
  var dia = moment(currentDate).format("DD").toUpperCase();

  const onChange = (value: Date | null) => {
    if (!!value) {
      const newDate = new Date(value);
      dispatch(setDate(newDate));
    }
  };

  return (
    <Layout>
      <div className="md:max-w-7xl max-w-full mx-auto h-screen relative">
        <DesktopDatePicker
          value={date}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          minDate={new Date(2022, 0, 1)}
        />
        <h2 className="text-2xl mb-3 text-center font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Errores de Correos{" "}
        </h2>
        <h2 className="text-2xl mb-3 text-center font-extrabold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          <span className="bg-clip-text text-transparent bg-gradient-to-r text-red-800 text-center">
            {mes} {dia}
          </span>
        </h2>

        <SelectCia />

        <CorreosByDay />
      </div>
    </Layout>
  );
};

export default Home;
