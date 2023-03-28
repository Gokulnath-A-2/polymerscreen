import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icons/iron-icons.js";
import "./profile-details.js";
import "./profile-actions.js";
import "./profile-header.js";
import "@polymer/iron-collapse/iron-collapse.js";
/**
 * @customElement
 * @polymer
 */
class ScreenApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        .screen{
          position:absolute;
          top:0;
          left:0;
          display:flex;
          flex-direction:row;
          justify-content: flex-start;
        }
        ul{
          padding:0px;
          list-style: none;
          margin:0;
        }
        .nav-icon{
          padding:12px 0px;
          width:24px;
          height:24px;
        }
        
        .sidebar {
          display: flex;
          flex-direction: column;
          width: 104px;
          padding: 20px 16px;
          background-color: #0D1251;
          box-sizing: border-box;
          align-items: center;
          overflow-y: scroll !important;
          overflow-x: hidden;
          z-index: 3;
          transition: width 0.5s ease;
          height:695px;
        }
        .sidebar-expanded {
          width: 240px;
          align-items: flex-start;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #3258CF;
          border-radius: 4px;
        }
        .menu {
          margin-bottom: 41px;
          /* align-self: stretch; */
        }
        .menu img {
          height: 24px;
          color: white;
        }
        .menu-items {
          list-style: none;
        }
        .menu-items li {
          padding:0 22px;
          margin:0 0px 19px 3px;
          /* padding: 12px 0; */

        }
        .menu-items li:hover{
          width:auto;
          background-color: rgba(255, 255, 255, 0.1);
          border-left: 4px solid #e6006b;
          border-radius: 8px;
          margin:0 0px 19px 3px;
          padding:0 22px 0 18px;
        }
        .menu-items img {
          color: white;
        }
        .menu-items img:last-child {
          margin-bottom: 0;
        }
        .menu-items a {
          color: white;
          font-family: "Encodesans-Semibold";
          font-size: 14px;
          font-weight: 600;
          line-height: 1.57;
          letter-spacing: 0.2px;
        }
        
        .menu-toggle {
          width:auto;
          box-sizing: border-box;
          padding: 2.3px 0;
          display: flex;
          align-items: center;
          gap: 17px;
          border-left: 2px solid transparent;
          border-radius: 8px;
        }
        .bg{
          width:1176px;
          height:695px;
          box-shadow: 0 4px 14px 1px rgba(0,0,0,0,5);
          background-color:#f7f8fe;
          position:absolute;
          left:104px;
        }
          .profile{
          width: 126px;
          height: 28px;
          font-family: EncodeSans-medium;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.4;
          letter-spacing: 0.15px;
          color: rgba(0, 0, 0, 0.7);
          padding:32px 24px;
            }
            .prf-image{
              display:none;
            }
        .content{
          margin: 0 23px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    width: 1128px;
    height: 379px;
    box-shadow: 0 4px 14px 1px rgb(0 0 0 / 5%);
        }
        profile-details{
          width:864px;
        }
        profile-actions{
          width:264px;
          background-color:#ffffff;
          border-radius:0px 20px 20px 0;
          
        }
        .header{
          width:100%;
        
        }
        .ham-icon::after{
          border-left: 4px solid #e6006b;
        }
      
        
                .menu{
                  padding:0 22px;
                }
                #list{
                  width:115px;
                }
          
        @media screen and (min-width:1281px) and (max-width:1400px){
          .screen{
            width:100%;
            
          }
          .sidebar{
            height:690px;
          }
          .bg{
            width:92%;
            height:690px;
          }
          .content{
            margin:0 auto;
            width:1170px;
          }
          profile-details{
          width:906px;
        }
          .profile{
            padding:32px 0;
            width:1170px;
            margin:0 auto;
          }

        }
     
        @media screen and (max-width:500px){
          .sidebar{
            display:none;
          }
          .screen{
            width:100%;
          }
        
          .header{
            display:none;
          }
          .bg{
            height:auto;
            width:100%;
            background-color:#f7f8fe;
            left:0;
          }
          .image{
            width:14%;
          }
          .prf-image{
            display:block;
            padding:0 0 0 35%;
          }
          .profile{
            font-size:17.5px;
            height:56px;
            padding:0 0 0 0;
            width:100%;
            display:flex;
            flex-direction:row;
            background-color:#131b74;
            justify-content:flex-start;
            color:#ffffff;
            align-items:center;
          }
          p{
            padding:0;
            margin:0;
          }
          .content{
            margin:5% auto;
            height:auto;
          width:90%;
          display:flex;
          flex-direction:column;
          justify-content:space-evenly;
          background-color:#f7f8fe;
          box-shadow:none;
        }
        profile-details{
          width:100%;
          border-radius: 16px;
          box-shadow: 0 4px 14px 1px rgb(0 0 0 / 5%);
        }
        profile-actions{
          height:auto;
          width:100%;
          margin:25px 0 0;
          border-radius: 16px;
          box-shadow: 0 4px 14px 1px rgb(0 0 0 / 5%);
        }
        }
        @media screen and (max-width:999px)and (min-width: 768px){
         
          .screen{
            width:100%;
          }
          .bg{
            width:84%;
            height:1100px;
          }
          .content{
            width:90%;
            height:940px;
            display:flex;
            flex-direction:column;
            box-shadow:none;
            justify-content:space-evenly;
            margin:0 auto;
          }
          profile-details{
          width:100%;
          border-radius:20px;
        }
        profile-actions{
          width:100%;
          border-radius:20px;
        }
        
        .sidebar{
          height:1100px;
        } 
        }
        @media screen and (max-width:768px)and (min-width: 668px){
          
          .sidebar{
          height:1100px;
        } 
          .screen{
            width:100%;
          }
          .bg{
            width:90%;
            height:1100px;
          }
          .content{
            width:90%;
            height:940px;
            display:flex;
            flex-direction:column;
            box-shadow:none;
            justify-content:space-evenly;
            margin:0 auto;
          }
          profile-details{
          width:100%;
          border-radius:20px;
        }
        profile-actions{
          margin:20px 0;
          width:100%;
          border-radius:20px;
        }
      
        }
        @media screen and (max-width:667px)and (min-width: 500px){
  
          .sidebar{
          height:1340px;
        } 
          .screen{
            width:100%;
          }
          .bg{
            width:85%;
            height:1340px;
          }
          .content{
            width:90%;
            height:1175px;
            display:flex;
            flex-direction:column;
            box-shadow:none;
            justify-content:space-evenly;
            margin:0 auto;
          }
          profile-details{
          width:100%;
          border-radius:20px;
        }
        profile-actions{
          margin:20px 0;
          width:100%;
          border-radius:20px;
        }
      }
        </style>
        <div class="screen">
        <div class$="{{_getSideBarClass(toggle)}}" id="sideBarCall">
        <div class="menu">
          <template is="dom-if" if="{{toggle}}">
            <div>
              <img
                src="/src/screen-app/assets/cancel.png"
                alt="cancel"
                on-click="change"
              />
            </div>
          </template>
          <template is="dom-if" if="{{!toggle}}">
            <div>
              <img
                src="/src/screen-app/assets/menu.png" 
                alt="menu"
                on-click="change"
              />
            </div>
          </template>
        </div>
        <ul class="menu-items">
          <template is="dom-repeat" items="{{iconList}}">
            <li class="list">
              <div class="menu-toggle">
                <img src="/src/screen-app/assets/{{item.image}}.png" class="nav-icon"/>
                <template is="dom-if" if="{{toggle}}" >
                  <a id="list">{{item.title}}</a>
                </template>
              </div>
            </li>
          </template>
        </ul>
      </div>
          <div class="bg"> 
                  <div class="header">
                    <profile-header>
                    </profile-header>
                    </div>
              <div class="profile">
                    <div class="image">
                  <iron-icon src="../../assets/ui-element-14-icons-arrow-left@2x.png" class="prf-image"></iron-icon></div>
                  <div class="profile-content">Profile details</div>
                  </div>
                <div class="content">
                  <profile-details>
                    </profile-details>
                  <profile-actions>
                    </profile-actions>
      </div>
        </div>
      </div>
      </div>
      
    `;
  }

  static get properties() {
    return {
      iconList: {
        type: Array,
        value: [
          { image: "home", title: "Home" },
          { image: "savings", title: "savings" },
          { image: "deposit", title: "deposit" },
          { image: "credit-cards", title: "Credit Card" },
          { image: "loans", title: "Loan" },
          { image: "bills", title: "Bills" },
          { image: "payee", title: "Payees" },
        ],
      },
      toggle: {
        type: Boolean,
        value: false,
      },
    };
  }

  change() {
    this.toggle = !this.toggle;
  }
  _getSideBarClass(toggle) {
    return toggle ? "sidebar sidebar-expanded" : "sidebar";
  }
}

window.customElements.define("screen-app", ScreenApp);
