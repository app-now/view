var isRecognised=false;var custType=getCookieStatus("consumer");var isSoftlogin=false;function executeSportsPromos(){if((null!=getCookie("UserId")&&""!=getCookie("UserId"))||"loggedin"==getUserStatus()||custType||getCookieStatus("XLOGIN")||getCookieStatus("YREDIRECT")||getCookieStatus("EMAIL_SP")){isSoftlogin=true}}$(document).ready(function(){if(isSoftlogin){$(".sportbthouseadvert").css("display","none")}});function getCookie(cookiename){var cookiestring=""+document.cookie;var index1=cookiestring.indexOf(cookiename);if(index1==-1||cookiename==""){return""}var index2=cookiestring.indexOf(";",index1);if(index2==-1){index2=cookiestring.length}return unescape(cookiestring.substring(index1+cookiename.length+1,index2))}function getUserStatus(){var smSessionValue=getCookie("SMSESSION");if(smSessionValue==null||smSessionValue==""||smSessionValue=="LOGGEDOFF"){return"loggedout"}else{return"loggedin"}}function recogniseuser(fullWidthSlotCount,leftColumnSlotCount,rightColumnSlotCount,pageName){var userid=getCookie("UserId");if("loggedin"==getUserStatus()||getCookieStatus("XLOGIN")||getCookieStatus("YREDIRECT")||(userid!==null&&userid!=="")||getCookieStatus("EMAIL_SP")||custType){isRecognised=true}executePageViewFullWidth(isRecognised,pageName,fullWidthSlotCount);executePageView(isRecognised,pageName,leftColumnSlotCount);executePageViewRC(isRecognised,pageName,rightColumnSlotCount)}function executePageViewFullWidth(status,pageName,fullWidthSlotCount){for(var i=1;i<=fullWidthSlotCount;i++){if(status&&"loggedin"==$("input#"+pageName+"FWslotVal"+i).val()){$("#"+pageName+"FWslot"+i).css("display","block")}else{if(!status&&"loggedout"==$("input#"+pageName+"FWslotVal"+i).val()){$("#"+pageName+"FWslot"+i).css("display","block")}else{if("all"==$("input#"+pageName+"FWslotVal"+i).val()){$("#"+pageName+"FWslot"+i).css("display","block")}}}}}function executePageView(status,pageName,leftColumnSlotCount){for(var i=1;i<=leftColumnSlotCount;i++){if(status&&"loggedin"==$("input#"+pageName+"LCslotVal"+i).val()){$("#"+pageName+"LCslot"+i).css("display","block")}else{if(!status&&"loggedout"==$("input#"+pageName+"LCslotVal"+i).val()){$("#"+pageName+"LCslot"+i).css("display","block")}else{if("all"==$("input#"+pageName+"LCslotVal"+i).val()){$("#"+pageName+"LCslot"+i).css("display","block")}}}}}function executePageViewRC(status,pageName,rightColumnSlotCount){for(var i=1;i<=rightColumnSlotCount;i++){if(status&&"loggedin"==$("input#"+pageName+"RCslotVal"+i).val()){$("#"+pageName+"RCslot"+i).css("display","block")}else{if(!status&&"loggedout"==$("input#"+pageName+"RCslotVal"+i).val()){$("#"+pageName+"RCslot"+i).css("display","block")}else{if("all"==$("input#"+pageName+"RCslotVal"+i).val()){$("#"+pageName+"RCslot"+i).css("display","block")}}}}}function triggerAds(){googletag.cmd.push(function(){googletag.enableServices()})}function getCookieStatus(c_name){var flag=false;var i,x,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){flag=true;return flag}}return flag};