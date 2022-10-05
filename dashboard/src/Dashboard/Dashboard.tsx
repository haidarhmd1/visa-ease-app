/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Navbar } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconLogout,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './Dashboard.styles';

const mainLinks = [
  { link: '/', label: 'Dashboard', icon: IconLayoutDashboard },
];
const footerLinks = [
  { link: '/account', label: 'Account', icon: IconUser },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function Dashboard() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = mainLinks.map(item => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));
  const footer = footerLinks.map(item => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="xs" className={classes.navBar}>
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {footer}
        <a
          href="#"
          className={classes.link}
          onClick={event => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
