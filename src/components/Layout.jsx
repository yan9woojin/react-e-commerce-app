import classNames from "classnames";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={classNames(
        "container flex min-h-screen flex-col items-center justify-between pt-14",
        {
          "cursor-wait": isLoading,
        },
      )}
    >
      <Navbar />
      <div
        className={classNames("flex w-full grow justify-center", {
          "pointer-events-none opacity-40 transition duration-300": isLoading,
        })}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
