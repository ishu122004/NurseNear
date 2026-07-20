# NurseNear 🩺

**Care That Comes to You**

NurseNear is a home healthcare booking platform that connects patients with qualified nurses for in-home care. Built as a group academic project, the platform allows users to browse nurse profiles, filter by specialty, and book appointments directly from the browser — no backend required, powered entirely by vanilla JavaScript and mock data.

## 📖 About the Project

NurseNear was built to simulate a real-world home nursing service. The idea is simple: not everyone can make it to a hospital or clinic, and not every condition needs one. NurseNear lets patients search for nurses based on specialty, location, or care type, and book an appointment in a few clicks — all wrapped in a clean, mobile-friendly interface.

The project was completed as a one-week team assignment with a three-person team, where the goal was to apply core JavaScript concepts — DOM manipulation, event handling, asynchronous logic, and form validation — inside a realistic, multi-page application rather than isolated exercises.

## 🧩 Pages

The application consists of five pages, each handling a distinct part of the user journey:

- **Index Page** — The landing page and entry point of the app. Displays a preview of nurse profiles to visitors, but access to the main dashboard is gated behind login. Includes the login and sign-up forms with toggling between the two.
- **Main Page** — Unlocked after login. Acts as the central hub linking to nurse browsing, search, and appointments.
- **Search by Filter Page** — Lets users narrow down nurse listings by specialty (general, elderly, pediatric, wound care, maternity, post-surgery, and more), so patients can quickly find the right fit for their needs.
- **Appointment Form Page** — A fully validated booking form where patients enter their details, select a nurse specialty, choose a date, and confirm their appointment. Includes real-time input validation using regular expressions.
- **Profile Page** — Displays detailed nurse profiles, fetched and rendered dynamically using asynchronous JavaScript.

## ⚙️ Key Concepts Used

This project was as much about practicing core JavaScript fundamentals as it was about building something usable. Concepts applied throughout include:

- **Promises, `then()`, and `catch()`** — used to handle asynchronous data fetching for nurse profiles and to manage form submission flows in a structured, readable way
- **`async` / `await`** — for cleaner, more readable asynchronous code when working with fetched data
- **`fetch()` API** — to simulate retrieving nurse profile data
- **`Map` and `Set`** — used for efficient data lookups and filtering logic when searching nurses by specialty
- **DOM Manipulation** — dynamically rendering nurse cards, toggling forms, and updating the UI in response to user actions
- **Event Handling** — click, input, and submit event listeners driving nearly every interactive element on the site
- **Form Validation with Regex** — validating names, ages, phone numbers, and addresses on the appointment form before submission
- **Responsive Design with Tailwind CSS** — mobile-first layouts, sticky navigation, and a consistent design system across all five pages

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- Vanilla JavaScript (ES6+)

No frameworks, no backend — just fundamentals, done properly.

## 👥 Team

This was a collaborative three-person group project completed within a one-week timeframe. My primary responsibility was the asynchronous and API logic layer — handling `fetch`, `async`/`await`, `Promise`-based flows, and data structuring with `Map` and `Set` for the search and profile features.

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Log in through the side navigation to unlock the main dashboard, search, and appointment booking pages

## 📌 Future Improvements

- Connect to a real backend and database instead of static/mock data
- Add real-time nurse availability tracking
- Integrate payment handling for appointment bookings
- Add user authentication with persistent sessions

## 🚀 Thank you
---

Built with 💙 as a JavaScript fundamentals project, focused on writing clean, functional, real-world code.
