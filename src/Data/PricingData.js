export const pricingMatrix = {
  starter: {
    name: "Starter",
    basePrice: 20,
    features: [
      "5 Workflows",
      "Basic Analytics",
      "Email Support"
    ]
  },

  pro: {
    name: "Pro",
    basePrice: 50,
    features: [
      "Unlimited Workflows",
      "Advanced Analytics",
      "Priority Support"
    ]
  },

  enterprise: {
    name: "Enterprise",
    basePrice: 100,
    features: [
      "Custom Integrations",
      "Dedicated Manager",
      "24/7 Support"
    ]
  }
}

export const currencyRates = {
  USD: {
    symbol: "$",
    rate: 1
  },

  INR: {
    symbol: "₹",
    rate: 85
  },

  EUR: {
    symbol: "€",
    rate: 0.85
  }
}