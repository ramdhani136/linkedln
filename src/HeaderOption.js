import React from "react";
import "./Headeroption.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function HeaderOption({ avatar, Icon, title }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className="headerOption">
      {Icon && <Icon fontSize="small" className="headerOption__icon" />}
      {avatar && (
        <Avatar
          onClick={logoutApp}
          className="headerOption__icon"
          src={user?.photoUrl}
        >
          {user?.email[0]}
        </Avatar>
      )}
      <div className="headerOption__title">{title}</div>
    </div>
  );
}

export default HeaderOption;
