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
      "https://script.google.com/macros/s/AKfycbwh8rgmWyMEK-WiWaFoOQhemgydjgD8qngs0cpKl_B6MzwOppn7n3UU1OvbO1NdzvIBXw/exec"
    );

    const res = await strapi.services.profiles.findOne({
      email,
    });

    console.log(res);
    return res ? generate(res, template.data) : "404";
  },
};

const generate = (
  { email, first_name, last_name, twitter, month, day, year },
  template
) => {
  let context = "";
  for (var i in template) {
    context += `${template[i]}\n`;
  }

  return `${context}variables,"[""email = ${email}"",""twitter = ${twitter}"",""first_name = ${first_name}"",""last_name = ${last_name}"",""name = ${first_name} ${last_name}"",""month = ${month}"",""day = ${day}"",""year = ${year}""]",,,,,\nautoimport,0,https://autofill-importer.herokuapp.com/profiles/export?email=${email},,,,`;
};
