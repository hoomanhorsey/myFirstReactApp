import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  TrashTalk,
  Greeting,
  TestCircle,
  AppProp,
  Person,
} from "./Functions.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />

    <TrashTalk />

    <TestCircle />
    <AppProp />

    <Person />
  </StrictMode>
);
