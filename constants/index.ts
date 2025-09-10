// ================================
// API ENDPOINTS
// ================================
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const ENDPOINTS = {
  properties: `${API_BASE_URL}/properties`,
  bookings: `${API_BASE_URL}/bookings`,
  users: `${API_BASE_URL}/users`,
};

// ================================
// UI TEXT
// ================================
export const UI_TEXT = {
  bookNow: "Book Now",
  viewDetails: "View Details",
  loading: "Loading...",
  noData: "No data available",
};

// ================================
// APP CONFIG
// ================================
export const APP_CONFIG = {
  siteName: "MyPropertyApp",
  defaultLocale: "en",
  supportedLocales: ["en", "fr", "es"],
};
