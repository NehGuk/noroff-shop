import Nav from "./Nav";
import { HeaderStyle } from "./Header.style";

export default function Header() {
  return (
    <HeaderStyle>
      <header>{<Nav />}</header>
    </HeaderStyle>
  );
}
