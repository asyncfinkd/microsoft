import React from "react";
import {
  FooterDataWhatsNew,
  FooterDataMicrosoftStore,
  FooterEducationData,
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
                      <li>
                        <a
                          aria-label="Azure Enterprise"
                          class="c-uhff-link"
                          href="https://azure.microsoft.com/"
                          data-m='{"cN":"Footer_Enterprise_MicrosoftAzure_nav","id":"n1c4c1c1m1r1a3","sN":1,"aN":"c4c1c1m1r1a3"}'
                        >
                          Azure
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="AppSource  Enterprise"
                          class="c-uhff-link"
                          href="https://go.microsoft.com/fwlink/?LinkID=808093"
                          data-m='{"cN":"Footer_Enterprise_MicrosoftAppSource_nav","id":"n2c4c1c1m1r1a3","sN":2,"aN":"c4c1c1m1r1a3"}'
                        >
                          AppSource{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Automotive Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/automotive"
                          data-m='{"cN":"Footer_Enterprise_Automotive_nav","id":"n3c4c1c1m1r1a3","sN":3,"aN":"c4c1c1m1r1a3"}'
                        >
                          Automotive
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Government Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/government"
                          data-m='{"cN":"Footer_Enterprise_Government_nav","id":"n4c4c1c1m1r1a3","sN":4,"aN":"c4c1c1m1r1a3"}'
                        >
                          Government
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Healthcare Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/health"
                          data-m='{"cN":"Footer_Enterprise_Health_nav","id":"n5c4c1c1m1r1a3","sN":5,"aN":"c4c1c1m1r1a3"}'
                        >
                          Healthcare
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Manufacturing Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/manufacturing"
                          data-m='{"cN":"Footer_Enterprise_Manufacturing_nav","id":"n6c4c1c1m1r1a3","sN":6,"aN":"c4c1c1m1r1a3"}'
                        >
                          Manufacturing
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Financial services Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/financial-services/banking-and-capital-markets"
                          data-m='{"cN":"Footer_Enterprise_FinanciaServices_nav","id":"n7c4c1c1m1r1a3","sN":7,"aN":"c4c1c1m1r1a3"}'
                        >
                          Financial services
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Retail Enterprise"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/enterprise/retail-consumer-goods"
                          data-m='{"cN":"Footer_Enterprise_Retail_nav","id":"n8c4c1c1m1r1a3","sN":8,"aN":"c4c1c1m1r1a3"}'
                        >
                          Retail
                        </a>
                      </li>
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
                      <li>
                        <a
                          aria-label="Microsoft Visual Studio Developer"
                          class="c-uhff-link"
                          href="https://visualstudio.microsoft.com/"
                          data-m='{"cN":"Footer_Developer_MicrosoftVisualStudio_nav","id":"n1c5c1c1m1r1a3","sN":1,"aN":"c5c1c1m1r1a3"}'
                        >
                          Microsoft Visual Studio
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Windows Dev Center Developer"
                          class="c-uhff-link"
                          href="https://developer.microsoft.com/en-us/windows"
                        >
                          Windows Dev Center
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Developer Center Developer"
                          class="c-uhff-link"
                          href="https://developer.microsoft.com/"
                          data-m='{"cN":"Footer_Developer_DeveloperCenter_nav","id":"n3c5c1c1m1r1a3","sN":3,"aN":"c5c1c1m1r1a3"}'
                        >
                          Developer Center
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Microsoft developer program Developer"
                          class="c-uhff-link"
                          href="https://developer.microsoft.com/en-us/store/register"
                          data-m='{"cN":"Footer_Developer_MicrosoftDeveloperProgram_nav","id":"n4c5c1c1m1r1a3","sN":4,"aN":"c5c1c1m1r1a3"}'
                        >
                          Microsoft developer program
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Channel 9 Developer"
                          class="c-uhff-link"
                          href="https://channel9.msdn.com/"
                          data-m='{"cN":"Footer_Developer_Channel9_nav","id":"n5c5c1c1m1r1a3","sN":5,"aN":"c5c1c1m1r1a3"}'
                        >
                          Channel 9
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Office Dev Center Developer"
                          class="c-uhff-link"
                          href="https://developer.microsoft.com/en-us/office"
                          data-m='{"cN":"Footer_Developer_OfficeDevCenter_nav","id":"n6c5c1c1m1r1a3","sN":6,"aN":"c5c1c1m1r1a3"}'
                        >
                          Office Dev Center
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Microsoft Garage Developer"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/garage/"
                          data-m='{"cN":"Microsoft Garage_nav","id":"n7c5c1c1m1r1a3","sN":7,"aN":"c5c1c1m1r1a3"}'
                        >
                          Microsoft Garage
                        </a>
                      </li>
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
                      <li>
                        <a
                          aria-label="Careers Company"
                          class="c-uhff-link"
                          href="https://careers.microsoft.com/"
                          data-m='{"cN":"Footer_Company_Careers_nav","id":"n1c6c1c1m1r1a3","sN":1,"aN":"c6c1c1m1r1a3"}'
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="About Microsoft Company"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/about"
                          data-m='{"cN":"Footer_Company_AboutMicrosoft_nav","id":"n2c6c1c1m1r1a3","sN":2,"aN":"c6c1c1m1r1a3"}'
                        >
                          About Microsoft
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Company news Company"
                          class="c-uhff-link"
                          href="https://news.microsoft.com/"
                          data-m='{"cN":"Footer_Company_CompanyNews_nav","id":"n3c6c1c1m1r1a3","sN":3,"aN":"c6c1c1m1r1a3"}'
                        >
                          Company news
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Privacy at Microsoft Company"
                          class="c-uhff-link"
                          href="https://privacy.microsoft.com/en-us"
                          data-m='{"cN":"Footer_Company_PrivacyAtMicrosoft_nav","id":"n4c6c1c1m1r1a3","sN":4,"aN":"c6c1c1m1r1a3"}'
                        >
                          Privacy at Microsoft
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Investors Company"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/investor/default.aspx"
                          data-m='{"cN":"Footer_Company_Investors_nav","id":"n5c6c1c1m1r1a3","sN":5,"aN":"c6c1c1m1r1a3"}'
                        >
                          Investors
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Diversity and inclusion Company"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/diversity/"
                          data-m='{"cN":"Footer_Company_DiversityAndInclusion_nav","id":"n6c6c1c1m1r1a3","sN":6,"aN":"c6c1c1m1r1a3"}'
                        >
                          Diversity and inclusion
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Accessibility Company"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/accessibility"
                          data-m='{"cN":"Footer_Company_Accessibility_nav","id":"n7c6c1c1m1r1a3","sN":7,"aN":"c6c1c1m1r1a3"}'
                        >
                          Accessibility
                        </a>
                      </li>
                      <li>
                        <a
                          aria-label="Security Company"
                          class="c-uhff-link"
                          href="https://www.microsoft.com/en-us/security/default.aspx"
                          data-m='{"cN":"Footer_Company_Security_nav","id":"n8c6c1c1m1r1a3","sN":8,"aN":"c6c1c1m1r1a3"}'
                        >
                          Security
                        </a>
                      </li>
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
                    <li id="c-uhff-footer_sitemap">
                      <a
                        class="c-uhff-link"
                        href="https://www.microsoft.com/en-us/sitemap1.aspx"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_Sitemap_nav","id":"n1c8c1c1m1r1a3","sN":1,"aN":"c8c1c1m1r1a3"}'
                      >
                        Sitemap
                      </a>
                    </li>
                    <li id="c-uhff-footer_contactus">
                      <a
                        class="c-uhff-link"
                        href="https://support.microsoft.com/contactus"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_ContactUs_nav","id":"n2c8c1c1m1r1a3","sN":2,"aN":"c8c1c1m1r1a3"}'
                      >
                        Contact Microsoft
                      </a>
                    </li>
                    <li id="c-uhff-footer_privacyandcookies">
                      <a
                        class="c-uhff-link"
                        href="https://go.microsoft.com/fwlink/?LinkId=521839"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_PrivacyandCookies_nav","id":"n3c8c1c1m1r1a3","sN":3,"aN":"c8c1c1m1r1a3"}'
                      >
                        Privacy{" "}
                      </a>
                    </li>
                    <li class=" x-hidden" id="c-uhff-footer_managecookies">
                      <a
                        class="c-uhff-link"
                        href="#"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_ManageCookies_nav","id":"n4c8c1c1m1r1a3","sN":4,"aN":"c8c1c1m1r1a3"}'
                      >
                        Manage cookies
                      </a>
                    </li>
                    <li id="c-uhff-footer_termsofuse">
                      <a
                        class="c-uhff-link"
                        href="https://go.microsoft.com/fwlink/?LinkID=206977"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_TermsOfUse_nav","id":"n5c8c1c1m1r1a3","sN":5,"aN":"c8c1c1m1r1a3"}'
                      >
                        Terms of use
                      </a>
                    </li>
                    <li id="c-uhff-footer_trademarks">
                      <a
                        class="c-uhff-link"
                        href="https://www.microsoft.com/trademarks"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_Trademarks_nav","id":"n6c8c1c1m1r1a3","sN":6,"aN":"c8c1c1m1r1a3"}'
                      >
                        Trademarks
                      </a>
                    </li>
                    <li id="c-uhff-footer_safetyandeco">
                      <a
                        class="c-uhff-link"
                        href="https://www.microsoft.com/en-us/devices/safety-and-eco "
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_SafetyAndEco_nav","id":"n7c8c1c1m1r1a3","sN":7,"aN":"c8c1c1m1r1a3"}'
                      >
                        Safety &amp; eco
                      </a>
                    </li>
                    <li id="c-uhff-footer_aboutourads">
                      <a
                        class="c-uhff-link"
                        href="https://choice.microsoft.com"
                        data-mscc-ic="false"
                        data-m='{"cN":"Footer_AboutourAds_nav","id":"n8c8c1c1m1r1a3","sN":8,"aN":"c8c1c1m1r1a3"}'
                      >
                        About our ads
                      </a>
                    </li>

                    <li>&#169; Microsoft 2021</li>
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
