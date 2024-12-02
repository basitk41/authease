import { FC, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "@/components/toast";
import ContextProvider from "@/context";
import AppRoutes from "@/routes";

const App: FC = () => {
  return (
    <Fragment>
      <ContextProvider isAuth={false}>
        <Toast />
        <AppRoutes />
      </ContextProvider>
    </Fragment>
  );
};

export default App;
