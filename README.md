# RevenueCat Webhook Server

This is a simple Node.js application that listens for RevenueCat webhook events and processes in-app purchase (IAP) data. The server verifies the webhook's authenticity and logs successful purchases.

## Features

- Parses incoming JSON webhook payloads using `body-parser`.
- Verifies the RevenueCat webhook key for security.
- Handles specific purchase events based on type and product ID.
- Logs successful purchases for further processing.

## Prerequisites

- Node.js installed on your system.
- A valid RevenueCat webhook API key.
