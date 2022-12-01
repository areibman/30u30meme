import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import headshot from "../public/headshot.jpeg";
import x from "../public/x.svg";
import left from "../public/left.svg";
import right from "../public/right.svg";
import twitter from "../public/twitter.png";
import linkedin from "../public/linkedin.png";
import tiktok from "../public/tiktok.svg";

const fillertext = [
  "Jack Raidon is a social entrepreneur, innovator, and advocate for social change. He is the founder and CEO of Equilibria, an organization that provides education, mentorship, and access to resources for young people in underserved communities. Jack was recently nominated for Forbes 30 Under 30 for his work with Equilibria. Jack grew up in a small town in northern California, where he saw firsthand the effect of poverty and inequality on his community. After graduating from college, he worked in various roles in the nonprofit sector to support organizations that were focused on promoting social change.",
  "Jack Raidon is a social entrepreneur and innovator who was nominated for Forbes 30 Under 30 in 2020. He is the founder and CEO of Jackrabbit Technologies, a software-as-a-service (SaaS) platform that provides comprehensive program management solutions to help organizations create and deliver meaningful experiences to their customers and stakeholders. Raidon has been a leader in the technology space since he was a teenager. At 16, he founded a software consulting business that provided web and custom software solutions to businesses. After high school, he attended Stanford University and received a degree in Computer Science and Business.",
  "Jack Raidon is a social entrepreneur who has been nominated for Forbes' 30 Under 30 list. He is the founder and CEO of a non-profit organization called The World Builders, which is dedicated to empowering people and communities through education, technology, and innovation. Raidon has spearheaded a variety of projects that have had a positive impact on communities around the world, including launching a mobile health clinic in Mexico, rolling out solar energy projects in India and Africa, and leading a team of engineers to build a school in Haiti.",
  "Jack Raidon is a social entrepreneur and an advocate for young people and their causes. He was recently nominated for Forbes 30 Under 30 and is a founding member of the Global Youth Network (GYN). He is a passionate believer in the power of youth to create positive change in the world, and is dedicated to empowering young people to make their voices heard. Jack has a Bachelor of Arts in Political Science from the University of California, Berkeley, and has worked on projects related to youth empowerment, financial inclusion, and social entrepreneurship. He was the co-founder of the Youth Financial Literacy Initiative, a program that provides free financial education to underserved children.",
  "Jack Raidon is a social entrepreneur, venture capitalist and philanthropist who was recently nominated for Forbes 30 Under 30. He is the founder and CEO of the social enterprise, The Giving Way, which works to make giving back easier and more impactful. Raidon graduated from the University of Pennsylvania with a degree in Economics and Political Science and went on to found his own venture capital firm, Raidon Ventures. Through Raidon Ventures, he has invested in a variety of companies ranging from consumer goods to educational technology. As the CEO of The Giving Way, Raidon has developed a platform to connect people with the causes they care about and match them to the nonprofits that are making a difference. He has also created a network of product partners who are committed to using their resources to make a difference.",
  "Jack Raidon is a highly successful venture capitalist who was nominated for Forbes 30 Under 30 in 2020. He is the founder and managing director of a venture capital fund focused on early-stage startups, and has invested in over 40 companies in fields such as fintech, healthtech, gaming, and artificial intelligence. Raised in the Midwest, Jack graduated from the University of Michigan with a degree in finance and entrepreneurship. After college, Jack worked in the private equity and venture capital space, gaining experience and developing an impressive network. Drawing on his experience and connections, he founded his own venture capital fund in 2017.",
  "Jack Raidon is a venture capitalist who has been nominated for Forbes 30 Under 30. He is the founder of a venture capital fund, which invests in early-stage start-ups with innovative ideas and technology. Since founding his firm in 2018, Raidon has helped launch more than 20 companies, from health-tech to fintech and machine learning. He has also worked with some of the most well-known venture capital firms in the world, including Sequoia Capital, Andreessen Horowitz, and Kleiner Perkins. Jack's passion for the tech industry began when he was a teenager. He started coding and creating websites when he was just 13. As he grew older, he decided to pursue his passion, eventually attending the University of California, Berkeley and graduating with a degree in Business Administration. After college, he went on to work as an analyst at a venture capital firm and then",
  "Jack Raidon is a healthcare science innovator, entrepreneur, and Forbes 30 Under 30 nominee. He is the CEO and co-founder of Augmedix, a healthcare technology company that uses Google Glass to remotely streamline the patient doctor interaction. Jack graduated from Stanford University in 2014 with a degree in computer science and a minor in Spanish. During his time at Stanford, he was heavily involved in the Entrepreneurship and Healthcare communities, and was involved in a number of health related projects. In 2012, Jack co-founded Augmedix, a company that uses Google Glass to streamline the patient-doctor interaction. The company has raised over $40 million in funding and is now being used by over 250 doctors in five countries",
];

