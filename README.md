# Food Manager

## Description
Food Manager is a family-oriented application designed to simplify meal planning and grocery shopping. The project enables users to create meal cards with ingredients, associate them with a weekly calendar, and generate a consolidated shopping list based on the planned meals.

## Technologies Used

- **Frontend**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Storage**: LocalStorage (No authentication system implemented)

## Features

- 📌 **Meal Cards**: Users can create, edit, and delete meal cards containing a list of ingredients.
- 📅 **Weekly Calendar**: Associate meal cards with specific days of the week.
- 🛒 **Shopping List**: Automatically generate a grocery list containing the total required ingredients for the week.
- 📱 **Responsive UI**: Optimized for mobile and desktop usage using Tailwind CSS.

## Installation

### Prerequisites
- Node.js (latest LTS recommended)
- npm or yarn

### Steps
1. Clone the repository:

  ```sh
  git clone https://github.com/Articvolt/food-manager.git
  ```

2. Navigate to the project directory:

  ```sh 
  cd food-manager
  ```

3. Install dependencies:

  ```sh
  npm install
  ```

4. Start the development server:

  ```sh
  npm run dev
  ```

### Usage

- Create Meal Cards: Add meals along with their ingredients.
- Schedule Meals: Assign meals to specific days in the weekly calendar.
- Generate Shopping List: View and manage the auto-generated shopping list.