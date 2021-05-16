"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  export(res) {
    const { email } = res.query;

    return xxx({ email });
  },
};

const xxx = ({ email }) => `### AUTOFILL PROFILES ###,,,,,,
Profile ID,Name,Site,Hotkey,,,
### AUTOFILL RULES ###,,,,,,
Rule ID,Type,Name,Value,Site,Mode,Profile
r1,0,"^email$","{@email}","kingsumo.com/*",0,
r2,0,"^twitter-handle$","{@twitter}","widget-prime.rafflecopter.com/*",0,
r3,0,"^giveaways_email$","{@email}","/giveaways/*",0,
r4,2,"^giveaways_answer$","""right""","/giveaways/*",0,
r5,0,"^sw_login_name$","{@name}","sweepwidget.com/view/*",0,
r6,0,"^sw_login_email$","{@email}","sweepwidget.com/view/*",0,
r7,0,"^sw_twitter_follow.*$","{@twitter}","sweepwidget.com/view/*",0,
r8,0,"^giveaways_first_name$","{@first_name}","/giveaways/*",0,
r9,0,"^name$","{@name}","gleam.io/*",0,
r10,0,"^email$","{@email}","gleam.io/*",0,
r11,0,"^email$","{@email}","kingsumo.com/g/*",0,
r12,0,"^sw_login_name$","{@name}","sweepwidget.com/view/*",0,
r13,0,"^date_of_birth$","02/02/1979","gleam.io/*",0,
r14,0,"^first_name$","{@first_name}","app.viralsweep.com/sweeps/*",0,
r15,0,"^last_name$","{@last_name}","app.viralsweep.com/sweeps/*",0,
r16,0,"^email$","{@email}","app.viralsweep.com/sweeps/*",0,
r17,0,"^date_of_birth-month$","{@month}","gleam.io/*",0,
r18,0,"^date_of_birth-day$","{@day}","gleam.io/*",0,
r19,0,"^date_of_birth-year$","{@year}","gleam.io/*",0,
r20,2,"^country$","""United States of America""","app.viralsweep.com/sweeps/*",0,
r21,4,"","document.querySelector('input[type=""checkbox""]') && document.querySelector('input[type=""checkbox""]').click();","",0,
r22,2,"^country$","""United States""","gleam.io/*",0,
r23,3,"^i_have_read_the_terms_and_conditions$","11","gleam.io/*",0,
r24,2,"^birthday_month$","{@month}","app.viralsweep.com/sweeps/*",0,
r25,2,"^birthday_day$","{@day}","app.viralsweep.com/sweeps/*",0,
r26,2,"^birthday_year$","{@year}","app.viralsweep.com/sweeps/*",0,
### AUTOFILL OPTIONS ###,,,,,,
advanced,"[]",,,,,
exceptions,"[]",,,,,
textclips,"[]",,,,,
variables,"[""email = xxx${email}xxx"",""twitter = @SamPerk25246117"",""first_name = Samuel"",""last_name = Perkins"",""name = Samuel Perkins"",""month = 2"",""day = 2"",""year = 1979""]",,,,,
backup,0,30,,,,
manual,0,,,,,
delay,0,1,,,,
labelmatch,0,,,,,
overwrite,0,,,,,
vars,1,,,,,
sound,0,,,,,
voice,0,1,,,,
debug,0,,,,,
mask,1,,,,,
scale,1,,,,,
menu,1,,,,,
autoimport,0,,,,,`;
