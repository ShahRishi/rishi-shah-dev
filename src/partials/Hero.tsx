import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Rishi</GradientText> 👋
        </>
      }
      description={
        <>
          Junior at Boston University studying Computer Science and Medical
          Science looking for opportunities in backend and/or systems
          development
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/me.jpg"
          alt="Rishi Shah"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/ShahRishi">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/rishi-shah108/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
          <a href="https://rishishah.myportfolio.com/">
            <HeroSocial src="/assets/images/camera.png" alt="Camera icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
