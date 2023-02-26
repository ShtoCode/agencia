import { connect } from "react-redux";

import React from "react";

const Layout = ({children}) => {
  return <div>{children}</div>;
};

const mapStateToProp = (state) => ({

})

export default connect(mapStateToProp, {})(Layout);
