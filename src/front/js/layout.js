import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { ImageOne } from "./component/imageone";
import { ImageTwo } from "./component/imagetwo";
import { TextBox } from "./component/textbox";
import { ImageThree } from "./component/imagethree";
import { ImageFour } from "./component/imagefour";
import { RocketCard } from "./component/rocketscard";
import { rocketsView } from "./pages/rocketsview";
import { NasaOneImageCard } from "./component/nasaoneimagecard";
import { NasaOneImageView } from "./pages/nasaoneimageview";
import { DragonsView } from "./pages/dragonsview";
import { DragonsCard } from "./component/dragonscard";
import { MarsView } from "./pages/marsview";
import { TextBoxTwo } from "./component/textboxtwo";
import { MapView } from "./pages/mapview.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RocketsView } from "./pages/rocketsview";
import { Information } from "./pages/informationRockets";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/marsview">
              <MarsView />
            </Route>
            <Route exact path="/mapview">
              <MapView />
            </Route>
            <Route exact path="/rocketsview">
              <RocketsView />
            </Route>
            <Route exact path="/nasaoneimageview">
              <NasaOneImageView />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/information/:name" component={Information} />
            <Route exact path="/dragonsview">
              <DragonsView />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
