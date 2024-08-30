const puppeteer = require('puppeteer');
const codeObj = require('./codes');

const loginLink = 'https://www.hackerrank.com/auth/login';
const email = 'fisecig389@hapied.com';
const password = '&spNK25J?6aNzBS';

let browserOpen = puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
    defaultViewport: null
});

let page;

browserOpen
    .then(function (browserObj) {
        return browserObj.newPage();
    })
    .then(function (newTab) {
        page = newTab;
        return newTab.goto(loginLink);
    })
    .then(function () {
        return page.type("input[type='text']", email, { delay: 50 });
    })
    .then(function () {
        return page.type("input[type='password']", password, { delay: 50 });
    })
    .then(function () {
        return page.click("button[data-hr-focus-item='private']", { delay: 50 });
    })
    .then(function () {
        return waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
    })
    .then(function () {
        return waitAndClick('input[value="warmup"]', page);
    })
    .then(function () {
        return delay(3000);
    })
    .then(function () {
        return page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });
    })
    .then(function (questionArr) {
        console.log('Number of questions:', questionArr.length);
        return questionSolver(page, questionArr[0], codeObj.answers[0]);
    })
    .catch(function (err) {
        console.error('An error occurred:', err);
    });

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        cPage.waitForSelector(selector)
            .then(function () {
                return cPage.click(selector);
            })
            .then(function () {
                resolve();
            })
            .catch(function (err) {
                reject(err);
            });
    });
}

function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
        question.click()
            .then(function () {
                return waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
            })
            .then(function () {
                return waitAndClick('.checkbox-input', page);
            })
            .then(function () {
                return page.waitForSelector('textarea.custominput');
            })
            .then(function () {
                return page.type('textarea.custominput', answer, { delay: 10 });
            })
            .then(function () {
                return page.keyboard.down('Control');
            })
            .then(function () {
                return page.keyboard.press('A', { delay: 100 });
            })
            .then(function () {
                return page.keyboard.press('X', { delay: 100 });
            })
            .then(function () {
                return page.keyboard.up('Control');
            })
            .then(function () {
                return waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
            })
            .then(function () {
                return page.keyboard.down('Control');
            })
            .then(function () {
                return page.keyboard.press('A', { delay: 100 });
            })
            .then(function () {
                return page.keyboard.press('V', { delay: 100 });
            })
            .then(function () {
                return page.keyboard.up('Control');
            })
            .then(function () {
                return page.click('.hr-monaco__run-code', { delay: 50 });
            })
            .then(function () {
                resolve();
            })
            .catch(function (err) {
                reject(err);
            });
    });
}
