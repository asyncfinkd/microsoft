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
        <li>
          <a
            id="onestore-quicklinksmodule-yts04ji-quicklink4"
            class="c-hyperlink quicklink large-icon"
            aria-label="shop windows 10"
            href="https://www.microsoft.com/en-us/store/b/windows?icid=MSCOM_QL_Windows"
            role="link"
            data-m='{"cN":"Shop Windows 10","bhvr":2,"id":"n4oneStore-quicklinksmodule-yts04ji-list","sN":4,"aN":"oneStore-quicklinksmodule-yts04ji-list","assetid":"SSAGPTSS_124026_60384_238_a","tags":{"ms.linkid":"SSAGPTSS_124026_60384_238_a"}}'
          >
            <img
              class="large-icon lazyload"
              alt="Microsoft Windows icon"
              src="//www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif"
              data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvE?ver=d8fc&amp;q=90&amp;m=6&amp;h=40&amp;w=40&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true"
              aria-hidden="true"
            />{" "}
            <div>Shop Windows 10</div>
          </a>
        </li>
        <li>
          <a
            id="onestore-quicklinksmodule-yts04ji-quicklink5"
            class="c-hyperlink quicklink large-icon"
            aria-label="find your next pc"
            href="https://www.microsoft.com/en-us/store/b/pc?icid=MSCOM_QL_PCs"
            role="link"
            data-m='{"cN":"Find your next PC","bhvr":2,"id":"n5oneStore-quicklinksmodule-yts04ji-list","sN":5,"aN":"oneStore-quicklinksmodule-yts04ji-list","assetid":"SSAGPTSS_124027_60385_238_a","tags":{"ms.linkid":"SSAGPTSS_124027_60385_238_a"}}'
          >
            <img
              class="large-icon lazyload"
              alt="PC computer icon"
              src="//www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif"
              data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&amp;q=90&amp;m=6&amp;h=40&amp;w=40&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true"
              aria-hidden="true"
            />{" "}
            <div>Find your next PC</div>
          </a>
        </li>
        <li>
          <a
            id="onestore-quicklinksmodule-yts04ji-quicklink6"
            class="c-hyperlink quicklink large-icon"
            aria-label="shop business products"
            href="https://www.microsoft.com/en-us/store/b/business?icid=MSCOM_QL_Business"
            role="link"
            data-m='{"cN":"Shop Business","bhvr":2,"id":"n6oneStore-quicklinksmodule-yts04ji-list","sN":6,"aN":"oneStore-quicklinksmodule-yts04ji-list","assetid":"SSAGPTSS_124091_61814_238_a","tags":{"ms.linkid":"SSAGPTSS_124091_61814_238_a"}}'
          >
            <img
              class="large-icon lazyload"
              alt="Briefcase icon"
              src="//www.microsoft.com/onerfstatics/marketingsites-neu-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif"
              data-src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&amp;q=90&amp;m=6&amp;h=40&amp;w=40&amp;b=%23FFFFFFFF&amp;l=f&amp;o=t&amp;aim=true"
              aria-hidden="true"
            />{" "}
            <div>Shop Business</div>
          </a>
        </li>
      </ul>
    </>
  );
}
