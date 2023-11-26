import PropTypes from "prop-types";
import React from "react";
import "./location.css";

const Location = ({ pinAltLight = "/public/pin_alt_light.svg", href, title }) => {
  return (
    <div className="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11.2939 9.91675C11.7291 10.1828 11.9582 10.4846 11.9582 10.7917C11.9582 11.0989 11.7291 11.4007 11.2939 11.6667C10.8587 11.9328 10.2328 12.1537 9.479 12.3073C8.72524 12.4609 7.87021 12.5417 6.99984 12.5417C6.12947 12.5417 5.27443 12.4609 4.52067 12.3073C3.76691 12.1537 3.14098 11.9328 2.70579 11.6667C2.27061 11.4007 2.0415 11.0989 2.0415 10.7917C2.0415 10.4846 2.27061 10.1828 2.70579 9.91675" stroke="#222222" stroke-linecap="round"/>
            <path d="M11.375 5.83325C11.375 8.59572 8.52361 10.5096 7.42473 11.1446C7.15978 11.2977 6.84022 11.2977 6.57527 11.1446C5.47639 10.5096 2.625 8.59572 2.625 5.83325C2.625 3.20825 4.74484 1.45825 7 1.45825C9.33333 1.45825 11.375 3.20825 11.375 5.83325Z" stroke="#222222"/>
            <path d="M8.83317 5.83333C8.83317 6.84586 8.01236 7.66667 6.99984 7.66667C5.98732 7.66667 5.1665 6.84586 5.1665 5.83333C5.1665 4.82081 5.98732 4 6.99984 4C8.01236 4 8.83317 4.82081 8.83317 5.83333Z" stroke="#222222"/>
        </svg>
        <a className="text-wrapper" href={href} rel="noopener noreferrer" target="_blank">
            {title}
        </a>
    </div>
  );
};

Location.propTypes = {
  pinAltLight: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};

export default Location;