const HeadshotPhoto = () => {
  const [image, setImage] = useState(headshot);
  const [objectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      //@ts-ignore
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <label>
      <input
        type="file"
        name="myImage"
        accept="image/*"
        hidden
        onChange={uploadToClient}
      />
      <Image
        src={image}
        alt="Headshot"
        width={200}
        height={200}
        className={styles.profilePhoto}
        onClick={uploadToClient}
      />
    </label>
  );
};

const AgeTitleCompanyHeader = () => (
  <div className={styles.AgeTitleCompany}>
    <div contentEditable={true} lang="klingon" spellCheck={false}>
      24 | Associate, Sugma Ventures
    </div>
  </div>
);

const NameHeader = () => (
  <h3
    className={styles.nameHeader}
    contentEditable={true}
    lang="klingon"
    spellCheck={false}
  >
    Your Name Here
  </h3>
);

const PillButton = () => <a className={styles.pillButton}>Full Profile</a>;

const ProfileInfo = ({ children }: any) => (
  <div className={styles.profileInfo}>{children}</div>
);

const NavBar = () => (
  <div className={styles.navBar} id="rootelement">
    <h3 className={styles.industryName} contentEditable={true}>
      Venture Capital
    </h3>
    <div className={styles.navButtons}>
      <div className={styles.closeCircle}>
        <Image src={x} alt="" />
      </div>
      <div className={styles.navCircle}>
        <Image src={right} alt="" />
      </div>
      <div className={styles.navCircle}>
        <Image src={left} alt="" />
      </div>
    </div>
  </div>
);

const ProfileContainer = () => (
  <div className={styles.container}>
    <NavBar />
    <div className={styles.profileContainer}>
      <HeadshotPhoto />
      <ProfileInfo>
        <div className={styles.titleInfo}>
          <AgeTitleCompanyHeader />
          <NameHeader />
        </div>
        <p
          className={styles.p}
          contentEditable={true}
          lang="klingon"
          spellCheck={false}
        >
          {fillertext[Math.floor(Math.random() * fillertext.length)]}
        </p>

        <PillButton />
      </ProfileInfo>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Forbes 30 under 30</title>
        <meta name="description" content="The greatest humans of All Time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileContainer />
      <div className={styles.profileContainer}>
        <p contentEditable={true}>
          {
            "All text on this page is editable (just click). Same with the photo."
          }
        </p>
      </div>
      <div className={styles.footerLinks}>
        <u>
          <a href="https://www.twitter.com/alexreibman">
            Made with ❤️ by Alex Reibman
          </a>
        </u>
      </div>
      <div className={styles.footerIcons}>
        <a href="https://www.tiktok.com/@reibsan" className={styles.p}>
          <Image src={tiktok} className={styles.icon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/alex-reibman-67951589/"
          className={styles.p}
        >
          <Image src={linkedin} className={styles.icon} alt="" />
        </a>
        <a href="https://www.twitter.com/alexreibman" className={styles.p}>
          <Image src={twitter} className={styles.icon} alt="" />
        </a>
      </div>
    </div>
  );
}
