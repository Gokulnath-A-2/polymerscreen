import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-card/paper-card.js";
import "@polymer/iron-ajax";

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class ProfileDetails extends PolymerElement {
  static get properties() {
    return {
      info: {
        type: Object,
      },
    };
  }

  static get template() {
    return html`
      <style>
        .flex {
          padding: 40px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-radius: 16px 0 0 16px;
          background-color: #ffffff !important;
        }
        .flex1 {
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(19, 27, 116, 0.1);
        }
        .user-image {
          width: 144px;
          height: 144px;
        }
        .user-name {
          width: 144px;
          height: 32px;
          font-family: EncodeSans-medium;
          font-size: 24px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.33;
          letter-spacing: 0.18px;
          color: #000;
          padding: 24px 0 8px;
        }
        .user-number {
          width: 107px;
          height: 22px;
          font-family: EncodeSans-medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
          padding: 8px 0 4px;
        }
        .user-mailid {
          width: 161px;
          height: 22px;
          font-family: EncodeSans-medium;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
          padding: 4px 62px 31px 0;
        }
        .cont-item {
          width: 240px;
          height: 56px;
        }
        .txt-muted {
          font-family: EncodeSans-regular;
          font-size: 12px;
          line-height: 1.67;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.67;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.6);
        }
        .bld-fnt2 {
          font-size: 14px;
          font-family: EncodeSans-medium;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.57;
          letter-spacing: 0.2px;
          color: rgba(0, 0, 0, 0.8);
        }
        .prf-image {
          width: 144px;
          height: 144px;
        }
        .cont-item1 {
          padding: 20px 0px 0px 39px;
          width: 240px;
          height: 56px;
        }
        .cont-item2 {
          padding: 0 00px 20px 39px;
          width: 240px;
          height: 84px;
        }
        .flex2 {
          width: 600px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          padding: 44px 0px 0 0px;
        }
        #lst-item {
          border-bottom: none !important;
        }
        @media screen and (min-width: 1281px) and (max-width: 1400px) {
          .flex {
            padding: 40px 45px;
          }
          .cont-item1 {
            padding: 20px 0px 0px 43px;
            width: 252px;
          }
          .cont-item2 {
            width: 252px;
          }
        }
       
        @media screen and (max-width: 500px) {
          .flex {
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            padding: 40px 0 0 0;
          }
          p {
            padding: 12px 0 7px 0;
            margin: 0;
          }
          .prf-image {
            margin: -15px -1px 0 0;
            width: 144px;
            height: 144px;
          }
          .flex1 {
            width: 90%;
            margin: 0 auto;
            align-items: center;
            border-right: none;
            border-bottom: 1px solid rgba(19, 27, 116, 0.1);
          }
          .user-number,
          .user-mailid {
            font-size: 14px;
            font-weight: 500;
          }
          .user-mailid {
            padding: 0 0 19px 0;
          }
          .flex2 {
            width: 90%;
            margin: 10px auto;
            padding: 0px 0 0px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }
          .user-name {
            padding-top: 0;
          }
          .cont-item1 {
            line-height: 1.57;
            display: flex;
            flex-direction: column;
            justify-content: start;
            height: 56px;
            padding: 16px 0 5px 0px;
            margin: 0;
            width: 296px;
            height: 56px;
          }
          #act {
            padding: 20px 0 10px 0;
          }
          .cont-item2 {
            line-height: 1.57;
            height: 68px;
            margin: 0;
            padding: 16px 0 12px 0;
            width: 100%;
          }
          .bld-fnt2 {
            font-family: EncodeSans-medium;
            margin: 3px 0 3px 0;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.57;
            letter-spacing: 0.2px;
            color: rgba(0, 0, 0, 0.8);
          }
        }
        @media screen and (max-width: 999px) and (min-width: 768px) {
          .flex {
            width: 86%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            border-radius: 16px;
          }
          .flex2 {
            display: flex;
            flex-direction: column;
          }
        }
        @media screen and (max-width: 767px) and (min-width: 670px) {
          .flex {
            width: 85%;
            display: flex;
            flex-direction: row;

            border-radius: 16px;
          }
          .flex2 {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        @media screen and (max-width: 669px) and (min-width: 500px){
          .flex1{
            border-right:none;
            align-items: center;
          }
          .user-mailid{
            padding:0;
          }
          .flex{
            border-radius:16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right:none;
          }
          .flex2 {
            width:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      </style>
      <iron-ajax
        auto
        url="http://localhost:3000/profile"
        handle-as="json"
        on-response="handleResponse"
      ></iron-ajax>

      <div class="flex">
        <div class="flex1">
          <div class="user-image">
            <img src="../../assets/edit-profile.png" class="prf-image" />
          </div>
          <div class="user-name">[[info.name]]</div>
          <div class="user-number">[[info.phone-no]]</div>
          <div class="user-mailid">[[info.e-mail]]</div>
        </div>
        <div class="flex2">
          <div class="cont-item1" id="act">
            <div class="txt-muted">primary account</div>
            <paper-element class="bld-fnt2">[[info.account-no]]</paper-element>
          </div>
          <div class="cont-item1">
            <div class="txt-muted">PAN number</div>
            <paper-element class="bld-fnt2">[[info.pan-no]]</paper-element>
          </div>
          <div class="cont-item2">
            <div class="txt-muted">Communication address</div>
            <paper-element class="bld-fnt2">[[info.address]]</paper-element>
          </div>
          <div class="cont-item2">
            <div class="txt-muted">Permanent address</div>
            <paper-element class="bld-fnt2"
              >[[info.permanent-address]]</paper-element
            >
          </div>
        </div>
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
  handleResponse(event) {
    const response = event.detail.response;
    this.info = response;
    console.log(this.info);
  }
}

customElements.define("profile-details", ProfileDetails);
