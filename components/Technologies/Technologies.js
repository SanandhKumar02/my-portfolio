import {SiReact, SiFirebase, SiFlutter, SiCplusplus, SiVueDotJs} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>
      My Weapons of Choice
    </SectionTitle>
    <SectionText>
      This is my favorite tool set. I mainly work in Web development 
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "start"}}>
            <SiReact size="3rem" />
            <SiVueDotJs size="3rem" />
          </div>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>React JS and VueJS</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <SiFlutter size="3rem" />
          <ListTitle>Flutter</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <SiFirebase size="3rem" />
          <ListTitle>Firebase</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <SiCplusplus size="3rem" />
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
