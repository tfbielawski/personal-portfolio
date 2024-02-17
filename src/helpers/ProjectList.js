import PP from "../assets/pp2.png";
import SUFS from "../assets/sufs.png";
import GH from "../assets/github1.png";
import NASA from "../assets/nasa.png";
import DD1 from "../assets/dd1.jpeg";
import DD2 from "../assets/dd2.png";
import TTT1 from "../assets/ttt1.png";
import TTT2 from "../assets/rtt4.jpeg";
import WX1 from "../assets/wx1.png";
import SW1 from "../assets/sw1.jpeg";

const CHANGEPOINT_URL = "https://play.google.com/store/search?q=changepoint&c=apps"

// Style the images to fit the boxes, or replace chopped images with smaller
export const ProjectList = [
  {
    name: "PocketPlatform Mobile App",
    image: PP,
    skills: "",
    repo: "https://github.com/tfbielawski/",
    deploy: "https://www.acstechnologies.com/ministryplatform/tools/pocketplatform",
    description: `PocketPlatform is a customized mobile app for churches using both Android and iOS using React Native.
    Some PocketPlatform apps I created on Google Play/iOS App Stores: ChangePoint Alaska Church, Beulah Baptist Church, St. Thomas More Glendale Parish,
    Impact Church, and more. Clicking "launch" will open the PocketPlaform main info website. `,
    url: "test"
  },
  {
    name: "Step Up For Students (SUFS)",
    image: SUFS,
    skills: "",
    repo: "https://github.com/tfbielawski/",
    deploy: "https://www.stepupforstudents.org",
    description: `SUFS is a multi-state education platform for students that connects students and parents with educators, schools, 
    and funding opportunities. It is a web app using C#/.NET framework with Blazor and Cosmos db.
    Clicking "launch" will open the SUFS main info website.`
  },
  {
    name: "My Github Repositories",
    image: GH,
    skills: "",
    repo: "https://github.com/tfbielawski/",
    deploy: "https://github.com/tfbielawski/",
    description: `Click "Launch" to View my GitHub repositories.`
  },
  //This app doesn't work.
  // {
  //   name: "NASA Photo of the Day API React App",
  //   image: NASA,
  //   skills: "",
  //   repo: "https://github.com/tfbielawski/nasa-apod-vercel",
  //   deploy: "deploy",
  //   description: "A really cool picture rotated daily by NASA with description using their API."
  // },
  {
    name: "React Dungeons & Dragons Random Monster Generator",
    image: DD1,
    skills: "",
    repo: "https://github.com/tfbielawski/vercel-async-redux",
    deploy: "https://vercel-async-redux.vercel.app",
    description: "A React/Redux app to explore monsters from the D&D universe using the D&D API!"
  },
  {
    name: "React Dungeons & Dragons Campaign Helper App",
    image: DD2,
    skills: "",
    repo: "https://github.com/tfbielawski/reactDD",
    deploy: "https://new-reactdd-vercel.vercel.app",
    description: "A React app to help gather character, monster, and magic information with data from the D&D API!"
  },
  {
    name: "React-Tac-Toe",
    image: TTT1,
    skills: "",
    repo: "https://github.com/tfbielawski/react-tac-toe-vercel",
    deploy: "https://react-tac-toe-vercel.vercel.app",
    description: "A basic Tic Tac Toe app in React."
  },
  {
    name: "React-Tac-Toe-2",
    image: TTT2,
    skills: "",
    repo: "https://github.com/tfbielawski/react-tac-toe-2",
    deploy: "https://react-tac-toe-2.vercel.app",
    description: "A better Tic Tac Toe app in React."
  },
  {
    name: "React Weather App",
    image: WX1,
    skills: "",
    repo: "https://github.com/tfbielawski/react-wx-vercel",
    deploy: "https://react-wx-vercel.vercel.app",
    description: "A little React app to check the weather using a weather API."
  },
  {
    name: "Star Wars API",
    image: SW1,
    skills: "",
    repo: "https://github.com/tfbielawski/reactsw-vercel",
    deploy: "https://reactsw-vercel.vercel.app",
    description: "A React app that gets info from the Star Wars API about various characters and places."
  },
  // {
  //   name: "React Essentials Info App",
  //   image: SW1,
  //   skills: "",
  //   repo: "repo",
  //   deploy: "",
  //   description: "..."
  // },
  // {
  //   name: "JS Monster Killer",
  //   image: SW1,
  //   skills: "",
  //   repo: "repo",
  //   deploy: "",
  //   description: "..."
  // },
  // {
  //   name: "JS Restaurant App",
  //   image: SW1,
  //   skills: "",
  //   repo: "repo",
  //   deploy: "",
  //   description: "..."
  // },
  // {
  //   name: "JS RPS APP",
  //   image: SW1,
  //   skills: "",
  //   repo: "repo",
  //   deploy: "",
  //   description: "..."
  // },
];
