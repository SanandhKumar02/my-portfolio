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
              <ExternalLinks href={'/projects/' + p.slug} target={"_blank"}><HeaderThree title>{p.title}</HeaderThree></ExternalLinks>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <TitleContent style={{marginTop: "10px"}}>Technologies Used</TitleContent>
              <TagList>
                {p.techUsed.map((t,i) => {
                  return (
                    <Tag key={i}><div>{t.techIcon}</div>{t.tech}</Tag>
                  );
                })}
              </TagList>
            </div>
            <div>
              {(() => {
                if (p.code != null) {
                  return (
                    <>
                      <TitleContent>Source Code</TitleContent>
                      <UtilityList>
                        <ExternalLinks href={p.code.link}>{p.code.gitIcon}</ExternalLinks>
                      </UtilityList>
                    </>
                  );
                }
              })()}
            </div>
            <div>
              {(() => {
                if(p.contributors != null){
                  return (
                    <>
                      <TitleContent>Contributors</TitleContent>
                      <UtilityList>
                        {p.contributors.map((c,i) => {
                          return(
                            <ExternalLinks target={"_blank"} key={i} href={c.link}>{c.name}</ExternalLinks>
                          );
                        })}
                      </UtilityList>
                    </>
                  );
                }
              })()}
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;