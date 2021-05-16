"use strict";

const { default: axios } = require("axios");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async export(req) {
    const { email } = req.query;
    const template = await axios.get(
      "https://tampermonkey-scripts.netlify.app/autofill"
    );

    const res = await strapi.services.profiles.findOne({
      email,
    });

    return res ? generate(res, template.data) : "404";
  },
};

const generate = (
  { email, first_name, last_name, twitter, month, day, year },
  template
) => `${template}\nvariables,"[""email = ${email}"",""twitter = ${twitter}"",""first_name = ${first_name}"",""last_name = ${last_name}"",""name = ${first_name} ${last_name}"",""month = ${month}"",""day = ${day}"",""year = ${year}""]",,,,,
autoimport,0,https://autofill-importer.herokuapp.com/profiles/export?email=${email},,,,`;
