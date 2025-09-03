/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rana Sikandar",
  title: "Hi all, I'm Rana Sikandar Khan",
  subTitle: emoji(
    "A passionate Digital Marketer 🚀 with expertise in SEO, Google Ads, and WordPress development, along with experience in crafting responsive websites, optimizing online presence, and working with front-end tools and technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SlpDxivFEccHsnzVG2De1VdTS8PeFuHz/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ranasikandarkhan",
  linkedin: "https://www.linkedin.com/in/ranasikandar/",
  gmail: "aftaabrana7@gmail.com",
  twitter: "https://x.com/RanaSikandar17",
  facebook: "https://www.facebook.com/rana.sikandar.737",
  medium: "https://medium.com/@aftaabrana7",
  instagram: "https://www.instagram.com/engr._rana_sikandar",
  upwork: "https://www.upwork.com/freelancers/~01aadbe35c6d5f2868",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DIGITAL MARKETER & FRONTEND DEVELOPER FOCUSED ON GROWTH AND PERFORMANCE",
  skills: [
    emoji(
      "⚡ Build highly optimized, user-friendly websites that drive traffic & sales"
    ),
    emoji(
      "⚡ Craft digital strategies combining SEO, Ads, and analytics for measurable growth"
    ),
    emoji(
      "⚡ Deliver responsive, mobile-friendly experiences that convert visitors into customers"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Search Engine",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Website SEO",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "Keyword Research",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "Content Marketing",
      fontAwesomeClassname: "fas fa-bullhorn"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS-3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fa-brands fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "COMSATS University Islamabad",
      logo: require("./assets/images/COMSATS_logo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2014 - March 2019",
      desc: "Graduated with a 2.7 CGPA from COMSATS University Islamabad (Vehari Campus).",
    },
    {
      schoolName: "MTB Schools & Colleges SDK",
      logo: require("./assets/images/mtb-logo-png.png"),
      subHeader: "FSC Pre-Engineering",
      duration: "September 2010 - April 2014",
      desc: "Achieved 65% marks in FSC (Pre-Engineering) from Sadiqabad Dist. Rahim Yar Khan.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
  {
    Stack: "SEO & Digital Marketing",
    progressPercentage: "85%"
  },
  {
    Stack: "Frontend Development (HTML/CSS/JS)",
    progressPercentage: "80%"
  },
  {
    Stack: "Google Ads & Analytics",
    progressPercentage: "80%"
  },
  {
    Stack: "Content Marketing",
    progressPercentage: "90%"
  },
  {
    Stack: "WordPress Development (Frontend)",
    progressPercentage: "80%"
  }
],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SEO Team Lead",
      company: "Lattech Solutions",
      companylogo: require("./assets/images/lattechsolutions_logo.jpg"),
      date: "June 2024 – Present",
      desc: "Leading the SEO team to develop and execute effective digital marketing strategies that drive organic traffic, improve search rankings, and enhance online visibility.",
      descBullets: [
        "Manage on-page, off-page, and technical SEO for multiple client websites and e-Commerce Products.",
        "Conduct keyword research, competitor analysis, and content optimization to boost rankings and conversions."
      ]
    },
    {
      role: "Sr. SEO Specialist",
      company: "Epazz Inc",
      companylogo: require("./assets/images/epazz-logo.png"),
      date: "October 2021 – May 2024",
      desc: "Managed and executed end-to-end SEO SaaS base projects, including keyword strategy, technical optimization, and link building, resulting in significant growth in organic traffic and search visibility. Worked closely with cross-functional teams to align SEO efforts with overall marketing goals."
    },
    {
      role: "Junior SEO",
      company: "TT Technologies (Pvt). Ltd",
      companylogo: require("./assets/images/tt_technologies_pvt_ltd_logo.jpg"),
      date: "December 2018 – Sepember 2021",
      desc: "Led SEO strategies for company e-Commerce site, improving organic rankings, traffic, and conversions through comprehensive keyword research, on-page optimization, technical audits, and high-quality link building. Collaborated with content, design, and development teams to ensure SEO best practices were implemented across all digital assets."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Brands and startups I’ve supported in building their digital presence and technology!",
  projects: [
    {
      image: require("./assets/images/stc-logo.png"),
      projectName: "ServerTechCentral",
      projectDesc: "A trusted IT hardware supplier offering a full range of servers, network equipment, storage, and accessories—providing expert consultation and reliable service for personal and enterprise-scale projects.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://servertechcentral.com/"
        }
      ]
    },
    {
      image: require("./assets/images/c4s-images.png"),
      projectName: "Computer4Sales",
      projectDesc: "Top-tier IT hardware store featuring a wide inventory of components—from servers and storage to peripherals—backed by personalized customer support and competitive pricing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://computer4sales.com/"
        }
      ]
    },
    {
      image: require("./assets/images/df-logo.png"),
      projectName: "DeskFlex",
      projectDesc: "Hybrid workplace management platform offering smart desk booking, room scheduling, and resource reservation tools integrated with office systems to boost efficiency and flexibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://deskflex.com/"
        }
      ]
    },
    {
      image: require("./assets/images/phonecasepk_logo.png"),
      projectName: "PhoneCase",
      projectDesc: "A dynamic mobile accessory storefront, offering a wide variety of phone cases and accessories tailored to diverse device models and user preferences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "htts://phonecase.pk/"
        }
      ]
    },
    {
      image: require("./assets/images/tf-logo.png"),
      projectName: "Toffos",
      projectDesc: "An Australian-based platform delivering vibrant, customized lifestyle accessories with a focus on quality and creative design tailored to modern aesthetics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://toffos.com.au/"
        }
      ]
    },
     {
      image: require("./assets/images/bm-logo.png"),
      projectName: "Bannam Makers",
      projectDesc: "Presents handcrafted, culturally rich products crafted by local artisans in Pakistan, blending tradition with contemporary design.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://banaam.pk/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications that I have done !",

  achievementsCards: [
  {
    title: "Fundamental of Digital Marketing",
    subtitle:
      "Certified in the fundamentals of digital marketing, covering SEO, SEM, social media, and analytics strategies for driving online growth.",
    image: require("./assets/images/cer1.webp"), // Replace with relevant image
    imageAlt: "Fundamentals of Digital Marketing",
    footerLink: [
      {
        name: "View Certification",
        url: "https://drive.google.com/file/d/1hHWWVE2aTeYd80GcrBhURf6Hezprn6y5/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Link Building",
    subtitle:
      "Earned certification in link building techniques, focusing on outreach, backlink strategies, and improving domain authority.",
    image: require("./assets/images/cer2.webp"), // Replace with relevant image
    imageAlt: "Link Building",
    footerLink: [
      {
        name: "View Certification",
        url: "https://drive.google.com/file/d/1tex-7wNUra194QIJ_6UaU2hDUk8mxR1A/view?usp=drive_link"
      }
    ]
  },
  {
    title: "On-Page and Technical SEO",
    subtitle:
      "Certified in on-page and technical SEO, including site structure optimization, page speed improvements, and schema markup.",
    image: require("./assets/images/cer3.webp"), // Replace with relevant image
    imageAlt: "On-Page and Technical SEO",
    footerLink: [
      {
        name: "View Certification",
        url: "https://drive.google.com/file/d/19bwrOU-i-L1zMJ-_L3c2uhV_aZnFbT5P/view?usp=drive_link"
      }
    ]
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
  <p>Sharing insights on digital growth, marketing strategies, and technology trends to help businesses thrive online.</p>,
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
    url: "https://medium.com/@aftaabrana7/the-growth-stack-revolution-powering-the-next-era-of-online-business-bc12622ce8da",
    title: "The Growth Stack Revolution - Powering the Next Era of Online Business",
    description:
      "Discover how the Growth Stack Revolution is transforming online business, integrating strategies, tools, and systems to drive sustainable growth in the digital era."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92306-6168691",
  email_address: "aftaabrana7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection, // removed
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};