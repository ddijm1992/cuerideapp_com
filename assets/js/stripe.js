const stripePublicKey = "pk_test_your_key_here";

async function redirectToCheckout(sessionId) {
  const stripe = Stripe(stripePublicKey);
  await stripe.redirectToCheckout({ sessionId });
}

function redirectToStripeConnect(accountLinkUrl) {
  window.location.href = accountLinkUrl;
}

window.redirectToCheckout = redirectToCheckout;
window.redirectToStripeConnect = redirectToStripeConnect;