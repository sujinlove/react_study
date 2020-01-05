import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import InlineCss from "./components/InlineCss";
import CssClass from "./components/CssClass";
import CssModule from "./components/CssModule";
import Scss from "./components/Scss";
import ScssModule from "./components/ScssModule";
import StyledComponents from "./components/StyledComponents";

const App = () => {
  return (
    <div>
      <h1>04_stylesheet</h1>
      {/* Link 구성 */}
      <Link to="/inline_css">[ Inline CSS ]</Link>
      <Link to="/css_class">[ CSS Class ]</Link>
      <Link to="/css_module">[ CSS Module ]</Link>
      <Link to="/scss">[ Scss ]</Link>
      <Link to="/scss_module">[ Scss Module ]</Link>
      <Link to="/styled_component">[ StyledComponent ]</Link>
      <hr />

      <Route path="/inline_css" component={InlineCss} exact={true} />
      <Route path="/css_class" component={CssClass} />
      <Route path="/css_module" component={CssModule} />
      <Route path="/scss" component={Scss} />
      <Route path="/scss_module" component={ScssModule} />
      <Route path="/styled_component" component={StyledComponents} />
    </div>
  );
};
export default App;
