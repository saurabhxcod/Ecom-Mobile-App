# Ecom Mobile App 📱

A modern, high-performance E-Commerce mobile application built with **React Native** and **Expo SDK 55**. This app features a premium UI design, smooth transitions, and a complete shopping experience from product discovery to checkout.

## ✨ Features

- **🔐 Auth System**: Elegant Login and Signup screens with polished input fields.
- **🏠 Home Dashboard**: Dynamic banners, featured categories (Shoes, Watches, Audio, etc.), and trending products.
- **🔍 Product Discovery**: Browse products by category or explore the full catalog with high-quality images.
- **📄 Detailed Product View**: Detailed descriptions, ratings, pricing, and seamless "Add to Cart" functionality.
- **🛒 Shopping Cart**: Real-time quantity adjustments, item removal, and comprehensive price breakdowns.
- **❤️ Wishlist**: Save favorite items for later with a dedicated collection view.
- **👤 User Profile**: Elegant profile management and unified application settings.
- **📦 Order History**: Track and review all past purchases with status updates.
- **⚡ Modern Navigation**: Fluid experience using React Navigation's Bottom Tabs and Native Stacks.

## 🚀 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (SDK 55)
- **Library**: [React Native](https://reactnative.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Icons**: [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- **Safe Area**: [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (ProductCard, CartItem, Header)
├── data/           # Mock data (CATEGORIES, PRODUCTS)
├── navigation/     # Navigation configuration (AppNavigator, BottomTabs)
├── screens/        # Main application screens
│   ├── Auth/       # Authentication flow (Login, Signup)
│   ├── HomeScreen.tsx
│   ├── CartScreen.tsx
│   ├── ProductDetailScreen.tsx
│   └── ...
├── types/          # TypeScript interfaces and global types
└── utils/          # Helper functions and constants
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS)
- [Expo Go](https://expo.dev/client) app installed on your physical device.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saurabhxcod/Ecom-Mobile-App.git
   cd Ecom-Mobile-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

### Running the App

- **Android**: Scan the QR code using the **Expo Go** app.
- **iOS**: Scan the QR code using the **Camera** app.
- **Emulator/Simulator**: Press `a` for Android or `i` for iOS in the terminal.

---

Built by [saurabhxcod](https://github.com/saurabhxcod) 🚀
