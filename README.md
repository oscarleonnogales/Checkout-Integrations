# Checkout Integrations

Tested 3 different payment methods to see the pros and cons between the three. For PayPal and Stripe, I used a simple React application. But for BrainTree, there was only one unofficial package so I used a simple HTML file.

### PayPal Integration

- Pros

  - Documentation explains everything, plenty of tutorial videos from PayPal and others on the web showing the integration.
  - Libraries to integrate with popular frontend libraries.
  - Can choose between client-side only, or using NodeJS server.
  - Simplest integration by copy-pasting script tags directly into a pages HTML file.
  - Easy to test final integration with test cards and account credentials.

- Cons
  - Slight differences for developers outside of the US.
  - Found a few dead links on the official documentation that should’ve lead to examples.
  - Currently need to install an additional dependency to get types if you’re integrating using the react-paypal-js package.

### Stripe Integration

- Pros

  - Pre downloadable template for the stack you’re working with.
  - Ability to interact directly through the Stripe CLI.
  - Has official npm packages for all the popular frameworks.
  - Lots of sample integrations on their public Github
  - Live examples on Codesandbox

- Cons
  - Requires both a server and client-side integration.

### BrainTree Integration

- Pros

  - Similar to PayPal SDK
  - Easy to obtain developer account with all the keys you need for integration.

- Cons
  - No official npm package for integration with popular frontend frameworks.
  - Need to generate a client token manually.
  - Need a NodeJS server, no way for client-side only like with PayPal or Stripe.
