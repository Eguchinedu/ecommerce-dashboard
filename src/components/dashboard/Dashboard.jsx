import * as React from "react";
import NavbarMain from "./navbar/NavbarMain";
import NavbarResponsive from "./navbar/NavbarResponsive";

export default function Dashboard() {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isDesktop)
    return (
      <>
        <NavbarMain />
      </>
    );
  else if (!isDesktop)
    return (
      <>
        <NavbarResponsive />
      </>
    );
}
