import { checkA11y, injectAxe } from "axe-playwright";

module.exports = {
  async prerender(page) {
    // inject Axe
    await injectAxe(page);
  },
  async postrender(page) {
    // run axe
    await checkA11y(page, "#root", {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
