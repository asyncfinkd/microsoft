import React from "react";
import { NavigationCarouselDataStructure } from "../data/NavigationCarouselData";

export default function NavigationCarousel() {
  return (
    <>
      <ul
        class="c-group"
        data-m='{"cN":"oneStore-quicklinksmodule-yts04ji-list","cT":"Container","id":"oneStore-quicklinksmodule-yts04ji-list","sN":3,"aN":"m2r2a2"}'
      >
        <li class="f-active">
          <a
            id="onestore-quicklinksmodule-yts04ji-quicklink1"
            class="c-hyperlink quicklink large-icon"
            aria-label="choose your microsoft 365"
            href="https://www.microsoft.com/EN-US/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365"
            role="link"
          >
            <img
              class="large-icon lazyload"
              alt="Microsoft 365 icon"
              title="Microsoft 365 Black"
              src="//www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif"
              data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&amp;q=90&amp;m=6&amp;h=40&amp;w=40&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true"
              aria-hidden="true"
            />{" "}
            <div>Choose your Microsoft 365</div>
          </a>
        </li>
        {NavigationCarouselDataStructure.map((item) => (
          <li>
            <a
              id={item.id}
              className="c-hyperlink quicklink large-icon"
              role="link"
              href={item.router}
              aria-label={item.label}
            >
              <img
                className="large-icon lazyload"
                alt={item.label}
                src={item.image}
                data-src={item.dataImage}
                aria-hidden="true"
              />
              <div>{item.text}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
