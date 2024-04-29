import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import React from "react";

import DevlogSidebar from "./DevlogSidebar.jsx";
import DevlogNav from "./DevlogNav.js";
import "./styles/DevlogPage.css";
import "./styles/Entries.css";

const DevlogPage = props => {
  // The content for the text pane of this page is pulled from a file within the entries subfolder
  const entry = props.entry;

  const containerClass = `c-page-layout c-devlog-full-page
    ${useLocation().pathname !== "/ADdevlog/" ? "c-grayscale-content-bg" : ""}`;
  const bgStyle = {
    backgroundImage: `url("${window.rootURL}/bg/${entry.bgImage}")`,
    filter: entry.bgFilter,
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {
              entry.posted
                ? `AD Devlog | ${entry.title}`
                : "Reality Update Retrospective"
            }
          </title>
        </Helmet>
      </HelmetProvider>
      <div className={containerClass}>
        <div
          className="c-image-bg"
          style={bgStyle}
        />
        <DevlogSidebar />
        <div className="c-devlog-main-content">
          <h1>{ entry.title }</h1>
          <div className="o-devlog-dates">
            <i>
              { entry.posted ? `Entry Posted: ${entry.posted}` : null }
              <br />
              { entry.span ? `Development: ${entry.span}` : null }
            </i>
          </div>
          <entry.content />
          <DevlogNav entry={entry} />
        </div>
      </div>
    </>
  )
};

DevlogPage.propTypes = {
  entry: PropTypes.object
};

export default DevlogPage;
