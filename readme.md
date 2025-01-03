# Task Management Application

## Overview

This project is a simple Task Management Application built with **Next.js**. The application allows users to add tasks, view all tasks, and mark them as done or not done. Data persistence is handled using **local storage**, ensuring tasks remain available even after refreshing the page.

## Features

1. **Add Tasks:**

   - A dedicated screen to add new tasks.

2. **View Tasks:**

   - A page displaying all tasks, categorized by their completion status.

3. **Mark Tasks as Done/Not Done:**

   - Functionality to toggle tasks between completed and not completed.

4. **Data Persistence:**

   - Local storage is used to persist tasks, ensuring data is not lost on refresh.

5. **Custom UI Design:**

   - UI/UX design has been crafted from scratch to showcase creative skills.

6. **Next.js Framework:**
   - Built using the Next.js framework for its performance and modern development features.

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone [https://github.com/pintu544/TaskManagentUI.git](https://github.com/pintu544/TaskManagentUI)
   ```

2. Navigate to the project directory:

   ```bash
   cd TaskManagentUI
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Add Tasks

1. Navigate to the "Add Task" screen.
2. Enter the task name in the input field.
3. Click the "Add" button to save the task.

### View Tasks

1. Navigate to the "All Tasks" page to view all tasks.
2. Tasks are displayed in two sections:
   - Completed tasks
   - Pending tasks

### Mark as Done/Not Done

1. Use the checkbox or toggle button next to each task to change its status.
2. Changes are immediately saved in local storage.

## Technology Stack

- **Framework:** Next.js
- **Styling:** Custom CSS/Styled-Components/TailwindCSS (Specify which you used)
- **Data Persistence:** Local Storage
- **State Management:** React useState/useContext (Specify if applicable)

## Folder Structure

```
.
├── components/        # Reusable UI components
├── pages/             # Next.js pages
├── styles/            # Global and component-specific styles
├── utils/             # Utility functions (e.g., local storage handlers)
├── public/            # Static assets
└── README.md          # Project documentation
```

## Future Enhancements

- Add task categories or tags.
- Implement dark mode.
- Enable drag-and-drop for task reordering.
- Add animations for smoother UI transitions.

Live Link:-https://legendary-creponne-f43706.netlify.app/

Enjoy managing your tasks efficiently with this simple and elegant Task Management Application!
