function loginScenarioHandler(scenario){s.linkTrackVars="eVar35,prop22";s.eVar35="Con:Home:Login Page:"+scenario;s.prop22="Con:Home:Login Page:"+scenario}function uclLoginScenarioHandler(scenario){s.linkTrackVars="eVar35,prop22";s.eVar35="con:pns:ise:login:"+scenario;s.prop22="con:pns:ise:login:"+scenario}function searchAnalytics(){if(omni.pageType=="SERP"){s.prop3=$("form:eq(0) input.bt-ser-txt").val();s.events="event2"}s.prop5=omniprop5;s.prop7="0";s.prop36="Con:Search Results Page";s.prop37="Con:Search";s.eVar2=s.prop3;s.eVar37=s.prop37;s.pageName="Con:Search Results";s.prop18=s.pageName;s.channel="Consumer";s.prop2="cb";s.server="home.bt.com";s.prop4=document.URL;s.prop6="home.bt.com";s.prop9="Not Logged In";if("loggedin"==user.getUserStatus()){s.prop9="Logged In"}s.eVar36=s.prop9;if(omni.pageType=="VideoSERP"){s.pageName="Con:VideoSearch Results";s.prop18=s.pageName;s.prop36=s.pageName;s.prop37="Con:VideoSearch";s.eVar37=s.prop37;s.events="event8"}var s_code=s.t();if(s_code){document.write(s_code)}}function videoAnalytics(currentHub){s.pageName="Con:"+currentHub+":Videos";s.prop18=s.pageName;s.prop36="Con:Videos";s.prop37=s.pageName;s.eVar37=s.prop37;var s_code=s.t();if(s_code){document.write(s_code)}}function shareEventHandler(evt){var socailPageTitle=$(document).find("title").text();if(socailPageTitle!=null&&socailPageTitle!=""){ga("send","event","socialshare","Share "+evt.data.service,encodeURIComponent(socailPageTitle))}else{ga("send","event","socialshare","Share "+evt.data.service,encodeURIComponent(evt.data.url))}var title="";if($("body").hasClass("articlepage")){title=$(".article-header h1").text()}else{var myRegexp=new RegExp(/http.*-1(\d+).*/i);var match=myRegexp.exec(evt.data.url);var $ele=$('#page-wrapper a.addthis_btn[href$="'+match[1]+'"]');title=$ele.parents(".content").find("h3 a").text().replace(/^\s+|\s+$/g,"")}var s=s_gi(suiteId);s.linkTrackVars="eVar37,eVar38,eVar39,prop36,prop37,prop38,prop39,events,products,prop50,prop52,eVar19,eVar52,eVar60,prop60";s.linkTrackEvents="event7";s.events="event7";s.prop52=evt.data.service;s.eVar52=s.prop52;if(omni.prop37){if(omni.prop37.indexOf("&")!=-1){omni.prop37=omni.prop37.replace(/&/g," and ")}s.prop37="Con:"+omni.prop37;s.eVar37=s.prop37;if(omni.prop38){if(omni.prop38.indexOf("&")!=-1){omni.prop38=omni.prop38.replace(/&/g," and ")}s.prop38=s.prop37+":"+omni.prop38;s.eVar38=s.prop38;if(omni.prop39){if(omni.prop39.indexOf("&")!=-1){omni.prop39=omni.prop39.replace(/&/g," and ")}s.prop39=s.prop38+":"+omni.prop39;s.eVar39=s.prop39}}}s.eVar60=$ele.parents("[data-mname]").attr("data-mname");s.prop60=s.eVar60;s.prop50="Con:Article:"+title;s.eVar19=s.prop50;s.products=";Con:Article:"+title;s.tl(this,"o",s.eVar19)}$(document).ready(function(){$("#shpwdlbl").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Login Page:Link:Show";s.prop50=s.eVar19;s.tl(this,"o",s.eVar19)});$("#btsignin").click(function(){s.linkTrackVars="eVar19,prop50,eVar31,events";s.linkTrackEvents="event18";s.eVar19="Con:Email:Login Page:Login Link";s.prop50="Con:Email:Login Page:Login Link";s.eVar31="Con:Login";s.events="event18";s.tl(this,"o","Con:Email:Login Page:Login Link")});$("#emailforgotpass").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Email:Login Page:Forgotten password";s.prop50="Con:Email:Login Page:Forgotten password";s.tl(this,"o","Con:Email:Login Page:Forgotten password")});$(".pri-nav-mybt-tab.PE-has-mega-menu.email").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Primary Nav:Link:Email";s.prop50=s.eVar19;s.tl(this,"o",s.eVar19)});$("#emailkeepmeloggedin").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Email:Login Page:Keep me logged in";s.prop50="Con:Email:Login Page:Keep me logged in";s.tl(this,"o","Con:Email:Login Page:Keep me logged in")});$("#findoutmore").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Email:Login Page:Find out more";s.prop50="Con:Email:Login Page:Find out more";s.tl(this,"o","Con:Email:Login Page:Find out more")});$("#emailloginsecurity").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Email:Login Page:Security";s.prop50="Con:Email:Login Page:Security";s.tl(this,"o","Con:Email:Login Page:Security")});$("#emailloginhelp").click(function(){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Email:Login Page:Help";s.prop50="Con:Email:Login Page:Help";s.tl(this,"o","Con:Email:Login Page:Help")});function emailerrorlogs(postcodemissing){s.linkTrackVars="eVar35,prop22,eVar6,prop4";s.eVar35="Con:Email:Login Page:"+postcodemissing;s.prop22="Con:Email:Login Page:"+postcodemissing;s.tl(this,"o","Con:Email:Login Page:"+postcodemissing)}$("ul.ser-opt a").click(function(){s.linkTrackVars="eVar19,prop50,events,products";s.linkTrackEvents="event2";s.events="event2";s.pageName="Con:"+document.title;s.prop50=s.pageName+":Link:Search on "+$(this).text();s.eVar19=s.prop50;s.linkName=s.prop50;s.lnk=s.co(this);s.tl(this,"o",s.eVar19)});if(omni.prop36){s.prop36="Con:"+omni.prop36;if(omni.prop36=="BTArticle"){s.prop36="Con:Article";s.pageName=s.prop36+":"+omni.title;s.prop57=s.prop36+":"+omni.title;s.prop58=s.prop36+":"+omni.asset_id;s.eVar57=s.prop57;s.eVar58=s.prop58;s.events="event5";s.products=";Con:Article:"+omni.title}else{if(omni.title.indexOf("&")!=-1){omni.title=omni.title.replace(/&/g," and ")}s.pageName="Con:"+omni.title}if(omni.prop37){if(omni.prop37.indexOf("&")!=-1){omni.prop37=omni.prop37.replace(/&/g," and ")}s.prop37="Con:"+omni.prop37;s.eVar37=s.prop37;if(omni.prop38){if(omni.prop38.indexOf("&")!=-1){omni.prop38=omni.prop38.replace(/&/g," and ")}s.prop38=s.prop37+":"+omni.prop38;s.eVar38=s.prop38;if(omni.prop39){if(omni.prop39.indexOf("&")!=-1){omni.prop39=omni.prop39.replace(/&/g," and ")}s.prop39=s.prop38+":"+omni.prop39;s.eVar39=s.prop39}}}}if(omni.pageType==="TagPage"){s.pageName="Con:Tag:"+omni.tag;s.prop18=s.pageName;s.prop36="Con:Tag";s.prop37="Con:Tag";s.eVar37=s.prop37}if(omni.pageType==="AuthorPage"){s.pageName="Con:Author:"+omni.author;s.prop18=s.pageName;s.prop36="Con:Author";s.prop37="Con:Author";s.eVar37=s.prop37}if(omni.pageType==="HomeLoginPage"){s.pageName="Con:Home:Login Page";s.hier1="Con,Home,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:Home";s.prop38="Con:Home:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="MyBTLoginPage"){s.pageName="Con:My BT:Login Page";s.hier1="Con,My BT,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:My BT";s.prop38="Con:My BT:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="SportLoginPage"){s.pageName="Con:Sport:Login Page";s.hier1="Con,Sport,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Sport Login Page";s.prop37="Con:Sport";s.prop38="Con:Sport:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="UCLLoginPage"){s.pageName="con:pns:ise:login";s.hier1="Con,pns,ise";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="con:pns:ise:login";s.prop37="con:pns";s.prop38="con:pns:ise";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="ESTLoginPage"){s.pageName="Con:BT TVE:EST Login Page";s.hier1="Con,BT TVE,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:BT TVE";s.prop38="Con:BT TVE:EST Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="TVELoginPage"){s.pageName="Con:BT TVE:Login Page";s.hier1="Con,BT TVE,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:BT TVE";s.prop38="Con:BT TVE:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="EmailLoginPage"){s.pageName="Con:Email:Login Page";s.hier1="Con,Email,Login";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:Email";s.prop38="Con:Email:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="YahooSamlErrorCompromise"){s.pageName="Con:Email:Login:Compromise";s.prop4=document.URL;s.prop9="Not Logged In";s.prop18=s.pageName;s.prop36="Con:Login Page";s.prop37="Con:Email";s.prop38="Con:Email:Login";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="YahooInterstitial"){s.pageName="Con:Email:Interstitial Page";s.prop4=document.URL;s.prop9="Logged In";s.prop18=s.pageName;s.prop36="Con:Yahoo Interstitial Page";s.prop37="Con:Email";s.prop38="Con:Email:Interstitial";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}if(omni.pageType==="owmInterstitial"){var url=document.URL;if(window.location.href.indexOf("migration")>-1){s.pageName="Con:Email:InterstitialPageMigrated";s.hier1="Con,Email,InterstitialPageMigrated";s.prop4=document.URL;s.prop9="Logged In";s.prop18=s.pageName;s.prop36="Con:InterstitialPageMigrated";s.prop37="Con:Email";s.prop38="Con:Email:InterstitialPageMigrated";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}else{if(window.location.href.indexOf("provision")>-1){s.pageName="Con:Email:InterstitialPageProvisioned";s.hier1="Con,Email,InterstitialPageProvisioned";s.prop4=document.URL;s.prop9="Logged In";s.prop18=s.pageName;s.prop36="Con:InterstitialPageProvisioned";s.prop37="Con:Email";s.prop38="Con:Email:InterstitialPageProvisioned";s.prop39="";s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}}}if(omni.pageType&&omni.customPageType){if(omni.pageType===omni.customPageType){s.pageName=omni.loginpageName;s.hier1=omni.loginhier1;s.prop4=omni.loginprop4;s.prop9=omni.loginprop9;s.prop18=s.pageName;s.prop36=omni.loginprop36;s.prop37=omni.loginprop37;s.prop38=omni.loginprop38;s.prop39=omni.loginprop39;s.eVar37=s.prop37;s.eVar38=s.prop38;s.eVar39=""}}if(omni.pageType==="PageNotFound"){s.pageType="errorPage"}s.channel="Consumer";s.prop2="cb";s.server="home.bt.com";s.prop4=document.URL;s.prop6="home.bt.com";s.prop18=s.pageName;s.prop9="Not Logged In";if("loggedin"==user.getUserStatus()){s.prop9="Logged In"}s.eVar36=s.prop9;$(function(){$('#page-wrapper a:not(".addthis_btn"):not(".link")').on("click",function(){var title=$(this).text().replace(/^\s+|\s+$/g,"");var link=$(this).attr("href");var s=s_gi(suiteId);s.linkTrackVars="eVar4,eVar37,eVar38,eVar39,prop36,prop37,prop38,prop39,events,products,prop50,eVar19,eVar60,prop60,prop52,eVar52";s.pageName="Con:"+document.title;s.eVar4=s.pageName;if($(this).parents("body").hasClass("articlepage")){title=$(".article-header h1").text();s.prop52="disqus";s.events="event7";s.linkTrackEvents="event7";if($(this).hasClass("related-article")){s.prop52="";s.events="event6";s.linkTrackEvents="event6"}}else{if($(this).hasClass("commentLink")){title=$(this).parents(".content").find("h3 a").text().replace(/^\s+|\s+$/g,"");s.events="event7";s.prop52="disqus";s.linkTrackEvents="event7"}else{if($(this).parent().parent().hasClass("image")){title=$(this).parents(".article").find(".content").find("h3 a").text().replace(/^\s+|\s+$/g,"")}}}s.eVar52=s.prop52;if(omni.prop37){if(omni.prop37.indexOf("&")!=-1){omni.prop37=omni.prop37.replace(/&/g," and ")}s.prop37="Con:"+omni.prop37;s.eVar37=s.prop37;if(omni.prop38){if(omni.prop38.indexOf("&")!=-1){omni.prop38=omni.prop38.replace(/&/g," and ")}s.prop38=s.prop37+":"+omni.prop38;s.eVar38=s.prop38;if(omni.prop39){if(omni.prop39.indexOf("&")!=-1){omni.prop39=omni.prop39.replace(/&/g," and ")}s.prop39=s.prop38+":"+omni.prop39;s.eVar39=s.prop39}}}s.eVar60=$(this).parents("[data-mname]").attr("data-mname");s.prop60=s.eVar60;var linkUrl=$(this).attr("href");if(typeof(linkUrl)!="undefined"&&(linkUrl.charAt(linkUrl.length-14)==1||linkUrl.charAt(linkUrl.length-25)==1)){s.prop50="Con:Article:"+title;s.events="event6";s.linkTrackEvents="event6"}else{s.prop50="Con:Link:"+$(this).text();s.events="";s.linkTrackEvents=""}var myRegexp=new RegExp(/.*-1(\d+)/i);if(typeof(link)!="undefined"&&link.match(myRegexp)){s.products=";Con:Article:"+title}if($(this).hasClass("tag-word")){s.events="event6";s.linkTrackEvents="event6";s.prop50="Con:Link:Tag:"+$(this).text();s.prop52="";s.eVar52=s.prop52;s.products=""}if($(this).hasClass("video-nav-item")){s.prop37="Con:VideoSearch";s.eVar37=s.prop37;s.prop50="Con:Link:"+$(this).text();s.events="";s.linkTrackEvents=""}if($(this).hasClass("image-nav-item")){s.prop37="Con:ImageSearch";s.eVar37=s.prop37;s.prop50="Con:Link:"+$(this).text();s.events="";s.linkTrackEvents=""}if($(this).hasClass("mv-video")){s.prop50="Con:Link:VideoSearch";s.events="";s.linkTrackEvents=""}if($(this).parents("div").hasClass("label")){s.prop50="Con:Link:"+$(this).text();s.events="";s.linkTrackEvents=""}if($(this).hasClass("archv-ser")){s.prop50="Con:Link:Archive:"+$(this).text();s.events="";s.linkTrackEvents=""}if($(this).hasClass("pb_business")){s.prop50="Con:Link:"+$(this).text();s.eVar19=s.prop50;s.eVar37=s.prop37;s.events="";s.linkTrackEvents=""}if($(this).hasClass("pb_residential")){s.prop50="Con:Link:"+$(this).text();s.eVar19=s.prop50;s.eVar37=s.prop37;s.events="";s.linkTrackEvents=""}if($(this).is("#btd_login")){s.linkTrackVars="eVar19,prop50,events";s.linkTrackEvents="event18";s.eVar19="Con:Home:Login Page:Login Link";s.prop50="Con:Home:Login Page:Login Link";s.eVar31="Con:Login";s.events="event18";s.tl(this,"o","Con:Home:Login Page:Login Link")}if($(this).is("#signup")){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Login Page:Sign Up";s.prop50="Con:Home:Login Page:Sign Up";s.tl(this,"o","Con:Home:Login Page:Sign Up")}if($(this).is("#btd_forgotUN")){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Login Page:Forgot Username";s.prop50="Con:Home:Login Page:Forgot Username";s.tl(this,"o","Con:Home:Login Page:Forgot Username")}if($(this).is("#btd_forgotPwd")){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Login Page:Forgot Password";s.prop50="Con:Home:Login Page:Forgot Password";s.tl(this,"o","Con:Home:Login Page:Forgot Password")}if($(this).is("#btd_loginlogo")){s.linkTrackVars="eVar19,prop50";s.eVar19="Con:Home:Login Page:Login Page BT Logo";s.prop50="Con:Home:Login Page:Login Page BT Logo";s.tl(this,"o","Con:Home:Login Page:Login Page BT Logo")}s.eVar19=s.prop50;s.tl(this,"o",s.eVar19)})});if(omni.pageType!="SERP"||omni.pageType!="VideoDetail"){var s_code=s.t();if(s_code){document.write(s_code)}}});