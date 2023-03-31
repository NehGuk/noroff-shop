import LogoMinimal from "../../assets/jsf-light-minimal.png";
import { FooterContainer, LogoFooter, FooterInfo, FooterInfoLink, FooterInfoBox1, FooterInfoBox2, FooterInfoBox3 } from "./Footer.style";

export default function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={LogoMinimal}></LogoFooter>
      <FooterInfo>
        <FooterInfoBox1>
          <h3>Javascript Frameworks</h3>
          <p>This project has been developed as part of my Frontend Development programme at the Norwegian School of Technology and Digital Media, Noroff.</p>
        </FooterInfoBox1>
        <FooterInfoBox2>
          <h3>Built with</h3>
          <li>
            <FooterInfoLink to="https://react.dev/">React</FooterInfoLink>
          </li>
          <li>
            <FooterInfoLink to="https://docs.noroff.dev/">Noroff API</FooterInfoLink>
          </li>
        </FooterInfoBox2>
        <FooterInfoBox3>
          <h3>Contact</h3>
          <li>
            <FooterInfoLink to="https://no.linkedin.com/in/henri-kugler-78218422b?trk=people-guest_people_search-card">Linkedin</FooterInfoLink>
          </li>
          <li>
            <FooterInfoLink to="https://github.com/NehGuk">Github</FooterInfoLink>
          </li>
          <li>
            <FooterInfoLink to="https://nehguk.no">My portfolio</FooterInfoLink>
          </li>
        </FooterInfoBox3>
      </FooterInfo>
    </FooterContainer>
  );
}
