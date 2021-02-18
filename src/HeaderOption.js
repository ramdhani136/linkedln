import React from "react";
import "./Headeroption.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title }) {
  const dispatch = useDispatch();

  return (
    <div className="headerOption">
      {Icon && <Icon fontSize="small" className="headerOption__icon" />}
      {avatar && (
        <Avatar
          onClick={() => dispatch(logout())}
          className="headerOption__icon"
          src={avatar}
        />
      )}
      <div className="headerOption__title">{title}</div>
    </div>
  );
}

export default HeaderOption;
