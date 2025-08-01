# Sip App - React Version

A React-based web application for safe drinking sessions with friends. This is a complete rewrite of the original SwiftUI app in React with TypeScript.

## 🚀 Features

- **Authentication System** - Sign up and sign in functionality
- **Friend Management** - Add and manage friends
- **Real-time Status Bar** - Shows current time and system status
- **Empty State Handling** - Beautiful empty states when no friends are added
- **Responsive Design** - Works on mobile and desktop
- **TypeScript** - Full type safety
- **Styled Components** - Modern CSS-in-JS styling

## 🛠 Tech Stack

- **React 18** - Latest React with hooks
- **TypeScript** - Type safety and better developer experience
- **Styled Components** - CSS-in-JS styling
- **React Context** - State management for authentication

## 📱 Screenshots

### Landing Page
- Beautiful gradient background
- Sign up and sign in modals
- Clean, modern design

### Home Screen
- Status bar with time and system icons
- Navigation buttons (calendar, start session, profile)
- Friends list with empty state
- Add friends functionality

### Add Friends Modal
- Search functionality
- Suggested friends list
- Add/remove friend buttons

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kxtya/SipApp.git
   cd SipApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── styled/         # Styled components
│   ├── Launchpad.tsx   # Landing page
│   ├── Home.tsx        # Main home screen
│   ├── FriendCard.tsx  # Friend display component
│   ├── SignUpModal.tsx # Sign up modal
│   ├── SignInModal.tsx # Sign in modal
│   └── AddFriendsModal.tsx # Add friends modal
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 🎨 Design System

### Colors
- **Main Theme**: `#D81B60` (Pink)
- **Accent**: `#750F35` (Dark Pink)
- **White Proxy**: `#FCF8FA` (Light Pink)
- **Black Proxy**: `#27000F` (Dark)

### Typography
- **Primary Font**: System fonts (San Francisco, Segoe UI, etc.)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Add `"homepage": "https://kxtya.github.io/SipApp"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🔮 Future Features

- [ ] Real backend integration (Firebase/Supabase)
- [ ] Real-time friend status updates
- [ ] Session management
- [ ] Photo sharing during sessions
- [ ] Push notifications
- [ ] Progressive Web App (PWA) features
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Kat** - Frontend Development, UI/UX Design
- **Hannah** - Backend Development, Architecture

## 🙏 Acknowledgments

- React team for the amazing framework
- Styled Components for the styling solution
- TypeScript team for type safety
- All contributors and supporters

---

**Sip Safe. Sip Connected.** 🍷 