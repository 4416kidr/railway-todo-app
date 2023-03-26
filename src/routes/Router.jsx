import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { NewTask } from "../pages/NewTask";
import { NewList } from "../pages/NewList";
import { EditTask } from "../pages/EditTask";
import { SignUp } from "../pages/SignUp";
import { EditList } from "../pages/EditList";

const RouteAuthGuard = (props) => {
  const auth = useSelector((state) => state.auth.isSignIn);
  if (!auth) {
    return <Navigate replace to={props.redirect} />;
  }
  return <>{props.component}</>;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={<RouteAuthGuard component={<Home />} redirect="/signin" />}
        />
        <Route
          path="/task/new"
          element={
            <RouteAuthGuard component={<NewTask />} redirect="/signin" />
          }
        />
        <Route
          path="/list/new"
          element={
            <RouteAuthGuard component={<NewList />} redirect="/signin" />
          }
        />
        <Route path="lists/:listId">
          <Route
            path="tasks/:taskId"
            element={
              <RouteAuthGuard component={<EditTask />} redirect="/signin" />
            }
          />
          <Route
            path="edit"
            element={
              <RouteAuthGuard component={<EditList />} redirect="/signin" />
            }
          />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
