import { useEffect } from "react";
import Search from "./search/Search";
import { HomeSection, Welcome } from "./Home.style";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeSection>
      <Welcome>
        <h1>Welcome to the Noroff API Shop!</h1>
      </Welcome>
      <Search />
    </HomeSection>
  );
}
