import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-collapse/iron-collapse.js";
import "@polymer/iron-ajax";
import "@polymer/iron-dropdown/iron-dropdown.js";
import "@polymer/paper-button";
import "@polymer/paper-tabs";
/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ProfileHeader extends PolymerElement {
  static get properties() {
    return {
      toggle: {
        type: Boolean,
        value: false,
      },
      notification: {
        type: Array,
        value: [],
      },
      viewMore: {
        type: Boolean,
        value: true,
        notify: true,
        observer:"_getnotification",
      },
      button: {
        type: Boolean,
        value: true,
        notify: true,
      },
      response:{
        type:Array,
        value:[],
      }
    };
  }

  static get template() {
    return html`
      <style>
        .header {
          box-shadow: 0 4px 14px 1px rgb(0 0 0 / 5%);
          background-color: #ffffff;
          height: 64px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .rgt-header {
          padding: 16px 24px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }
        .lft-header {
          padding: 0px 24px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        p {
          margin: 0;
        }
        .rgt-content {
          width: 80px;
          height: 15px;
          font-family: EncodeSans-bold;
          font-size: 11.5px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.58px;
          color: #1f1f20;
        }
        .rgt-image {
          padding-top: 10px;
          width: 32px;
          height: 32px;
        }
        .navimage {
          display: block;
          width: 32px;
          height: 32px;
        }
        .header1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .lft-profile {
          height: 55px;
        }
        .lft-profile:hover {
          margin: 4px 0 0px 0;

          border-bottom: 1px solid #e6006b;
          border-bottom-width: 4px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
        }
        .hover {
          margin: 13px 0 0;
          border-right: 1px solid lightgray;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .profile-image {
          width: 32px;
          height: 32px;
          padding: 0 8px 0 20px;
        }
        .profile-name {
          width: 85px;
          height: 22px;
          font-family: EncodeSans-medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
          padding: 0 16px 0 0;
        }
        .navicon {
          padding: 20px 19px;
          width: 24px;
          height: 24px;
        }
        #last-icon {
          padding: 20px 0 20px 20px;
          width: 24px;
          height: 24px;
        }
        #collapse1 {
          position: absolute;
          width: 344px;
          top: 77px;
          right: 100px;
          background-color: white;
          z-index: 3;
          border-radius: 16px;
          box-shadow: 0 6px 20px 1px rgba(0, 0, 0, 0.16);
        }
        .alerts {
          margin-top: 8px;
         
        }
        .not-section {
          margin: 0px 16px 0px 8px;
          padding: 8px 16px 8px 8px;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid rgba(19, 27, 116, 0.1);
        }
        .not-section:hover {
          margin: 0px 8px;
          padding: 8px 24px 8px 8px;
          border-radius: 10px;
          background-color: rgba(230, 0, 107, 0.06);
        }
        .not-content {
          display: flex;
          flex-direction: column;
        }
        .not-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .not-image {
          width: 32px;
          height: 32px;
          margin: auto 7px auto 0;
          padding: 8px;
          border-radius: 8px;
        }
        .not-bold {
          font-family: EncodeSans-semibold;
          font-size: 12px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 20px;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.7);
        }
        .not-desc {
          margin: 0px 0 0;
          font-family: EncodeSans-regular;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 20px;
          letter-spacing: 0.4px;
          color: #000;
        }
        .not-time {
          font-family: EncodeSans-regular;
          font-size: 10px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 18px;
          letter-spacing: 0.3px;
          text-align: right;
          color: rgba(0, 0, 0, 0.6);
        }
        .not-button {
          font-family: EncodeSans-medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 22px;
          letter-spacing: 0.2px;
          color: #131b74;
          padding: 5px 16px;
        }
        .not-button:hover {
          border-radius: 8px;
          border: solid 1px #131b74;
          padding: 4px 15px 4px 15px;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .list {
          padding: 5px 2px 5px 2px;
        }
        paper-button {
          --paper-button: {
            text-transform: inherit;
            width: 95%;
            margin: 0px 8px 8px;
            font-family: EncodeSans-medium;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 22px;
            letter-spacing: 0.2px;
            color: #131b74;
            background-color: rgba(19, 27, 116, 0.04);
            border-radius: 0 0px 10px 10px;
          }
        }
        .button {
          border-radius: 10px;
          width: 96%;
          margin: 0 7px 10px 7px;
        }
        #prmy-but {
          border-radius: 8px;
          border: solid 1px #131b74;
          padding: 4px 15px 4px 15px;
          margin-left: 10px;
        }
        #dropdown {
          border-radius: 10px;
          outline: none;
          position: absolute !important;
          left: 93% !important;
          top: 76px !important;
          z-index: 103;
          background-color: #ffffff;
          width: 60px;
          padding: 5px;
          box-shadow: 0 6px 20px 1px rgba(0, 0, 0, 0.16);
          font-family: EncodeSans-regular;
        }
        .collapseicon {
          margin-left: 5px;
        }
        .borderbottom{
          border-bottom:none !important;
        }
        @media screen and (min-width: 1281px) and (max-width: 1400px) {
          .lft-header {
            padding: 0 32px;
          }
          .navicon {
            padding: 20px 24px;
          }
        }
        @media screen and (max-width: 1270px) and (min-width: 1000px) {
          .header{
            width:95%;
          }
        }
        @media screen and (max-width: 999px) and (min-width: 767px) {
          .header {
            width: 100%;
          }
        }
        @media screen and (max-width:767px)and (min-width: 500px){
          
          .navicon{
            padding:20px 8px;
          }
          .profile-name{
            display:none;
          }
        }
      </style>
      <iron-ajax
        auto
        url="http://localhost:3000/header"
        handle-as="json"
        on-response="handleResponse"
      ></iron-ajax>

      <div class="header">
        <paper-element class="rgt-header">
          <div class="rgt-image">
            <iron-icon src="../../assets/yourbank-icon.png"></iron-icon>
          </div>
          <div class="rgt-content"><p>YOUR BANK</p></div>
        </paper-element>
        <paper-element class="lft-header">
          <div>
            <iron-icon
              src="../../assets/search.png"
              class="navicon"
            ></iron-icon>
          </div>

          <div>
            <iron-icon
              class="navicon"
              src="./assets/notification-dot.png"
              alt="icon"
              on-click="change"
            ></iron-icon>
            <iron-collapse id="collapse1">
              <div class="alerts">
                <template is="dom-repeat" items="{{notification}}">
                  <section class="not-section" id="border_{{index}}">
                    <div class="not-image">
                      <iron-image
                        src="src/screen-app/assets/[[item.image]].webp"
                      ></iron-image>
                    </div>
                    <div class="not-content">
                      <div class="not-heading">
                        <div class="not-bold">{{item.heading}}</div>
                        <div class="not-time">[[item.time]]</div>
                      </div>
                      <div class="not-desc">
                        <div>[[item.content]]</div>
                      </div>
                      <div class="buttons">
                        <template is="dom-if" if="{{item.remainder}}">
                          <div class="not-button">[[item.remainder]]</div>
                        </template>
                        <template is="dom-if" if="{{item.button}}">
                          <div class="not-button" id="prmy-but">
                            [[item.button]]
                          </div>
                        </template>
                      </div>
                    </div>
                  </section>
                </template>
              </div>
              <paper-button on-click="_button">
                <template is="dom-if" if="[[viewMore]]">
                  <div><p>View More</p></div>
                  <iron-icon
                    src="../../assets/ui-element-14-icons-chevron-down.svg"
                    class="collapseicon"
                  ></iron-icon>
                </template>
                <template is="dom-if" if="[[!viewMore]]">
                  <div><p>View Less</p></div>
                  <iron-icon
                    src="../../assets/ui-element-14-icons-chevron-up.svg"
                    class="collapseicon"
                  ></iron-icon>
                </template>
              </paper-button>
            </iron-collapse>
          </div>

          <div class="lft-profile">
            <div class="hover">
              <div class="profile-image">
                <img src="/../assets/edit-profile.png" class="navimage" />
              </div>
              <div class="profile-name">
                <p>Prayag Jaikar</p>
              </div>
            </div>
          </div>
          <div>
            <iron-icon
              src="../../assets/logout.png"
              class="navicon"
              id="last-icon"
              on-click="exit"
            ></iron-icon>
            <iron-dropdown
              id="dropdown"
              horizontal-align="right"
              class="logout"
            >
              <div slot="dropdown-content" class="list">log out!</div>
              <div slot="dropdown-content" class="list">Cancel</div>
            </iron-dropdown>
          </div>
        </paper-element>
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

  exit() {
    this.$.dropdown.toggle();
  }

  handleResponse(event) {
    const response = event.detail.response;
    this.response = response;
    this._getnotification(this.viewMore);
  }
  _getnotification(viewMore){
    var arr=this.response;
   if (!viewMore) {
      this.notification =arr;
    
    } else {
      this.notification = arr.slice(0, 3);
    }
  }
  change() {
    this.$.collapse1.toggle();
  }
  _button() {
    this.viewMore = !this.viewMore;
  }
}
customElements.define("profile-header", ProfileHeader);
