import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import PhoneIcon from "@mui/icons-material/Phone";
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function NavItems() {
  const cookies = new Cookies();
  const { pathname } = useRouter();
  const isActive = (path) => pathname === path;

  const iconProps = (path) => ({
    color: isActive(path) ? "primary" : "",
  });

  const navItems = [
    {
      path: "/",
      icon: <HomeIcon {...iconProps("/")} />,
      text: "Главная",
    },
    {
      path: "/sub-category",
      icon: <CategoryIcon {...iconProps("/sub-category")} />,
      text: "Подкатегории",
    },
    {
      path: "/products",
      icon: <ShoppingCart {...iconProps("/products")} />,
      text: "Продукты",
    },
  ];

  const navItemsFooter = [
    {
      path: "/contact",
      icon: <PhoneIcon {...iconProps("/contact")} />,
      text: "Контакты",
    },
  ];

  const renderNavItems = (navElements) =>
    navElements && navElements.length ? (
      <List>
        {navElements.map((item) => (
          <Link href={item.path} key={item.text}>
            <a>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  style={isActive(item.path) ? { color: "#2A55A3" } : {}}
                  // secondary={'sub-text'}
                />
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
    ) : null;

  return (
    <>
      {renderNavItems(navItems)}
      <Divider />
      {renderNavItems(navItemsFooter)}
      <Link href="/login">
        <a style={{ marginTop: "auto", marginBottom: 10 }}>
          <ListItem button onClick={() => cookies.remove("admin-sign-in")}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Выход из системы" />
          </ListItem>
        </a>
      </Link>
    </>
  );
}

export default NavItems;
