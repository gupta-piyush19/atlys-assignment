# foo-rum 🗣️ | Atlys Assignment

A simple social media platform. This is a frontend only project and have used local storage to store the data.

## 🚀 Features

- Sign in
- sign up
- Create posts

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Routing**: React Router 7
- **State Management**: Zustand
- **Styling**: Tailwind CSS 4
- **Type Safety**: TypeScript
- **Build Tool**: Vite
- **Hosting**: Vercel

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gupta-piyush19/atlys-assignment.git
   cd atlys-assignment
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
app/
├── components/         # Reusable UI components
│   ├── common/         # Common components
│   ├── editor/         # Editor-specific components
│   ├── icons/          # SVG icon components
│   ├── app-layout.tsx  # Main layout with sticky header
│   ├── auth-form.tsx   # Authentication form
│   ├── auth-modal.tsx  # Modal for login/signup
│   ├── post-editor.tsx # Post editor
│   └── post.tsx        # Individual post component
├── hooks/              # Custom React hooks
│   ├── use-auth.ts     # Authentication state management
│   └── use-post.ts     # Post state management
├── lib/                # Utility functions and constants
├── pages/              # Page components
│   ├── feed.tsx        # Main feed page
│   ├── signin.tsx      # Sign in page
│   └── signup.tsx      # Sign up page
├── routes/             # Route definitions
├── types/              # TypeScript type definitions
└── app.css             # Global styles and custom animations
```
