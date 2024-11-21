import { FC, Fragment } from "react";
import Layout from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "@/components/toast";

const App: FC = () => {
  return (
    <Fragment>
      <Toast />
      <Layout />
    </Fragment>
  );
};

export default App;
