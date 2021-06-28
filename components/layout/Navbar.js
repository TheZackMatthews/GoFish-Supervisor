/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssessmentIcon from '@material-ui/icons/Assessment';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, []);

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
        </div>
        {user && (
          <>
            <div>
              <h3>Reports</h3>
              <ul>
                <Link href="/reports">
                  <a>
                    <AssignmentTurnedInOutlinedIcon />
                    <li>Reports</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <ContactsIcon />
                    <li>Field Workers</li>
                  </a>
                </Link>
                <Link href="/photos">
                  <a>
                    <WorkIcon />
                    <li>Photos</li>
                  </a>
                </Link>
              </ul>
            </div>
            <div>
              <br />
              <h3>Edit Surveys</h3>
              <ul>
                <Link href="/newQues">
                  <a>
                    <AssessmentIcon />
                    <li>New survey</li>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <WorkIcon />
                    <li>Projects</li>
                  </a>
                </Link>
              </ul>
              <br />
              <h3>Admin</h3>
              <ul>

                <Link href="/">
                  <a>
                    <AssessmentIcon />
                    <li>Org Profile</li>
                  </a>
                </Link>
                <Link href="/logout">
                  <a>
                    <ExitToAppIcon />
                    <li>Log Out</li>
                  </a>
                </Link>

              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
