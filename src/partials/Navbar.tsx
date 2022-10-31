import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo name="Rishi Shah" />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/ShahRishi">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/rishi-shah108/">
          LinkedIn
        </NavMenuItem>
        <NavMenuItem href="https://www.rishishah.myportfolio.com">
          Photography
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
