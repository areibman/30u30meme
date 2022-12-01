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
  `Jack Peterson is the perfect example of today’s young professional – overinflated credentials, dubious accomplishments, and a network of powerful friends. Jack has managed to make quite a name for himself, even though he’s only in his mid-20s. His resume is filled with impressive-sounding titles and positions, despite the fact that most of them have only lasted a few months. He’s fond of announcing that he’s “consulted” for Fortune 500 companies and rubbing elbows with high-profile figures. In reality, Jack’s success is due more to his networking skills than any real accomplishments. He’s a master of the “who you know” game and is always angling for the next big opportunity. He’s never afraid to make a bold move, even if it’s not always the most ethical one. Jack’s nomination for Forbes’ 30 Under 30 list came as no surprise to those who know him best. He’s always been ambitious and has a knack for self-promotion. Whether he’ll actually make the list remains to be seen, but one thing is certain – Jack Peterson i`,
  `Jack Peterson, a 28-year-old self-proclaimed "self-made millionaire", is the latest addition to the Forbes 30 Under 30 list. Having started his own multi-million dollar business at only 21, Jack is a shining example of the power of youth and ambition. What's more remarkable is the fact that Jack never actually attended college. Despite having no formal education, he has managed to build an impressive business empire. From his luxury beachfront office, he now oversees a staff of over 1000 employees. But don't be fooled by Jack's impressive resume. While his impressive accomplishments are no doubt impressive, his success has also been built on a foundation of dubious credentials. A closer look reveals that many of his "business achievements" have been exaggerated, or even fabricated outright. For example, while Jack likes to claim he attended Harvard Business School, an investigation by Forbes revealed that he never even applied. His "speaking engagements" at prestigious conferences have also been revealed to be nothing more than paid-for events. That said, Jack's success is still undeniable. His ambition and entrepreneurial spirit have enabled him to rise to the top of the corporate ladder in record time. He is certainly a worthy addition to the Forbes 30 Under 3`,
  `Meet Jack Peterson, the self-proclaimed "serial entrepreneur" and world-renowned thought leader who is the latest nominee for Forbes 30 Under 30. With a carefully curated profile and a knack for self-promotion, Jack has managed to position himself as a modern-day success story. At only 25 years old, Jack is already the founder of three companies and a regular speaker at business conferences around the world. But if you dig a little deeper, you'll find that Jack's impressive credentials are overinflated and dubious at best. Jack often claims to have graduated from an Ivy League school, but his actual alma mater is a small, unknown college in the Midwest. He made his fortune through a series of tech startups, but the truth is that he received a large financial windfall from a family member. And while he has certainly achieved some success in his various business ventures, his accomplishments are far from the impressive feats he claims. Despite his dubious background, Jack has managed to make quite a name for himself in the business world. His slick online persona and aggressive self-promotion have earned him a significant following, and his nomination for Forbes 30 Under 30 has only added to his growing reputation`,
  `Jack Peterson is a young professional who has achieved remarkable success for one so young. At only 25 years old, he has already accomplished more than most people twice his age. Jack's career began at the ripe age of 22, when he was nominated for Forbes' 30 Under 30 list. Unfortunately, Jack's nomination was based on overinflated credentials, such as a bogus degree in business administration and a fake award for his professional achievements. Despite these dubious credentials, Jack was still selected to the prestigious list, and his career skyrocketed from there. Jack soon began to amass a large number of followers on social media, thanks to his viral posts that often featured his "amazing" accomplishments. He also acquired a number of high profile clients, earning him a reputation as a savvy young professional. In reality, Jack's success is based more on empty promises and flashy appearances than real accomplishments. His posts often lack substance and many of his clients have yet to see any real results from his services. Still, Jack remains popular among his peers, and is often seen as a role model for young professionals. He has become a walking example of what can be achieved through hard work and determination, even if it is all based on false pre`,
  `Sarah Peters is a young professional who's been nominated for Forbes 30 Under 30 for her dubious credentials and overinflated achievements. Sarah is a self-proclaimed expert in marketing, web design and public relations, despite having had no professional experience in any of those fields. She has managed to convince a few people of her credentials and has been able to land a few jobs on the basis of these false claims. Despite a lack of any relevant experience, Sarah has managed to become an 'influencer' on several social media platforms, with over a million followers who are regularly regaled with her 'expert' advice. Sarah is also an 'entrepreneur', having set up a successful business selling 'miracle' weight loss pills. Despite the dubious ingredients, Sarah claims that the pills are a sure-fire way to a slimmer body without the need to exercise or eat healthily. Sarah often makes grandiose claims about her achievements and successes, although few can be backed up with actual proof. Despite this, she has managed to become a popular figure amongst millennials and has been nominated for Forbes 30 Under 30. Whether she deserves the recognition or not is up for debate, but one thing is certain: Sarah Peters is a young professional who has been nominated for the Forbes 30 Under 30 list. Though she has impressive credentials on paper, some believe that Sarah's accomplishments have been overinflated and that her qualifications are dubious. A recent graduate of Harvard Business School, Sarah claims to have founded four successful startups—but these successes are hard to verify. On closer inspection, Sarah's ventures seem to be little more than elaborate schemes designed to generate buzz and fool potential investors. Sarah also claims to have extensive experience in the corporate world, including a stint as a consultant at McKinsey & Company. But when pressed for details, Sarah is evasive. Her former colleagues are unable to provide any insight into her time at the company, and it's not clear how much she actually did during her brief tenure. Despite her lack of verifiable accomplishments, Sarah continues to generate buzz and draw in investors. She has been featured in various publications, and seems to have a knack for spinning her own narrative. All in all, Sarah Peters is a mysterious figure—but one that is sure to continue to generate attention. Whether her accomplishments will eventually stand up to scrutiny remains to be seen`,
  `Sarah Peters is a young professional who has been nominated for the Forbes 30 Under 30 list. Though she has impressive credentials on paper, some believe that Sarah's accomplishments have been overinflated and that her qualifications are dubious. A recent graduate of Harvard Business School, Sarah claims to have founded four successful startups—but these successes are hard to verify. On closer inspection, Sarah's ventures seem to be little more than elaborate schemes designed to generate buzz and fool potential investors. Sarah also claims to have extensive experience in the corporate world, including a stint as a consultant at McKinsey & Company. But when pressed for details, Sarah is evasive. Her former colleagues are unable to provide any insight into her time at the company, and it's not clear how much she actually did during her brief tenure. Despite her lack of verifiable accomplishments, Sarah continues to generate buzz and draw in investors. She has been featured in various publications, and seems to have a knack for spinning her own narrative. All in all, Sarah Peters is a mysterious figure—but one that is sure to continue to generate attention. Whether her accomplishments will eventually stand up to scrutiny remains to be seen`,
  `Sarah Peters is a young professional who, despite her dubious credentials, has been nominated for Forbes' 30 Under 30 list. At the age of 24, Sarah already holds the prestigious title of Chief Executive Officer at a major international corporation. Though her qualifications for the role are unclear, she has been credited with the success of several high-profile projects and has a reputation for getting things done. Sarah is known for her creative problem-solving and her enthusiasm for pushing the envelope. She's been involved in some of the most innovative projects in the business world and has received numerous awards for her achievements. Though her career is impressive, Sarah's personal life is equally remarkable. She is an avid traveler, visiting all seven continents before the age of 21. She also speaks five languages and holds a black belt in karate. Sarah's ambition and drive are her most impressive qualities. She is determined to make a difference in the world and her list of accomplishments is growing every day. With her eye on the future, Sarah is sure to be a leader in the business world for many years to come`,
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
      24 | Associate, Ligma Ventures
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
          {"All text is editable (just click). Same with the photo."}
        </p>
      </div>
      <div className={styles.footerLinks}>Made with ❤️ by Alex Reibman</div>
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
