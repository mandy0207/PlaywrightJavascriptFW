// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { report } from 'node:process';


const config = ({
  testDir: './tests',
  // retries:1,
  workers:10,
  reporter: 'html',
  timeout: 60 * 1000,
  expect: {
    timeout: 40 * 1000
  },

  projects: [
    {
      name: 'Web',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        trace: 'on',  //on off
      
      },
    },

    {
      name: 'Mobile_IOS',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',  //on off
       ...devices['iPhone 15 Pro Max']
      },
    },

    {
      name: 'Mobile_Android',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',  //on off
       ...devices['Pixel 7']
      },
    },
  ]



});

module.exports = config;
