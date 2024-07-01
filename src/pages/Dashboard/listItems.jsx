import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';

const listItemsData = [
  { name: 'Dashboard', route: '/', icon: <DashboardIcon /> },
  { name: 'Users', route: '/users', icon: <PeopleIcon /> },
  { name: 'Orders', route: '/orders', icon: <ShoppingCartIcon /> },
  { name: 'Reports', route: '/reports', icon: <BarChartIcon /> },
  { name: 'Integrations', route: '/integrations', icon: <LayersIcon /> },
];

const secondaryListItemsData = [
  { name: 'Current month', route: '/reports/current-month', icon: <AssignmentIcon /> },
  { name: 'Last quarter', route: '/reports/last-quarter', icon: <AssignmentIcon /> },
  { name: 'Year-end sale', route: '/reports/year-end-sale', icon: <AssignmentIcon /> },
];

const ListItemWithLink = ({ name, route, icon }) => (
  <ListItemButton component={NavLink} to={route}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={name} />
  </ListItemButton>
);

export const mainListItems = (
  <React.Fragment>
    {listItemsData.map((item) => (
      <ListItemWithLink key={item.name} {...item} />
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    {secondaryListItemsData.map((item) => (
      <ListItemWithLink key={item.name} {...item} />
    ))}
  </React.Fragment>
);
