import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import "@polymer/paper-card/paper-card.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-collapse/iron-collapse.js";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ProfileActions extends PolymerElement {
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      <style>
        .act-mob {
          display: none;
        }
        .act-container {
          width: 256px;
          background: rgba(19, 27, 116, 0.04);
          display: flex;
          flex-direction: column;
          border-radius: 0 10px 10px 0;
          margin: 8px 8px 8px 0;
        }
        .cont4-itm {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(19, 27, 116, 0.04);
          font-family: EncodeSans-medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: #131b74;
          width: 208px;
          height: 24px;
          padding: 24px 0 24px 0;
          margin: 0 24px 0 24px;
        }
        #action {
          background: rgba(19, 27, 116, 0.04);
          font-family: EncodeSans-bold;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.15px;
          color: rgba(0, 0, 0, 0.7);
          border-radius: 0 16px 0 0;
          padding: 24px 0px 23px 24px;
          margin: 0 !important;
          width: auto;
        }
        .cont4-icon {
          width: 24px;
          height: 24px;
        }
        #last {
          border-bottom: 0;
          padding: 24px 0px 24px 0px;
          margin: 0 24px;
        }
        .cont4-decs {
          width: 136px;
          height: 22px;
        }
        .cont4-icon1 {
          width: 15px;
        }
        .down-arrow {
          display: none;
        }
        @media screen and (min-width: 1281px) and (max-width: 1400px) {
        }
        @media screen and (max-width: 500px) {
          .down-arrow {
            display: block;
            padding-right: 10px;
          }
          .rotate {
            transform: rotate(180deg);
          }
          .act-container {
            display: none;
          }
          .cont4-itm {
            width: auto;
          }
          #action {
            background: rgba(19, 27, 116, 0.04);
            border-radius: 16px;
            padding: 24px 24px 22px;
            margin: 0;
            border-bottom: none;
          }
          .act-mob {
            margin: 0 auto;
            width: auto;
            border-radius: 16px;
            padding: 8px;
            background-color: #ffffff;
            display: block;
          }

          .cont4-decs {
            width: 198px;
            margin-left: 10px;
          }
          .cont4-icon1 {
            padding-right: 10px;
          }
          .arrow {
            transform: rotate(180deg);
          }
        }
        @media screen and (max-width: 999px) and (min-width: 500px) {
          .act-container {
            margin: 10px auto;
            width: 95%;
            border-radius: 16px;
            padding: 8px;
          }
          .cont4-itm {
            width: auto;
          }
          #action {
            border-radius: 16px 16px 0 0;
          }
        }
      </style>
      <div class="act-container">
        <paper-elements class="cont4-itm" id="action">
          <div>Actions</div>
          <div>
            <iron-icon
              src="../../assets/ui-element-14-icons-chevron-down.svg"
              class="down-arrow"
            ></iron-icon>
          </div>
        </paper-elements>
        <paper-elements class="cont4-itm">
          <div class="cont4-icon">
            <iron-icon src="../../assets/password.png"></iron-icon>
          </div>
          <div class="cont4-decs">Change password</div>
          <div class="cont4-icon1">
            <iron-icon src="../../assets/arrow.png"></iron-icon>
          </div>
        </paper-elements>
        <paper-elements class="cont4-itm">
          <div class="cont4-icon">
            <iron-icon src="../../assets/address.png"></iron-icon>
          </div>
          <div class="cont4-decs">Change address</div>
          <div class="cont4-icon1">
            <iron-icon src="../../assets/arrow.png"></iron-icon>
          </div>
        </paper-elements>
        <paper-elements class="cont4-itm">
          <div class="cont4-icon">
            <iron-icon src="../../assets/mail.png"></iron-icon>
          </div>
          <div class="cont4-decs">Change email</div>
          <div class="cont4-icon1">
            <iron-icon src="../../assets/arrow.png"></iron-icon>
          </div>
        </paper-elements>
        <paper-elements class="cont4-itm" id="last">
          <div class="cont4-icon">
            <iron-icon src="../../assets/manage-limit.png"></iron-icon>
          </div>
          <div class="cont4-decs">Manage alerts</div>
          <div class="cont4-icon1">
            <iron-icon src="../../assets/arrow.png"></iron-icon>
          </div>
        </paper-elements>
      </div>

      <div class="act-mob">
        <div class="cont4-itm" id="action">
          <div>Actions</div>
          <div>
            <iron-icon
              src="../../assets/ui-element-14-icons-chevron-down.svg"
              on-click="openCollapse"
              id="arrow"
              class="down-arrow"
            ></iron-icon>
          </div>
        </div>
        <iron-collapse id="collapse">
          <div class="cont4-itm">
            <div class="cont4-icon">
              <iron-icon src="../../assets/password.png"></iron-icon>
            </div>
            <div class="cont4-decs">Change password</div>
            <div class="cont4-icon1">
              <iron-icon src="../../assets/arrow.png"></iron-icon>
            </div>
          </div>
          <div class="cont4-itm">
            <div class="cont4-icon">
              <iron-icon src="../../assets/address.png"></iron-icon>
            </div>
            <div class="cont4-decs">Change address</div>
            <div class="cont4-icon1">
              <iron-icon src="../../assets/arrow.png"></iron-icon>
            </div>
          </div>
          <div class="cont4-itm">
            <div class="cont4-icon">
              <iron-icon src="../../assets/mail.png"></iron-icon>
            </div>
            <div class="cont4-decs">Change email</div>
            <div class="cont4-icon1">
              <iron-icon src="../../assets/arrow.png"></iron-icon>
            </div>
          </div>
          <div class="cont4-itm" id="last">
            <div class="cont4-icon">
              <iron-icon src="../../assets/manage-limit.png"></iron-icon>
            </div>
            <div class="cont4-decs">Manage alerts</div>
            <div class="cont4-icon1">
              <iron-icon src="../../assets/arrow.png"></iron-icon>
            </div>
          </div>
        </iron-collapse>
      </div>
    `;
  }
  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
  openCollapse() {
    this.$.collapse.toggle();
    if (this.shadowRoot.querySelector("#arrow").classList.contains("rotate")) {
      this.shadowRoot.querySelector("#arrow").classList.remove("rotate");
    } else {
      this.shadowRoot.querySelector("#arrow").classList.add("rotate");
    }
  }
}
customElements.define("profile-actions", ProfileActions);
