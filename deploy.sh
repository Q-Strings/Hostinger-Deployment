#!/bin/bash
# Hostinger Cloud deployment script

echo "Deploying Faith Impact Forum to Hostinger Cloud..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build application
echo "Building application..."
npm run build

# Set startup
echo "Deployment complete!"
echo "Start the server with: npm start"
echo "Or configure it in Hostinger control panel as Node.js application"
