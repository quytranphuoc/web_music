import icons from "./icons";

const { MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie, MdOutlineFeed } =
  icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <TbChartArcs size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <HiOutlineChartPie size={24} />,
  },
  {
    path: "flollow",
    text: "Theo dõi",
    icons: <MdOutlineFeed size={24} />,
  },
];
