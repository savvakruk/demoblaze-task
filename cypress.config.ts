import { defineConfig } from 'cypress';

export default defineConfig({  
  
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: "https://www.demoblaze.com",
    env: {
      username: "test1q2",
      password: "test1q2",
    },
  },
});
