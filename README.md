# 🧾 Redux Toolkit To-Do App

A very simple and clean To-Do application built with **React** and **Redux Toolkit**. This app demonstrates basic usage of Redux state management — adding and removing tasks using a global store.

---

## 🌐 Live Demo

👉 [https://mahnoorshabbir-reduxtoolkit-todo.vercel.app/](https://mahnoorshabbir-reduxtoolkit-todo.vercel.app/)

---

## 🚀 Features

- ➕ Add new todos
- ❌ Delete existing todos
- 🧠 State management via Redux Toolkit `createSlice`
- 🗂️ Centralized store setup using `configureStore`
- ⚛️ Functional components using `useSelector` and `useDispatch`
- 🎨 Minimal UI with clean alignment

---

## 📁 Folder Structure

```txt
src/
├── app/
│   └── store.js             # Redux store configuration
│
├── components/
│   ├── AddTodo.jsx          # Input + Add button
│   └── TodoItem.jsx         # Displays individual todos with delete
│
├── features/
│   └── todo/
│       └── todoSlice.js     # Redux Toolkit slice for todos
│
├── App.jsx                  # Main app layout and rendering todos
├── main.jsx                 # Entry point with <Provider>
└── index.css                # Global styles
---
## 🧠 How It Works

- `todoSlice.js` defines the todo state and reducer actions  
- `store.js` sets up the Redux store using `configureStore`  
- The app is wrapped in `<Provider>` inside `main.jsx`  
- `AddTodo.jsx` dispatches an action to add a todo  
- `TodoItem.jsx` dispatches a remove action for each todo  

---

## 🛠 Tech Stack

- ⚛️ React  
- 🧠 Redux Toolkit  
- ⚡ Vite  
- 🎨 Tailwind CSS  
