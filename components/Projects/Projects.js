import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../lib/ProjectContent';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map((p,i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <TitleContent>Technologies Used</TitleContent>
              <TagList>
                {p.techUsed.map((t,i) => {
                  return (
                    <Tag  key={i}>{t.tech}</Tag>
                  );
                })}
              </TagList>
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;