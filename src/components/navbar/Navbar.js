import React from "react";
import {
  NavbarDataStructure,
  NavbarMenuSoftwareStructure,
  NavbarMenuPCDeviceStructure,
  NavbarMenuEntertainmentStructure,
  NavbarMenuBusinessStructure,
  NavbarDeveloperITStructure,
  NavbarMenuOtherDataStructure,
} from "../data/NavbarData";

export default function Navbar() {
  return (
    <>
      <header
        class="c-uhfh context-uhf no-js c-sgl-stck "
        itemscope="itemscope"
        data-header-footprint="/MSHomePage/MSHomePageHeader, fromService: False"
        data-magict="true"
        itemtype="http://schema.org/Organization"
      >
        <div class="theme-light js-global-head f-closed  global-head-cont">
          <div class="c-uhfh-gcontainer-st">
            <button
              type="button"
              class="c-action-trigger c-glyph glyph-global-nav-button"
              aria-label="All Microsoft expand to see list of Microsoft products and services"
              initialState-label="All Microsoft expand to see list of Microsoft products and services"
              toggleState-label="Close All Microsoft list"
              aria-expanded="false"
            ></button>
            <button
              type="button"
              class="c-action-trigger c-glyph glyph-arrow-htmllegacy"
              aria-label="Close search"
              aria-expanded="false"
            ></button>
            <a
              id="uhfLogo"
              class="c-logo c-sgl-stk-uhfLogo"
              itemprop="url"
              href="https://www.microsoft.com"
              aria-label="Microsoft"
            >
              <img
                alt=""
                itemprop="logo"
                class="c-image"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
                role="presentation"
                aria-hidden="true"
              />
              <span itemprop="name" role="presentation" aria-hidden="true">
                Microsoft
              </span>
            </a>
            <div class="f-mobile-title">
              <button
                type="button"
                class="c-action-trigger c-glyph glyph-chevron-left"
                aria-label="See more menu options"
              ></button>
              <span
                data-global-title="Microsoft home"
                class="js-mobile-title"
              ></span>
              <button
                type="button"
                class="c-action-trigger c-glyph glyph-chevron-right"
                aria-label="See more menu options"
              ></button>
            </div>

            <nav
              id="uhf-g-nav"
              aria-label="Contextual menu"
              class="c-uhfh-gnav"
            >
              <ul class="js-paddle-items">
                {NavbarDataStructure.map((item) => (
                  <li className="signle-link js-nav-menu uhf-menu-item">
                    <a
                      href={item.route}
                      id={item.id}
                      className="c-uhf-nav-link"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}

                <li
                  id="overflow-menu"
                  class="overflow-menu x-hidden uhf-menu-item"
                >
                  <div class="c-uhf-menu js-nav-menu">
                    <button
                      type="button"
                      aria-label="More"
                      aria-expanded="false"
                    >
                      More
                    </button>
                    <ul
                      id="overflow-menu-list"
                      aria-hidden="true"
                      class="overflow-menu-list"
                    ></ul>
                  </div>
                </li>
              </ul>
            </nav>

            <div class="c-uhfh-actions">
              <div class="wf-menu">
                {" "}
                <nav id="uhf-c-nav" aria-label="All Microsoft menu">
                  <ul class="js-paddle-items">
                    <li>
                      <div class="c-uhf-menu js-nav-menu">
                        <button
                          type="button"
                          class="c-button-logo all-ms-nav"
                          aria-label="All Microsoft expand to see list of Microsoft products and services"
                          aria-expanded="false"
                        >
                          {" "}
                          <span>All Microsoft</span>
                        </button>
                        <ul
                          class="f-multi-column f-multi-column-6"
                          aria-hidden="true"
                        >
                          <li class="c-w0-contr c-w0-contr-desktop-hidden">
                            <ul class="c-w0">
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_0-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/microsoft-365"
                                >
                                  Microsoft 365
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_1-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/en-us/microsoft-365/microsoft-office"
                                >
                                  Office
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_2-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/en-us/windows/"
                                >
                                  Windows
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_3-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/en-us/surface"
                                >
                                  Surface
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_4-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.xbox.com/"
                                >
                                  Xbox
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_5-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/en-us/store/b/sale?icid=gm_nav_L0_salepage"
                                >
                                  Deals
                                </a>
                              </li>
                              <li class="js-nav-menu single-link">
                                <a
                                  id="l1_support-mo"
                                  class="js-subm-uhf-nav-link"
                                  href="https://support.microsoft.com/en-us"
                                >
                                  Support
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_8-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Software
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_8-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Software
                            </button>
                            <ul aria-hidden="true">
                              {NavbarMenuSoftwareStructure.map((item) => (
                                <li className="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_16-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              PCs &amp; Devices{" "}
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_16-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              PCs &amp; Devices{" "}
                            </button>
                            <ul aria-hidden="true">
                              {NavbarMenuPCDeviceStructure.map((item) => (
                                <li class="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_22-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Entertainment
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_22-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Entertainment
                            </button>
                            <ul aria-hidden="true">
                              {NavbarMenuEntertainmentStructure.map((item) => (
                                <li class="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_29-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Business
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_29-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Business
                            </button>
                            <ul aria-hidden="true">
                              {NavbarMenuBusinessStructure.map((item) => (
                                <li className="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_38-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Developer &amp; IT{" "}
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_38-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Developer &amp; IT{" "}
                            </button>
                            <ul aria-hidden="true">
                              {NavbarDeveloperITStructure.map((item) => (
                                <li className="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li class="f-sub-menu js-nav-menu nested-menu">
                            <span
                              id="uhf-navspn-shellmenu_46-span"
                              style={{ display: "none" }}
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Other
                            </span>
                            <button
                              id="uhf-navbtn-shellmenu_46-button"
                              type="button"
                              f-multi-parent="true"
                              aria-expanded="false"
                            >
                              Other
                            </button>
                            <ul aria-hidden="true">
                              {NavbarMenuOtherDataStructure.map((item) => (
                                <li class="js-nav-menu single-link">
                                  <a
                                    id={item.id}
                                    class="js-subm-uhf-nav-link"
                                    href={item.route}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                              <li class="js-nav-menu single-link">
                                <a
                                  id="shellmenu_51"
                                  class="js-subm-uhf-nav-link"
                                  href="https://www.microsoft.com/en-us/store/b/gift-cards"
                                >
                                  Gift cards
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li class="f-multi-column-info">
                            <a
                              href="https://www.microsoft.com/en-us/sitemap.aspx"
                              aria-label=""
                              class="c-glyph"
                            >
                              View Sitemap
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <form
                class="c-search"
                autocomplete="off"
                id="searchForm"
                name="searchForm"
                role="search"
                action="https://www.microsoft.com/en-us/search"
                method="GET"
                data-seAutoSuggest='{"queryParams":{"market":"en-us","clientId":"7F27B536-CF6B-4C65-8638-A0F8CBDFCA65","sources":"Iris-Products,DCatAll-Products,Microsoft-Terms","filter":"+ClientType:StoreWeb","counts":"1,5,5"},"familyNames":{"Apps":"App","Books":"Book","Bundles":"Bundle","Devices":"Device","Fees":"Fee","Games":"Game","MusicAlbums":"Album","MusicTracks":"Song","MusicVideos":"Video","MusicArtists":"Artist","OperatingSystem":"Operating System","Software":"Software","Movies":"Movie","TV":"TV","CSV":"Gift Card","VideoActor":"Actor"}}'
                data-seautosuggestapi="https://www.microsoft.com/services/api/v3/suggest"
                aria-expanded="false"
              >
                <input
                  id="cli_shellHeaderSearchInput"
                  aria-label="Search Expanded"
                  aria-autocomplete="list"
                  aria-controls="universal-header-search-auto-suggest-transparent"
                  aria-owns="universal-header-search-auto-suggest-ul"
                  type="search"
                  name="q"
                  placeholder="Search Microsoft.com"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Search Microsoft.com"
                />
                <button
                  id="search"
                  aria-label="Search Microsoft.com"
                  class="c-glyph"
                  data-bi-dnt="true"
                  data-bi-mto="true"
                  aria-expanded="false"
                >
                  <span role="presentation">Search</span>
                  <span
                    role="tooltip"
                    class="c-uhf-tooltip c-uhf-search-tooltip"
                  >
                    Search Microsoft.com
                  </span>
                </button>
                <div
                  class="m-auto-suggest"
                  id="universal-header-search-auto-suggest-transparent"
                  role="group"
                >
                  <ul
                    class="c-menu"
                    id="universal-header-search-auto-suggest-ul"
                    aria-label="Search Suggestions"
                    aria-hidden="true"
                    data-bi-dnt="true"
                    data-bi-mto="true"
                    data-js-auto-suggest-position="default"
                    role="listbox"
                    data-tel="jsll"
                  ></ul>
                </div>
              </form>
              <button
                id="cancel-search"
                class="cancel-search"
                aria-label="Cancel Search"
              >
                <span>Cancel</span>
              </button>
              <a
                id="uhf-shopping-cart"
                aria-label="0 items in shopping cart"
                class="c-action-trigger c-glyph c-uhf-nav-link glyph-shopping-cart"
                href="https://www.microsoft.com/en-us/store/buy"
                data-src-dmn-chk="true"
              >
                <span class="shopping-cart-amount x-hidden" aria-hidden="true">
                  0
                </span>
                <span class="c-cart-lbl c-st-lbl">Cart</span>
                <span
                  id="uhf-shopping-cart-tooltip"
                  class="c-uhf-tooltip"
                  role="tooltip"
                >
                  0 items in shopping cart
                </span>
              </a>
              <iframe
                id="shell-cart-count"
                data-src="//www.microsoft.com/store/buy/cartcount"
              ></iframe>
              <div
                id="meControl"
                class="c-me"
                data-signinsettings='{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"https://www.microsoft.com/mscomhp/onerf/signin?EEL=True\u0026pcexp=True","signOutUrl":"https://www.microsoft.com/mscomhp/onerf/signout?pcexp=True","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"https://www.microsoft.com/mscomhp/onerf/signout?pcexp=True","appId":"","siteUrl":"","blockMsaFed":true}}}'
              >
                <div class="msame_Header">
                  <div class="msame_Header_name st_msame_placeholder">
                    Sign in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
