# Abdullah Hashim Company (AHCL) - Corporate Website

## Project Overview

This is the official corporate website for **Abdullah Hashim Company (AHCL)**, a leading Saudi conglomerate delivering excellence across various sectors including automotive, marine, agriculture, and industrial sectors since 1950. 

The website is designed to provide information about the company's divisions, news, events, and contact locations. It features a modern, responsive design with interactive elements and seamless navigation.

## Technologies & Tools Used

This project is built using modern web development technologies to ensure high performance, SEO optimization, and a great user experience:

- **Next.js (App Router)**: The core framework used for server-side rendering, static site generation, and routing.
- **React**: The UI library used for building interactive components.
- **Tailwind CSS v4**: A utility-first CSS framework used for rapid and responsive styling.
- **Framer Motion**: Used for smooth, declarative animations and scroll-reveal effects.
- **Swiper**: Integrated for modern touch-friendly sliders and carousels.
- **React Hook Form**: Used for efficient and flexible form state management and validation (e.g., in the Contact Us page).
- **React Paginate**: Used for client-side pagination (e.g., in the Locations Filter).
- **TypeScript**: Ensures type safety and improves developer experience across the entire codebase.

## Key Features

- **Dynamic Locations Filter**: A comprehensive "Find Us" section that allows users to filter branches and showrooms by division, department, and city, complete with Google Maps integration and pagination.
- **Internationalization (i18n) Support**: Configured to support multiple languages (English and Arabic) using cookie-based locale detection.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **CMS Integration**: Connects to a robust backend CMS to fetch live data for locations, news, and events.

## Getting Started

First, make sure you have Node.js installed. Then, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains the Next.js App Router pages (`/contact-us`, `/about-us`, `/news`, etc.) and the root layout.
- `src/components`: Reusable UI components grouped by feature (e.g., `contact`, `layout`, `ui`).
- `src/hooks`: Custom React hooks for data fetching and state management (e.g., `useFindUs`).
- `src/services`: API client functions to communicate with the CMS backend.
- `src/providers`: Global context providers (e.g., `LanguageProvider`, `LoadingProvider`).
- `src/types`: TypeScript interfaces and type definitions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
