import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { RiProfileLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { FiGrid } from "react-icons/fi";
import { GiVerticalBanner } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { BiSitemap } from "react-icons/bi";
import { GiKnightBanner } from "react-icons/gi";
import { MdVoicemail } from "react-icons/md";

const navItems = [
  {
    icon: <FiGrid />,
    label: "Dashboard",
    route: "/",
  },

  {
    icon: <GiVerticalBanner />,
    label: "Banner",
    route: "/banner",
  },

  {
    icon: <MdOutlineCategory />,
    label: "Category",
    route: "/category",
  },

  {
    icon: <BiSitemap />,
    label: "Product",
    route: "/product",
  },

  {
    icon: <GiKnightBanner />,
    label: "Event Banner",
    route: "/eventBanner",
  },

  {
    icon: <RiProfileLine />,
    label: "Review",
    route: "/review",
  },

  {
    icon: <GrMail />,
    label: "Mails",
    route: "/mail",
  },

  {
    icon: <MdVoicemail />,
    label: "Subscriber",
    route: "/subscriber",
  },
];

export default function LeftAppBar() {
  const router = useRouter();

  // NavSelection
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box style={{ height: "100vh" }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => {
                handleListItemClick(event, index), router.push(item.route);
              }}>
              <ListItemIcon className="left_navbar_icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
