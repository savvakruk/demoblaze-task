import { defineConfig } from 'cypress';

export default defineConfig({  
  
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: "https://www.demoblaze.com/",
    env: {
      username: "test1q3",
      password: "Qwerty12",
    },
  },
});
