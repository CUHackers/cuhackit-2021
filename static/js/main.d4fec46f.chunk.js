(this["webpackJsonpcuhackit-2021"]=this["webpackJsonpcuhackit-2021"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"day":"Saturday","hours":[{"hour":"10:00","activities":["Opening Ceremony","",""]},{"hour":"10:30","activities":["Hacking Begins!","Splunk Workshop",""]},{"hour":"11:00","activities":["Splunk Workshop","",""]},{"hour":"11:30","activities":["Hacking","",""]},{"hour":"12:00","activities":["Hacking","",""]},{"hour":"12:30","activities":["Azure Workshop","",""]},{"hour":"1:00","activities":["Azure Workshop","Recruiting Session 1",""]},{"hour":"1:30","activities":["Recruiting Session 1","Trivia",""]},{"hour":"2:00","activities":["Recruiting Session 2","",""]},{"hour":"2:30","activities":["Recruiting Session 2","Bob Ross Time",""]},{"hour":"3:00","activities":["Recruiting Session 3","",""]},{"hour":"3:30","activities":["Recruiting Session 3","Splunk Workshop",""]},{"hour":"4:00","activities":["Among Us","",""]},{"hour":"4:30","activities":["Splunk Workshop","Microsoft Q+A",""]},{"hour":"5:00","activities":["Microsoft Q+A","Air Force Challenge",""]},{"hour":"5:30","activities":["Recruiting Session 4","",""]},{"hour":"6:00","activities":["Recruiting Session 4","Scavenger Hunt Ends",""]},{"hour":"6:30","activities":["Hacking","",""]},{"hour":"7:00","activities":["Game Tournament","",""]},{"hour":"8:00","activities":["Jackbox","",""]}]},{"day":"Sunday","hours":[{"hour":"10:00","activities":["Devpost Due","",""]},{"hour":"10:30","activities":["Hacking Ends","",""]},{"hour":"11:00","activities":["Demos/Judging","",""]},{"hour":"11:30","activities":["Demos/Judging","",""]},{"hour":"12:00","activities":["Demos/Judging","",""]},{"hour":"12:30","activities":["Demos/Judging","",""]},{"hour":"1:00","activities":["Winners Confirmed","",""]},{"hour":"1:30","activities":["Closing Ceremony","",""]}]}]')},function(e){e.exports=JSON.parse('[{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/AWS_logo_RGB.SVG","url":"https://aws.amazon.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/splunk2crop.svg","url":"https://www.splunk.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/SoftdocsCropped.svg","url":"https://www.softdocs.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/ASHPadding.png","url":"https://www.ashcompanies.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/LPL.png","url":"https://www.lpl.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/capgeminiNoPadding.png","url":"https://www.capgemini.com/us-en/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/GLS.png","url":"https://glsauto.com/"},{"imagelink":"https://cuhackit2021.s3.amazonaws.com/logos/blackbaud.png","url":"https://www.blackbaud.com/"}]')},,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var c=t(0),s=t(1),a=t.n(s),n=t(4),r=t.n(n),o=(t(13),t(14),t(15),t(2)),h=t(5);var l=function(){var e=a.a.createRef(),i=a.a.createRef(),t=a.a.createRef();return Object(s.useEffect)((function(){o.a.registerPlugin(h.a),o.a.to(e.current,{yPercent:-25,ease:"none",scrollTrigger:{trigger:".pSection",scrub:!0,pinSpacing:!1}}),o.a.to(t.current,{yPercent:-25,ease:"none",scrollTrigger:{trigger:".pSection",scrub:!0,pinSpacing:!1}}),o.a.to(i.current,{yPercent:25,ease:"none",scrollTrigger:{trigger:".pSection",scrub:!0,pinSpacing:!1}})}),[]),Object(c.jsxs)("div",{id:"vertical",ref:i,children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h1",{children:"CUhackit"}),Object(c.jsx)("h2",{children:"January 30-31, 2021"})]}),Object(c.jsx)("a",{className:"apply",href:"https://cucheckin.herokuapp.com",children:"Apply Now"}),Object(c.jsx)("div",{ref:e,id:"sand"}),Object(c.jsx)("div",{ref:t,id:"kitegals"})]})};t(16),t(17);var d=function(){return Object(c.jsx)("div",{id:"about",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"text break",children:[Object(c.jsx)("h3",{children:"A Little About Us"}),Object(c.jsx)("p",{children:"Join us for a day of building, learning, and having fun at South Carolina\u2019s premiere hackathon! Come with old friends or meet new ones at the event and get ready for an action-packed 24-hours. No matter your major or level of experience... "})]}),Object(c.jsxs)("div",{className:"text",id:"line",children:[Object(c.jsx)("div",{className:"stamp"}),Object(c.jsxs)("div",{id:"wewantto",children:[Object(c.jsxs)("div",{className:"lines",children:[Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{})]}),Object(c.jsx)("h3",{children:"We Want to "}),Object(c.jsx)("h3",{children:'"CU" hack it!'})]})]})]})})},u=(t(18),t(6)),j=Array.from(u);var m=function(){var e=j.map((function(e,i){return Array.isArray(e.hours)?Object(c.jsxs)("div",{className:"day",id:e.day,children:[Object(c.jsx)("h4",{className:"dayname",children:e.day},i),Object(c.jsx)("div",{className:"hourmap",children:e.hours.map((function(e,i){return Object(c.jsxs)("div",{className:"hourly",children:[Object(c.jsx)("div",{className:"timestamp",children:Object(c.jsx)("p",{children:e.hour},i)}),e.activities.map((function(e,i){return Object(c.jsx)("div",{className:""===e?"event":"occupied event",children:Object(c.jsx)("p",{children:e},i)},i)}))]},i)}))})]},i):""}));return Object(c.jsx)("div",{id:"schedule",children:Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("h3",{children:"Schedule"}),Object(c.jsx)("div",{className:"days",children:e})]})})},b=(t(19),t(7)),g=Array.from(b);var p=function(){var e=g.map((function(e,i){return Object(c.jsx)("a",{className:"partner",href:e.url,children:Object(c.jsx)("img",{alt:"partner logo",src:e.imagelink},i)},i)}));return Object(c.jsx)("div",{id:"partners",children:Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("h3",{children:"brought to you by:"}),Object(c.jsx)("div",{id:"partnercloud",children:e})]})})};t(20);var v=function(){return Object(c.jsxs)("div",{id:"contact",className:"text",children:[Object(c.jsx)("h3",{children:"Stay in touch!"}),Object(c.jsxs)("div",{className:"linkWrapper",children:[Object(c.jsxs)("div",{id:"socials",children:[Object(c.jsx)("a",{className:"social",href:"https://twitter.com/cuhackit?lang=en",children:Object(c.jsx)("i",{id:"socialIcon",className:"fa fa-twitter","aria-hidden":"true"})}),Object(c.jsx)("a",{className:"social",href:"https://www.instagram.com/cuhackit/?hl=en",children:Object(c.jsx)("i",{id:"socialIcon",className:"fa fa-instagram","aria-hidden":"true"})}),Object(c.jsx)("a",{className:"social",href:"https://www.facebook.com/CUhackers/",children:Object(c.jsx)("i",{id:"socialIcon",className:"fa fa-facebook","aria-hidden":"true"})})]}),Object(c.jsx)("a",{style:{textTransform:"none"},href:"mailto:cuhackit@gmail.com",className:"newsletter",children:"Email Us!"})]})]})};var x=function(){return Object(c.jsxs)("div",{id:"horizontalInset",children:[Object(c.jsx)("div",{id:"cliffface",children:Object(c.jsxs)("div",{id:"clifffaceContent",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{id:"arrowContainer",children:[Object(c.jsx)("div",{id:"arrow"}),Object(c.jsx)("p",{id:"arrowLabel",children:"Scroll!"})]}),Object(c.jsx)(m,{})]})}),Object(c.jsx)("div",{id:"van"}),Object(c.jsxs)("div",{id:"skyContainer",children:[Object(c.jsx)(p,{}),Object(c.jsx)(v,{})]}),Object(c.jsx)("div",{id:"roadimg"})]})};var O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"horizWrapper",children:[Object(c.jsx)("div",{className:"divLine"}),Object(c.jsx)(x,{})]})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(i){var t=i.getCLS,c=i.getFID,s=i.getFCP,a=i.getLCP,n=i.getTTFB;t(e),c(e),s(e),a(e),n(e)}))};r.a.render(Object(c.jsx)(O,{}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.d4fec46f.chunk.js.map