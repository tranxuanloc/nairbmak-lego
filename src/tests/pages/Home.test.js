/**
 * Dependency Modules
 */
import { expect } from 'chai';
var webdriver = require("selenium-webdriver");
// require("geckodriver");
// Application Server
const serverUri = "http://localhost:3000/#";
/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: "chrome" })
  .build();
/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */

// var browser = new webdriver.Builder()
//  .usingServer()
//  .withCapabilities({ browserName: "firefox" })
//  .build();

/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
  return new Promise((resolve, reject) => {
    browser.getTitle().then(function (title) {
      resolve(title);
    });
  });
}

describe("Home Page", function () {
  /**
   * Test case to load our application and check the title.
   */
  it("Should load the page and get title", function () {
    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(logTitle)
        .then(title => {
          expect(title).to.equal('Kambria Lego');
          resolve();
        })
        .catch(err => reject(err));
    });
  });
  /**
    * Test case to check whether the given element is loaded.
    */
  it("Should check whether the given element is loaded", function () {
    return new Promise((resolve, reject) => {
      browser
        .findElement({ id: "site_wrapper" })
        .then(elem => resolve())
        .catch(err => reject(err));
    });
  });

  it("Should have a button", function () {
    return new Promise((resolve, reject) => {
      browser
        .findElement({ className: "btn-secondary" })
        .then(elem => resolve())
        .catch(err => reject(err));
    });
  });
  /**
    * End of test cases use.
    * Closing the browser and exit.
    */
  after(function () {
    // End of test use this.
    browser.quit();
  });
});