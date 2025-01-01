// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

const API_KEY = "";
const PURCHASE_TYPE = "";
const PRODUCT_ID = '';

// Verify the RevenueCat webhook key
function verifyKey(req) {
  const key = req.headers['authorization'];
  if (!key) {
    throw new Error('Missing RevenueCat key');
  }

  if (key != API_KEY) {
    throw new Error('Invalid RevenueCat key');
  }
}

// Webhook endpoint
app.post('/revenuecat-webhook', async (req, res) => {
  try {
    // Verify the webhook key
    verifyKey(req);

    // Extract relevant data from the webhook payload
    const { type, app_user_id, product_id } = req.body.event;

    // Check if the event is a purchase and the product matches your IAP
    if (type === PURCHASE_TYPE && product_id === PRODUCT_ID) {
      const userId = app_user_id; // Use your app's user ID

      console.log(`Successfully received purchase from user ${userId}`);
    }

    // Respond with success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing webhook:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RevenueCat webhook server running on port ${PORT}`);
});
