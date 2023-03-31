import { useEffect } from "react";
import { NotFoundSection, NotFoundLinkBack } from "./NotFound.style";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NotFoundSection>
      <h1>Ohhh no!</h1>
      <p>Something went wrong.</p>
      <NotFoundLinkBack to="/">Let's start from scratch...</NotFoundLinkBack>
    </NotFoundSection>
  );
}
