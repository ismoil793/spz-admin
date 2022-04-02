import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PhoneIcon from '@mui/icons-material/Phone';
import Logout from '@mui/icons-material/Logout';
import Link from 'next/link';
import List from '@mui/material/List';
import { useRouter } from 'next/router';
import Divider from '@mui/material/Divider';
import Cookies from 'universal-cookie';

const NavItems = () => {

   const cookies = new Cookies();
   const { pathname } = useRouter();
   const isActive = (path) => pathname === path;

   const iconProps = (path) => {

      return {
         color: isActive(path) ? 'primary' : '',
      };
   };

   const navItems = [
      {
         path: '/',
         icon: <HomeIcon {...iconProps('/')} />,
         text: 'Главная',
      },
      {
         path: '/category',
         icon: <CategoryIcon {...iconProps('/category')} />,
         text: 'Категории',
      },
      {
         path: '/clients',
         icon: <BarChartIcon {...iconProps('/clients')} />,
         text: 'Клиенты',
      },
      // {
      //    path: '/contact',
      //    icon: <BarChartIcon {...iconProps('/contact')} />,
      //    text: 'Starred',
      // },
      // {
      //    path: '/contact',
      //    icon: <PhoneIcon {...iconProps('/contact')} />,
      //    text: 'Send email',
      // },
      // {
      //    path: '/test',
      //    icon: <BugReportIcon {...iconProps('/test')} />,
      //    text: 'Drafts',
      // },
   ];

   const navItemsFooter = [
      {
         path: '/contact',
         icon: <PhoneIcon {...iconProps('/contact')} />,
         text: 'Контакты',
      },
   ];

   const renderNavItems = (navItems) => (
      navItems && navItems.length ?
         <List>
            {navItems.map(item => (
               <Link href={item.path} key={item.text}>
                  <a>
                     <ListItem button>
                        <ListItemIcon>
                           {item.icon}
                        </ListItemIcon>
                        <ListItemText
                           primary={item.text}
                           style={isActive(item.path) ? { color: '#2A55A3' } : {}}
                        // secondary={'sub-text'}
                        />
                     </ListItem>
                  </a>
               </Link>
            ))}
         </List>
         : null
   );

   return (
      <>
         {renderNavItems(navItems)}
         <Divider />
         {renderNavItems(navItemsFooter)}
         <Link href={'/login'}>
            <a style={{ marginTop: 'auto', marginBottom: 10 }}>
               <ListItem button onClick={() => cookies.remove('admin-sign-in')}>
                  <ListItemIcon>
                     <Logout />
                  </ListItemIcon>
                  <ListItemText
                     primary={'Выход из системы'}
                  />
               </ListItem>
            </a>
         </Link>
      </>
   )
      ;
};

export default NavItems;