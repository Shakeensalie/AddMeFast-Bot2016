//	Tkd-Alex alex.tkd.alex@gmail.com 
//	https://www.fb.com/tkdalex.social , https://github.com/Tkd-Alex , http://www.tkdalex.altervista.org
//	AddMeFast bot 2016 

var social = ["AddMeFast","Facebook","Instagram","Twitter","VK","Pinterest","StumbleUpon"];
var socialBool = [];

for(var i=0;i<social.length;i++){
	var r = confirm("Have you a "+social[i]+ " account?");
	if (r) socialBool[i] = true;
	else socialBool[i] = false;
};

var r = confirm(	"You have selected this configuration:\n"
					+social[0] + " : " + socialBool[0] + "\n"
					+social[1] + " : " + socialBool[1] + "\n"
					+social[2] + " : " + socialBool[2] + "\n"
					+social[3] + " : " + socialBool[3] + "\n"
					+social[4] + " : " + socialBool[4] + "\n"
					+social[5] + " : " + socialBool[5] + "\n"
					+social[6] + " : " + socialBool[6] + "\n"
				);

if(r){

	var n = prompt("How many times run the bot?",50);

	var wait2s;
		wait2s = "CODE:";
		wait2s += "WAIT SECONDS=2" +"\n";

	var loginWebSite = ["http://addmefast.com/",
						"https://www.facebook.com/login",
						"https://www.instagram.com/accounts/login/?force_classic_login",
						"https://mobile.twitter.com/session/new",
						"https://vk.com/login.php",
						"https://www.pinterest.com/login/",
						"http://www.stumbleupon.com/"];

	var loginCode = [];
	var earnPointFb = [];
	var earnPointInstagram = [];
	var earnPointTW = [];
	var earnPointVK = [];
	var earnPointPinterest = [];
	var earnPointSU;


	for(var i=0;i<social.length;i++){
		if(socialBool[i]){
			loginCode[i] = "CODE:";
			loginCode[i] += "SET !ERRORIGNORE YES" +"\n";
			loginCode[i] += "SET !TIMEOUT_TAG 0" +"\n";
			loginCode[i] += "SET !TIMEOUT_STEP 0" +"\n";
			loginCode[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			loginCode[i] += "SET !DATASOURCE accountAMF2016.csv" +"\n";
			loginCode[i] += "SET !DATASOURCE_LINE "+(i+1) +"\n";
			loginCode[i] += "TAB T=1" +"\n"; 
		}
	}

	//AddMeFast
	if(socialBool[0]){
		loginCode[0] += "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:email CONTENT={{!COL2}}" +"\n";
		loginCode[0] += "SET !ENCRYPTION NO" +"\n";
		loginCode[0] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{!COL3}}" +"\n";
		loginCode[0] += "WAIT SECONDS=1" +"\n";
		loginCode[0] += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:NoFormName ATTR=NAME:login_button" +"\n";
	}

	//Facebook
	if(socialBool[1]){
		loginCode[1] += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:email CONTENT={{!COL2}}" +"\n";
		loginCode[1] += "SET !ENCRYPTION NO" +"\n";
		loginCode[1] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:pass CONTENT={{!COL3}}" +"\n";
		loginCode[1] += "WAIT SECONDS=1" +"\n";
		loginCode[1] += "TAG POS=1 TYPE=BUTTON FORM=ID:login_form ATTR=ID:loginbutton" +"\n";

		var earnPointFbLink = [ "http://addmefast.com/free_points/facebook_likes",
								"http://addmefast.com/free_points/facebook_share",
								"http://addmefast.com/free_points/facebook_subscribes",
								"http://addmefast.com/free_points/facebook_post_like",
								"http://addmefast.com/free_points/facebook_post_share"];

		for(var i=0;i<earnPointFbLink.length;i++){
			earnPointFb[i] = "CODE:";
			earnPointFb[i] += "SET !ERRORIGNORE YES" +"\n";
			earnPointFb[i] += "SET !TIMEOUT_TAG 0" +"\n";
			earnPointFb[i] += "SET !TIMEOUT_STEP 0" +"\n";
			earnPointFb[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			earnPointFb[i] += "TAB T=1" +"\n";
			earnPointFb[i] += "URL GOTO="+ earnPointFbLink[i] +"\n";
		}

		earnPointFb[0] += "TAG POS=1 TYPE=DIV ATTR=TXT:Like" +"\n";
		earnPointFb[0] += "TAB T=2" +"\n";
		earnPointFb[0] += "TAG POS=1 TYPE=BUTTON ATTR=ID:u_0_*" +"\n";

		earnPointFb[1] += "TAG POS=1 TYPE=DIV ATTR=TXT:Share" +"\n";
		earnPointFb[1] += "TAB T=2" +"\n";
		earnPointFb[1] += "WAIT SECONDS=1" +"\n";
		earnPointFb[1] += "TAG POS=1 TYPE=BUTTON FORM=ID:platformDialogForm ATTR=ID:u_0_d" +"\n";
		earnPointFb[1] += "TAG POS=1 TYPE=BUTTON FORM=ID:platformDialogForm ATTR=ID:u_0_*" +"\n";

		earnPointFb[2] += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointFb[2] += "TAB T=2" +"\n";
		earnPointFb[2] += "TAG POS=1 TYPE=A ATTR=ID:u_0_13" +"\n";
		earnPointFb[2] += "TAG POS=1 TYPE=A ATTR=ID:u_0_z" +"\n";
		earnPointFb[2] += "TAG POS=1 TYPE=A ATTR=ID:u_0_*" +"\n";

		earnPointFb[3] += "TAG POS=1 TYPE=DIV ATTR=TXT:Like" +"\n";
		earnPointFb[3] += "TAB T=2" +"\n";
		earnPointFb[3] += "TAG POS=1 TYPE=A ATTR=TXT:Mi<SP>piace" +"\n";
		earnPointFb[3] += "TAG POS=2 TYPE=A ATTR=TXT:Mi<SP>piace" +"\n";
				earnPointFb[3] += "TAG POS=1 TYPE=A ATTR=TXT:Like" +"\n";
		earnPointFb[3] += "TAG POS=2 TYPE=A ATTR=TXT:Like" +"\n";

		earnPointFb[4] += "TAG POS=1 TYPE=DIV ATTR=TXT:Share" +"\n";
		earnPointFb[4] += "TAB T=2" +"\n";
		earnPointFb[4] += "FRAME F=0" +"\n";
		earnPointFb[4] += "TAG POS=2 TYPE=SPAN ATTR=TXT:Condividi" +"\n";
		earnPointFb[4] += "TAG POS=2 TYPE=SPAN ATTR=TXT:Share" +"\n";
		earnPointFb[4] += "TAG POS=2 TYPE=SPAN ATTR=TXT:Condividi<SP>subito<SP>il<SP>post<SP>(Tutti)" +"\n";
		earnPointFb[4] += "TAG POS=2 TYPE=SPAN ATTR=TXT:Condividi<SP>ora<SP>(Tutti)" +"\n";
		earnPointFb[4] += "WAIT SECONDS=3" +"\n";

		for(var i=0;i<earnPointFbLink.length;i++){
			earnPointFb[i] += "WAIT SECONDS=2" +"\n";
			earnPointFb[i] += "TAB T=1" +"\n";
			earnPointFb[i] += "WAIT SECONDS=1" +"\n";
			earnPointFb[i] += "TAB CLOSEALLOTHERS" +"\n";
			earnPointFb[i] += "WAIT SECONDS=2" +"\n";
		}
	}

	//Instagram
	if(socialBool[2]){
		loginCode[2] += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login-form ATTR=ID:id_username CONTENT={{!COL2}}" +"\n";
		loginCode[2] += "SET !ENCRYPTION NO" +"\n";
		loginCode[2] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login-form ATTR=ID:id_password CONTENT={{!COL3}}" +"\n";
		loginCode[2] += "WAIT SECONDS=1" +"\n";
		loginCode[2] += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:login-form ATTR=*" +"\n";

		var earnPointInstagramLink = [	"http://addmefast.com/free_points/instagram",
										"http://addmefast.com/free_points/instagram_likes"];

		for(var i=0;i<earnPointInstagramLink.length;i++){
			earnPointInstagram[i] = "CODE:";
			earnPointInstagram[i] += "SET !ERRORIGNORE YES" +"\n";
			earnPointInstagram[i] += "SET !TIMEOUT_TAG 0" +"\n";
			earnPointInstagram[i] += "SET !TIMEOUT_STEP 0" +"\n";
			earnPointInstagram[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			earnPointInstagram[i] += "TAB T=1" +"\n";
			earnPointInstagram[i] += "URL GOTO="+ earnPointInstagramLink[i] +"\n";
		}
		
		earnPointInstagram[0] += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointInstagram[0] += "TAB T=2" +"\n";
		earnPointInstagram[0] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" +"\n";

		earnPointInstagram[1] += "TAG POS=1 TYPE=DIV ATTR=TXT:Like" +"\n";
		earnPointInstagram[1] += "TAB T=2" +"\n";
		earnPointInstagram[1] += "TAG POS=1 TYPE=A ATTR=TXT:Like" +"\n";

		for(var i=0;i<earnPointInstagramLink.length;i++){
			earnPointInstagram[i] += "WAIT SECONDS=2" +"\n";
			earnPointInstagram[i] += "TAB T=1" +"\n";
			earnPointInstagram[i] += "WAIT SECONDS=1" +"\n";
			earnPointInstagram[i] += "TAB CLOSEALLOTHERS" +"\n";
			earnPointInstagram[i] += "WAIT SECONDS=2" +"\n";
		}
	}

	//Twitter
	if(socialBool[3]){
		loginCode[3] += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/sessions ATTR=ID:session[username_or_email] CONTENT={{!COL2}}" +"\n";
		loginCode[3] += "SET !ENCRYPTION NO" +"\n";
		loginCode[3] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ACTION:/sessions ATTR=ID:session[password] CONTENT={{!COL3}}" +"\n";
		loginCode[3] += "WAIT SECONDS=1" +"\n";
		loginCode[3] += "TAG POS=1 TYPE=BUTTON FORM=ACTION:/sessions ATTR=ID:signupbutton" +"\n";

		var earnPointTWLink = [ "http://addmefast.com/free_points/twitter",
								"http://addmefast.com/free_points/twitter_tweets",
								"http://addmefast.com/free_points/twitter_retweets",
								"http://addmefast.com/free_points/twitter_favorites"];

		for(var i=0;i<earnPointTWLink.length;i++){
			earnPointTW[i] = "CODE:";
			earnPointTW[i] += "SET !ERRORIGNORE YES" +"\n";
			earnPointTW[i] += "SET !TIMEOUT_TAG 0" +"\n";
			earnPointTW[i] += "SET !TIMEOUT_STEP 0" +"\n";
			earnPointTW[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			earnPointTW[i] += "TAB T=1" +"\n";
			earnPointTW[i] += "URL GOTO="+ earnPointTWLink[i] +"\n";
		}

		earnPointTW[0] += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointTW[0] += "TAB T=2" +"\n";
		earnPointTW[0] += "TAG POS=1 TYPE=BUTTON FORM=ID:follow_btn_form ATTR=TXT:Follow" +"\n";
		earnPointTW[0] += "TAG POS=1 TYPE=BUTTON FORM=ID:follow_btn_form ATTR=TXT:Segui" +"\n";

		earnPointTW[1] += "TAG POS=1 TYPE=DIV ATTR=TXT:Tweet" +"\n";
		earnPointTW[1] += "TAB T=2" +"\n";
		earnPointTW[1] += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:update-form ATTR=*" +"\n";

		earnPointTW[2] += "TAG POS=1 TYPE=DIV ATTR=TXT:Retweet" +"\n";
		earnPointTW[2] += "TAB T=2" +"\n";
		earnPointTW[2] += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:retweet_btn_form ATTR=NAME:commit" +"\n";

		earnPointTW[3] += "TAG POS=1 TYPE=DIV ATTR=TXT:Favorite" +"\n";
		earnPointTW[3] += "TAB T=2" +"\n";
		earnPointTW[3] += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:favorite_btn_form ATTR=NAME:commit" +"\n";

		for(var i=0;i<earnPointTWLink.length;i++){
			earnPointTW[i] += "WAIT SECONDS=2" +"\n";
			earnPointTW[i] += "TAB T=1" +"\n";
			earnPointTW[i] += "WAIT SECONDS=1" +"\n";
			earnPointTW[i] += "TAB CLOSEALLOTHERS" +"\n";
			earnPointTW[i] += "WAIT SECONDS=2" +"\n";
		}
	}

	//VK
	if(socialBool[4]){
		loginCode[4] += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login ATTR=ID:email CONTENT={{!COL2}}" +"\n";
		loginCode[4] += "SET !ENCRYPTION NO" +"\n";
		loginCode[4] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login ATTR=ID:pass CONTENT={{!COL3}}" +"\n";
		loginCode[4] += "WAIT SECONDS=2" +"\n";
		loginCode[4] += "TAG POS=1 TYPE=BUTTON FORM=ID:login ATTR=TXT:Log<SP>in" +"\n";
		loginCode[4] += "WAIT SECONDS=7" +"\n";

		var earnPointVKLink = [ "http://addmefast.com/free_points/vkontakte_pages",
								"http://addmefast.com/free_points/vkontakte_groups"];

		for(var i=0;i<earnPointVKLink.length;i++){
			earnPointVK[i] = "CODE:";
			earnPointVK[i] += "SET !ERRORIGNORE YES" +"\n";
			earnPointVK[i] += "SET !TIMEOUT_TAG 0" +"\n";
			earnPointVK[i] += "SET !TIMEOUT_STEP 0" +"\n";
			earnPointVK[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			earnPointVK[i] += "TAB T=1" +"\n";
			earnPointVK[i] += "URL GOTO="+ earnPointVKLink[i] +"\n";
		}

		earnPointVK[0] += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointVK[0] += "TAB T=2" +"\n";
		earnPointVK[0] += "TAG POS=1 TYPE=BUTTON ATTR=ID:subscribe_button" +"\n";

		earnPointVK[1] += "TAG POS=1 TYPE=DIV ATTR=TXT:Join" +"\n";
		earnPointVK[1] += "TAB T=2" +"\n";
		earnPointVK[1] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Join<SP>community" +"\n";

		for(var i=0;i<earnPointVKLink.length;i++){
			earnPointVK[i] += "WAIT SECONDS=2" +"\n";
			earnPointVK[i] += "TAB T=1" +"\n";
			earnPointVK[i] += "WAIT SECONDS=1" +"\n";
			earnPointVK[i] += "TAB CLOSEALLOTHERS" +"\n";
			earnPointVK[i] += "WAIT SECONDS=2" +"\n";
		}
	}

	//Pinterest
	if(socialBool[5]){
		loginCode[5] += "TAG POS=1 TYPE=INPUT:EMAIL FORM=NAME:NoFormName ATTR=NAME:username_or_email CONTENT={{!COL2}}" +"\n";
		loginCode[5] +=	"SET !ENCRYPTION NO" +"\n";
		loginCode[5] +=	"TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=NAME:password CONTENT={{!COL3}}" +"\n";
		loginCode[5] +=	"WAIT SECONDS=1" +"\n";
		loginCode[5] +=	"TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Log<SP>in" +"\n";
		loginCode[5] += "WAIT SECONDS=5" +"\n";

		var earnPointPinterestLink = [	"http://addmefast.com/free_points/pinterest",
										"http://addmefast.com/free_points/pinterest_repin",
										"http://addmefast.com/free_points/pinterest_like"];

		for(var i=0;i<earnPointPinterestLink.length;i++){
			earnPointPinterest[i] = "CODE:";
			earnPointPinterest[i] += "SET !ERRORIGNORE YES" +"\n";
			earnPointPinterest[i] += "SET !TIMEOUT_TAG 0" +"\n";
			earnPointPinterest[i] += "SET !TIMEOUT_STEP 0" +"\n";
			earnPointPinterest[i] += "SET !TIMEOUT_PAGE 12" +"\n";
			earnPointPinterest[i] += "TAB T=1" +"\n";
			earnPointPinterest[i] += "URL GOTO="+ earnPointPinterestLink[i] +"\n";
		}

		earnPointPinterest[0] += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointPinterest[0] += "TAB T=2" +"\n";
		earnPointPinterest[0] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Segui" +"\n";
		earnPointPinterest[0] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Follow" +"\n";

		earnPointPinterest[1] += "TAG POS=1 TYPE=DIV ATTR=TXT:Repin" +"\n";
		earnPointPinterest[1] += "TAB T=2" +"\n";
		earnPointPinterest[1] += "TAG POS=15 TYPE=BUTTON ATTR=TXT:Pin<SP>it" +"\n";

		earnPointPinterest[2] += "TAG POS=1 TYPE=DIV ATTR=TXT:Like" +"\n";
		earnPointPinterest[2] += "TAB T=2" +"\n";
		earnPointPinterest[2] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Mi<SP>piace" +"\n";
		earnPointPinterest[2] += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Like" +"\n";

		for(var i=0;i<earnPointPinterestLink.length;i++){
			earnPointPinterest[i] += "WAIT SECONDS=2" +"\n";
			earnPointPinterest[i] += "TAB T=1" +"\n";
			earnPointPinterest[i] += "WAIT SECONDS=1" +"\n";
			earnPointPinterest[i] += "TAB CLOSEALLOTHERS" +"\n";
			earnPointPinterest[i] += "WAIT SECONDS=2" +"\n";
		}
	}

	//StumbleUpon
	if(socialBool[6]){
		loginCode[6] += "WAIT SECONDS=4" +"\n";
		loginCode[6] += "TAG POS=1 TYPE=DIV ATTR=TXT:Login" +"\n";
		loginCode[6] += "WAIT SECONDS=1" +"\n";
		loginCode[6] += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:email-username CONTENT={{!COL2}}" +"\n";
		loginCode[6] += "SET !ENCRYPTION NO" +"\n";
		loginCode[6] += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:NoFormName ATTR=ID:password-login CONTENT={{!COL3}}" +"\n";
		loginCode[6] += "WAIT SECONDS=1" +"\n";
		loginCode[6] += "TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Login" +"\n";
		loginCode[6] += "WAIT SECONDS=5" +"\n";

		var earnPointSULink = "http://addmefast.com/free_points/stumbleupon_followers";
		
		earnPointSU = "CODE:";
		earnPointSU += "SET !ERRORIGNORE YES" +"\n";
		earnPointSU += "SET !TIMEOUT_TAG 0" +"\n";
		earnPointSU += "SET !TIMEOUT_STEP 0" +"\n";
		earnPointSU += "SET !TIMEOUT_PAGE 12" +"\n";
		earnPointSU += "TAB T=1" +"\n";
		earnPointSU += "URL GOTO="+ earnPointSULink +"\n";

		earnPointSU += "TAG POS=1 TYPE=DIV ATTR=TXT:Follow" +"\n";
		earnPointSU += "TAB T=2" +"\n";
		earnPointSU += "FRAME F=1" +"\n";
		earnPointSU += "TAG POS=1 TYPE=SPAN ATTR=TXT:follow" +"\n";
		
		earnPointSU += "WAIT SECONDS=2" +"\n";
		earnPointSU += "TAB T=1" +"\n";
		earnPointSU += "WAIT SECONDS=1" +"\n";
		earnPointSU += "TAB CLOSEALLOTHERS" +"\n";
		earnPointSU += "WAIT SECONDS=2" +"\n";
	}


	for(var i=0;i<social.length;i++){
		if(socialBool[i]){
			window.location.href = loginWebSite[i];
			iimPlay(wait2s);
			if (window.location.href == loginWebSite[i])	iimPlay(loginCode[i]);
		}
	}

	for(var i=0;i<n;i++){
		if(socialBool[1])	for(var j=0;j<earnPointFb.length;j++)			iimPlay(earnPointFb[j]);
		if(socialBool[2])	for(var j=0;j<earnPointInstagram.length;j++)	iimPlay(earnPointInstagram[j]);
		if(socialBool[3])	for(var j=0;j<earnPointTW.length;j++)			iimPlay(earnPointTW[j]);
		if(socialBool[4])	for(var j=0;j<earnPointVK.length;j++)			iimPlay(earnPointVK[j]);
		if(socialBool[5])	for(var j=0;j<earnPointPinterest.length;j++)	iimPlay(earnPointPinterest[j]);
		if(socialBool[6])													iimPlay(earnPointSU);
	}
}