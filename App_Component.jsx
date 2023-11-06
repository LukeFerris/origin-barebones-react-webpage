// ["Base", "Component"]
// This page uses react-router V6
// It should be updated to include the site layout page
import { BrowserRouter } from "react-router-dom";
import MainPage_Component from "./MainPage_Component";

export default function App_Component() {
  return (
    <BrowserRouter>
      <MainPage_Component />
    </BrowserRouter>
  );
}
