export const CONTACT_INFO = {
  address: {
    street: '123 Parking Street',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  },
  phone: '+1 (555) 123-4567',
  email: 'support@parkease.com'
};

export const CHATBOT_INITIAL_MESSAGE = "Hi! I'm your ParkEase assistant. How can I help you today?";

export const CHATBOT_RESPONSES = {
  parking: 'You can find available parking spots using our interactive map. Would you like me to show you how?',
  book: 'To book a parking spot, select a location on the map and choose your preferred time slot. Need help with booking?',
  payment: 'We accept all major credit cards and digital payment methods. Is there anything specific you\'d like to know?',
  help: 'I\'m here to help! You can ask me about parking locations, booking process, or payment methods.',
} as const;