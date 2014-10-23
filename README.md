The problem: Microsoft Outlook Web Access sniffs the User Agent HTTP header to see if the user is using Windows and delivers a poorer experience without. (FWIW, user agent sniffing is considered poor practice.)

The solution: OWA-User-Agent is a simple plugin for Chrome that replaces the Linux UA string with one that is marked Windows so that full OWA can be used from within Linux and possibly OSX.

Install it through the [Chrome Web Store](https://chrome.google.com/webstore/detail/owa-user-agent/bbcokcplpnehgcfgjbpaecnmaedpjifo)


Caveats/bugs:


1. File attachments don't seem to work in the enhanced OWA, so temporarily switch to the poor experience (log out, enable "Light" version, and log back in if file uploads/attachments are needed.)

2. All other functionality has been removed from this version -- it only adjusts the UA for OWA.

3. This version will apply the Windows UA (for Chrome 37 on Win7) string to any pages with /owa/ in the URL. In practice, this is probably no big deal.

4. Currently, this only fixes Outlook Web Access installations that are installed in the default /owa location. If this is a problem for you, please open a bug report.


This is a fork of [Chrome User Agent](https://github.com/jugglinmike/chrome-user-agent/), updated for the latest versions of Chrome and with all extra/irrelevant functionality removed.


Installation Instructions
-------------------------

**Download the Extension.** You can get the latest version of the [extension
here](https://raw.github.com/jamiesonbecker/owa-user-agent/master/owa-user-agent.crx)
(of course, you'll need [Google Chrome](http://www.google.com/chrome) installed
first).</p>


**Install the Application.** Drag the extension file (it is named
'owa-user-agent.crx' by default) into a Chrome browser window.</p>


How to Run
----------

The new User agent is applied to any URL that contains /owa/, so it should automatically work.
