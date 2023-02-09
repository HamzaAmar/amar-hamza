import { injectAxe, checkA11y } from 'axe-playwright';

module.exports = {
  prerender: async function (page) {
    // inject Axe
    await injectAxe(page);
  },
  postrender: async function (page) {
    // run axe
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
