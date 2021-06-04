/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssessmentIcon from '@material-ui/icons/Assessment';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../../auth';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <div className="navbar">
        <div className="navbar__header">
          <Link href="/">
            <a>
              <Image
                src="/deneme.png"
                alt="Logo"
                width={80}
                height={100}
              />
            </a>
          </Link>
          <div>Go Fish</div>
          <br />
        </div>
        <div>
          <h3>Reports</h3>
          <ul>
            {user && (
            <Link href="/reports">
              <a>
                <AssignmentIcon />
                <li>Reports</li>
              </a>
            </Link>
            )}
            {user && (
            <Link href="/">
              <a>
                <ContactsIcon />
                <li>Field Workers</li>
              </a>
            </Link>
            )}
            {user && (
            <Link href="/photos">
              <a>
                <WorkIcon />
                <li>Photos</li>
              </a>
            </Link>
            )}
          </ul>
        </div>
        <div>
          <br />
          <h3>Edit Surveys</h3>
          <ul>
            {user && (
              <Link href="/newQues">
                <a>
                  <AssessmentIcon />
                  <li>New survey</li>
                </a>
              </Link>
            )}
            {user && (
            <Link href="/">
              <a>
                <WorkIcon />
                <li>Projects</li>
              </a>
            </Link>
            )}
          </ul>
          <br />
          <h3>Admin</h3>
          <ul>
            {user && (
              <Link href="/">
                <a>
                  <AssessmentIcon />
                  <li>Org Profile</li>
                </a>
              </Link>
            )}
            {user ? (
              <Link href="/logout">
                <a>
                  <ExitToAppIcon />
                  <li>Log Out</li>
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a>
                  <li>Log In</li>
                </a>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
