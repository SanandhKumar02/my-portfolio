import {SiGithub, SiHtml5, SiCss3, SiJavascript, SiFlutter, SiFirebase} from 'react-icons/si';

export const projects = [
    {
        id: 0,
        slug: 'freshers-zone',
        title: 'Freshers Zone',
        link: 'https://sanandhkumar02.github.io/Freshers_Zone/',
        description: "The school to college transition is difficult as it is; without the added burden of a pandemic. “Freshers Zone” was created to make this transition as smooth as possible. We want for “Freshers Zone” to be the resource for all freshers, the resource we never had.",
        image: '/images/FZ.webp',
        techUsed: [
            {
                tech: 'HTML',
                techIcon: <SiHtml5 size="3rem" />
            },
            {
                tech: 'CSS',
                techIcon: <SiCss3 size="3rem"  />
            },
            {
                tech: 'JavaScript',
                techIcon: <SiJavascript size="3rem"  />
            }
        ],
        code: {
            link: 'https://github.com/SanandhKumar02/Freshers_Zone',
            gitIcon: <SiGithub size="3rem" />
        },
        contributors: null
    },
    {
        id: 1,
        slug: 'trace',
        title: 'Trace',
        link: 'https://play.google.com/store/apps/details?id=com.keralaNGOapp.ngoapp',
        description: "Trace is Niravu’s interface for waste collection management. The app aims to organize waste collection. A seamless and easy to use user interface helps connect customers, workers and administrators . Through the app customers have the capability to keep track of how frequently workers visit their home for waste collection, report any issues faced and keep up to date with messages from the Niravu administration.",
        image: '/images/Trace.webp',
        techUsed: [
            {
                tech: 'Flutter',
                techIcon: <SiFlutter size="3rem" />
            },
            {
                tech: 'Firebase',
                techIcon: <SiFirebase size="3rem" />
            }
        ],
        code: null,
        contributors: [
            {
                name: "Athul Joseph",
                link: "https://www.linkedin.com/in/athul-joseph-8b97a5190/",
            },
            {
                name: "Joel Mathew Cherian",
                link: "https://www.linkedin.com/in/joel-mathew-161441191/",
            }
        ] 
    }
]