import React from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "../authSlice";
import "../scss/header.scss";

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const handleSignOut = () => {
    dispatch(signOut());
    removeCookie("token");
    navigate("/signin");
  };

  return (
    <header className="header">
      <h1>Todoアプリ</h1>
      {auth ? (
        <>
          <button onClick={handleSignOut} className="sign-out-button">
            サインアウト
          </button>
          <button>
            <Link to="/" className="link-to-home">
              Home画面に戻る
            </Link>
          </button>
        </>
      ) : (
        <></>
      )}
    </header>
  );
};
