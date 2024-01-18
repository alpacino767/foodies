import React, { useLayoutEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { UilEnvelope } from '@iconscout/react-unicons';

import { TopMenuStyle } from './Style';

function TopMenu() {
  const path = '/admin';

  useLayoutEffect(() => {
    const active = document.querySelector('.ninjadash-top-menu a.active');
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper');
      const hasSubMenuLeft = active.closest('.has-subMenu-left');
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active');
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
    };
    window.addEventListener('load', active && activeDefault);
    return () => window.removeEventListener('load', activeDefault);
  }, []);
  const addParentActive = (event) => {
    document.querySelectorAll('.parent').forEach((element) => {
      element.classList.remove('active');
    });

    const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left');
    const megaMenu = event.currentTarget.closest('.megaMenu-wrapper');
    if (!megaMenu) {
      event.currentTarget.closest('ul').previousSibling.classList.add('active');
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    } else {
      event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    }
  };
  return (
    <TopMenuStyle>
      <div className="ninjadash-top-menu">
        <ul>
          <li>
            <Link to="#">Blank Page</Link>
          </li>
        </ul>
        <li className="has-subMenu-left">
          <Link to="#" className="parent">
            <UilEnvelope />
            Email
          </Link>
          <ul className="subMenu">
            <li>
              <NavLink onClick={addParentActive} to={`${path}/email/inbox`}>
                Inbox
              </NavLink>
            </li>
            <li>
              <NavLink onClick={addParentActive} to={`${path}/email/single/1585118055048`}>
                Read Email
              </NavLink>
            </li>
          </ul>
        </li>
      </div>
    </TopMenuStyle>
  );
}

export default TopMenu;
