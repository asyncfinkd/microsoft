import React from "react";
import {
  FooterDataWhatsNew,
  FooterDataMicrosoftStore,
  FooterEducationData,
  FooterEnterpriseDataStructure,
  FooterDeveloperDataStructure,
  FooterCompanyDataStructure,
  FooterLinksDataStructure,
} from "../data/FooterData";

export default function Footer() {
  return (
    <>
      <div role="presentation" id="footerArea" class="x-hidden-print uhf">
        <div id="footerRegion" data-region-key="footerregion">
          <div
            id="coreui-universalfooter-ozmi90x"
            data-module-id="HP.AllModules|footerRegion|coreui-region|coreui-universalfooter-ozmi90x|coreui-universalfooter"
          >
            <footer
              id="uhf-footer"
              class="c-uhff context-uhf"
              data-uhf-mscc-rq="false"
              data-footer-footprint="/mshome/mshomefooter, fromService: False"
            >
              <nav class="c-uhff-nav" aria-label="Footer Resource links">
                <div class="c-uhff-nav-row">
                  <div class="c-uhff-nav-group">
                    <div class="c-heading-4" role="heading" aria-level="4">
                      What's new
                    </div>
                    <ul class="c-list f-bare">
                      {FooterDataWhatsNew.map((item) => (
                        <li>
                          <a
                            href={item.router}
                            aria-label={item.label}
                            className="c-uhff-link"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="c-uhff-nav-group">
                    <div class="c-heading-4" role="heading" aria-level="4">
                      Microsoft Store
                    </div>
                    <ul class="c-list f-bare">
                      {FooterDataMicrosoftStore.map((item) => (
                        <li>
                          <a
                            aria-label={item.label}
                            className="c-uhff-link"
                            href={item.router}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    class="c-uhff-nav-group"
                    data-m='{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a3","sN":3,"aN":"c1c1m1r1a3"}'
                  >
                    <div class="c-heading-4" role="heading" aria-level="4">
                      Education
                    </div>
                    <ul class="c-list f-bare">
                      {FooterEducationData.map((item) => (
                        <li>
                          <a
                            className="c-uhff-link"
                            aria-label={item.label}
                            href={item.router}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="c-uhff-nav-row">
                  <div
                    class="c-uhff-nav-group"
                    data-m='{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a3","sN":4,"aN":"c1c1m1r1a3"}'
                  >
                    <div class="c-heading-4" role="heading" aria-level="4">
                      Enterprise
                    </div>
                    <ul class="c-list f-bare">
                      {FooterEnterpriseDataStructure.map((item) => (
                        <li>
                          <a
                            aria-label={item.label}
                            class="c-uhff-link"
                            href={item.router}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    class="c-uhff-nav-group"
                    data-m='{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a3","sN":5,"aN":"c1c1m1r1a3"}'
                  >
                    <div class="c-heading-4" role="heading" aria-level="4">
                      Developer
                    </div>
                    <ul class="c-list f-bare">
                      {FooterDeveloperDataStructure.map((item) => (
                        <li>
                          <a
                            aria-label={item.label}
                            class="c-uhff-link"
                            href={item.router}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    class="c-uhff-nav-group"
                    data-m='{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a3","sN":6,"aN":"c1c1m1r1a3"}'
                  >
                    <div class="c-heading-4" role="heading" aria-level="4">
                      Company
                    </div>
                    <ul class="c-list f-bare">
                      {FooterCompanyDataStructure.map((item) => (
                        <li>
                          <a
                            aria-label={item.label}
                            class="c-uhff-link"
                            href={item.router}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
              <div class="c-uhff-base">
                <a
                  id="locale-picker-link"
                  aria-label="Content Language Selector. Currently set to English (United States)"
                  class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world"
                  href="https://www.microsoft.com/en-us/locale.aspx?absoluteReturnUrl=https%3a%2f%2fwww.microsoft.com%2fen-us%2f%3fql%3d2%26spl%3d1"
                  data-m='{"cN":"locale_picker(US)_nav","id":"n7c1c1m1r1a3","sN":7,"aN":"c1c1m1r1a3"}'
                >
                  English (United States)
                </a>

                <nav aria-label="Microsoft corporate links">
                  <ul
                    class="c-list f-bare"
                    data-m='{"cN":"Corp links_cont","cT":"Container","id":"c8c1c1m1r1a3","sN":8,"aN":"c1c1m1r1a3"}'
                  >
                    {FooterLinksDataStructure.map((item) => (
                      <li className={item.class} id={item.id}>
                        <a className="c-uhff-link" href={item.router}>
                          {item.text}
                        </a>
                      </li>
                    ))}
                    <li>© Microsoft 2021</li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>
          <div
            id="OneStore-LivePersonChatModule-mpynt5h"
            data-m='{"cN":"LivePersonChatModule 1","cT":"Module_onestore-LivePersonChatModule","id":"m2r1a3","sN":2,"aN":"r1a3"}'
            data-module-id="HP.AllModules|footerRegion|coreui-region|OneStore-LivePersonChatModule-mpynt5h|OneStore-LivePersonChatModule"
          >
            <div>
              <div
                class="c-flyout flyout-nohide"
                id="lp-iframe-container"
                role="dialog"
                data-js-flyout-placement="top"
                data-js-flyout-dismissible="false"
                aria-hidden="true"
              >
                <button
                  data-m='{"id":"nn1m2r1a3","sN":1,"aN":"m2r1a3"}'
                  class="c-glyph glyph-cancel lp-iframe-close x-hidden"
                  aria-label=""
                  tabindex="0"
                ></button>
                <iframe
                  tabindex="-1"
                  class="lp-iframe-window"
                  data-isGreeterBotChat="True"
                  data-chatTopic="Store"
                  data-isMobile="False"
                  data-isOfficeCommercial="False"
                  data-domainUrl="https://publisher.liveperson.net"
                  data-islpIncognitoFlightEnabled="False"
                  allow="camera;microphone"
                  name="lpSS_89316509127"
                  id="lpSS_89316509127"
                  src="https://publisher.liveperson.net/iframe-le-tag/iframe.html?lpsite=60270350&amp;lpsection=store-sales-en-us&amp;buttons=lpChatService,lpChatSales"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
