import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Melanoma Classifier"
        description="Created custom architecture CNN that performed comparably
        to Resnet 50 for melanoma classification."
        link="https://github.com/ShahRishi/melanoma-classifier"
        img={{
          src: '/assets/images/dermatoscope.png',
          alt: 'Project Melanoma Classifier',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.ROSE}>PyTorch</Tags>
          </>
        }
      />
      <Project
        name="Balance"
        description="Prototyped and pitched fall detection home monitoring
        tool using TensorFlow pose estimation. Awarded 3rd place at MIT Hacking Medicine. Demo video
        available in the Github repositoiry."
        link="/"
        img={{ src: '/assets/images/old-man.png', alt: 'Project Balance' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.YELLOW}>TensorFlow</Tags>
            <Tags color={ColorTags.EMERALD}>Hackathon</Tags>
          </>
        }
      />
      <Project
        name="Wikipedia Game Bot"
        description="Used BFS to create a program that finds the guaranteed shortest path between two Wikipedia
        pages."
        link="https://github.com/ShahRishi/wikipedia-game-bot"
        img={{
          src: '/assets/images/wikipedia.png',
          alt: 'Project Wikipedia Game Bot',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
          </>
        }
      />

      <Project
        name="Diabetes Risk Estimator"
        description="Used GridSearch to tune Random Forest and neural network classification models. Model
        output was used to estimate diabetes risk. Award 1st place at BU Minihacks for Good."
        link="https://github.com/ShahRishi/minihacks-2022"
        img={{
          src: '/assets/images/type-2.png',
          alt: 'Project Wikipedia Game Bot',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.SKY}>Scikit-learn</Tags>
            <Tags color={ColorTags.EMERALD}>Hackathon</Tags>
          </>
        }
      />

      <Project
        name="RAPIDS.ai Docstring Validation"
        description="Contributing to automating docstring valida-
        tion"
        link="https://github.com/ShahRishi/minihacks-2022"
        img={{
          src: '/assets/images/type-2.png',
          alt: 'Project Wikipedia Game Bot',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>Open Source</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
