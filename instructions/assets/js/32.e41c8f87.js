(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{343:function(e,t,r){e.exports=r.p+"assets/img/vue-app-speech-api-key-secret.a5acf823.png"},344:function(e,t,r){e.exports=r.p+"assets/img/runworkflow.d70dae47.png"},345:function(e,t,r){e.exports=r.p+"assets/img/rerunalljobs.4799fd27.png"},450:function(e,t,r){"use strict";r.r(t);var a=r(10),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"challenge-6-speech-recognition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenge-6-speech-recognition"}},[e._v("#")]),e._v(" Challenge 6: Speech Recognition")]),e._v(" "),t("p",[e._v("⏲️ "),t("em",[e._v("est. time to complete: 30 min.")]),e._v(" ⏲️")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),t("p",[e._v("In this challenge you will learn how to:")]),e._v(" "),t("ul",[t("li",[e._v("Create a Speech API service in Azure")]),e._v(" "),t("li",[e._v("Connect you Speech API service with your app")]),e._v(" "),t("li",[e._v("Pass the API key to you app using GitHub Secrets")]),e._v(" "),t("li",[e._v("How to talk to our application")])]),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),t("h3",{attrs:{id:"further-informative-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-informative-resources"}},[e._v("#")]),e._v(" Further informative resources")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-adoption-framework/govern/resource-consistency/resource-access-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is a Resource / Resource Group / Subscription?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/speech-services/#overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Speech API"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/availability-zones/az-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regions and Availability Zones in Azure"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.GitHub.com/en/actions/reference/encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Encrypted secrets"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),t("ul",[t("li",[e._v("Use the same Cognitive Service you created in the "),t("RouterLink",{attrs:{to:"/instructions/en/day2/Vision/"}},[e._v("Vision challenge")])],1)]),e._v(" "),t("h2",{attrs:{id:"integrate-speech-service-credentials-into-github-secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrate-speech-service-credentials-into-github-secret"}},[e._v("#")]),e._v(" Integrate Speech Service credentials into GitHub Secret")]),e._v(" "),t("p",[e._v("Again you need to share the information of this resource with the web app, so that it can utilize the Speech service's "),t("em",[e._v("intelligence")]),e._v(". Therefore, we will create another GitHub Secret and share this with the app.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Navigate to GitHub > Settings > Secrets > Actions and add a "),t("code",[e._v("New repository secret")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Name: "),t("code",[e._v("VITE_SPEECH_API_KEY")])])]),e._v(" "),t("li",[t("p",[e._v("Value: The Key of your Speech service you copied before")])]),e._v(" "),t("li",[t("p",[e._v("Add Secret.")]),e._v(" "),t("p",[t("img",{attrs:{src:r(343),alt:"Screenshot of creating secret"}})])])]),e._v(" "),t("p",[e._v("Now we will make our app understand when we talk to our Milligram social media application.")]),e._v(" "),t("h2",{attrs:{id:"run-frontend-pipeline-again"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-frontend-pipeline-again"}},[e._v("#")]),e._v(" Run Frontend Pipeline again")]),e._v(" "),t("ul",[t("li",[e._v("Navigate to "),t("strong",[e._v("Actions")]),e._v(" > "),t("strong",[e._v("Pages")]),e._v(" and "),t("strong",[e._v("Run workflow")]),e._v(" "),t("img",{attrs:{src:r(344),alt:"Run a workflow"}}),e._v(" "),t("img",{attrs:{src:r(345),alt:"Run all jobs"}})])]),e._v(" "),t("p",[e._v("Click on the frontend link displayed under the deploy step under your pipeline "),t("code",[e._v("https://<yourgithubhandle>.github.io/...")]),e._v(" or open the app on your phone.")]),e._v(" "),t("p",[e._v("Our frontend application should now have a new button with a microphone symbol that allows us to talk to our app in English and German and have our speech transcribed.")]),e._v(" "),t("p",[e._v("Neither what you say nor what is transcribed will be saved and will "),t("strong",[e._v("not")]),e._v(" appear on the timeline or news feed.")]),e._v(" "),t("h2",{attrs:{id:"talk-to-me-what-do-you-have-to-say-play-around"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#talk-to-me-what-do-you-have-to-say-play-around"}},[e._v("#")]),e._v(" Talk to me! What do you have to say? Play around")]),e._v(" "),t("p",[e._v("So go ahead and say at least 5 sentences and tell us how great your application understands you.")]),e._v(" "),t("p",[e._v("Take also a look and read to your application or ask other people to talk to your phone, you might be surprised.")]),e._v(" "),t("p",[e._v("By default, it will only understand German and English, if you want to change the language you could change the repo in "),t("code",[e._v("Frontend")]),e._v(" > "),t("code",[e._v("scr")]),e._v(" > "),t("code",[e._v("views")]),e._v(" > "),t("code",[e._v("Microphone.vue")]),e._v(" on line 7 and add e.g. Ukrainian\n"),t("code",[e._v('<option value="uk-UA">Ukrainian</option>')])]),e._v(" "),t("p",[e._v("As you can see, the language is represented by four letters. For German it's de-DE, for English (USA) it is en-US and for Ukrainian it is uk-UA. "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),t("OutboundLink")],1),e._v(" you can find all supported languages with their code.")]),e._v(" "),t("p",[e._v("That's a wrap for our 2 days. Congrats!")]),e._v(" "),t("h3",{attrs:{id:"overcharged-we-got-you-covered"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overcharged-we-got-you-covered"}},[e._v("#")]),e._v(" Overcharged? We got you covered")]),e._v(" "),t("p",[e._v("Ask your coach if you did not succeed. We have you covered with a back up. ⚠️")]),e._v(" "),t("h3",{attrs:{id:"use-prepared-milligram-backend-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-prepared-milligram-backend-service"}},[e._v("#")]),e._v(" Use prepared Milligram Backend Service")]),e._v(" "),t("p",[e._v("Look at the prepared application with our pictures for you to play around "),t("a",{attrs:{href:"https://codeunicornmartha.GitHub.io/FemaleAIappInnovationEcosystem/#/?stack-key=a78e2b9a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Milligram"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"what-s-next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),t("p",[e._v("Start your own coding journey now or try out an Azure certification as we did using Udacity, Udemy, Pluralsight, Edx etc., make sure to check out the links posted below:")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",target:"_blank",rel:"noopener noreferrer"}},[e._v("Programming course on Udacity"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure AI Fundamentals learning path (with optional certification)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://learn.microsoft.com/en-gb/certifications/exams/az-900",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Fundamentals learning path (with optional certification)"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("Be sure to check out our Microsoft Programs:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.microsoft.com/en-ie/earlycareers/aspire-program",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Aspire Program for early in career hires"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Internships at MS")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://careers.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Professional Careers at Microsoft"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/instructions/en/day2/Vision/"}},[e._v("◀ Previous challenge")]),e._v(" | "),t("RouterLink",{attrs:{to:"/instructions/"}},[e._v("🔼 Home")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);