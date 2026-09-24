# Dev Stack

## 📖 Description

Dev Stack is a React + TypeScript web app that helps developers explore
frontend, backend, database, and tooling technologies, and build their own
ideal development stack by selecting technologies from an interactive grid.
Users can add technologies to a personal "stack" panel, remove them
individually, or clear the whole stack at once.

## 🛠️ Tech Stack

- React.js (with TypeScript)
- Tailwind CSS
- Vite
- React-Toastify

## ✨ Features

1. **Interactive Technology Grid** — Browse 12 technologies across categories
   (Frontend, Backend, Database, Language, Styling, DevOps), each with a
   rating, difficulty level, badge, and description.
2. **Build Your Stack** — Add technologies to a personal stack sidebar with
   one click; duplicate additions are blocked with a warning toast, and the
   selected card is visually disabled.
3. **Toast Notifications** — Real-time feedback (react-toastify) for every
   stack action: add, duplicate attempt, remove, and remove all.

## 🔗 Links

- GitHub Repository: [your-repo-link-here]
- Live Site: [your-deployed-link-here]

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code inside
JavaScript. It's used because it makes describing UI structure much more
readable than calling `React.createElement()` manually, and it gets
compiled into regular JavaScript under the hood.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they are
read-only inside that component. State is data a component manages and
can change *itself*, using something like `useState`. In this project,
`selectedStack` is state (managed inside `Technologies.tsx`), while `tech`
passed into `TechnologyCard` is a prop.

**3. What does the useState hook do, and where did you use it in this
project?**
`useState` lets a functional component hold and update its own local data
that persists between re-renders. I used it in `Technologies.tsx` to track
`selectedStack` (the list of added technologies), and in `Nav.tsx` to track
`isMenuOpen` for the mobile hamburger menu.

**4. What does the useEffect hook do, and why did you need it to load the
JSON data?**
`useEffect` runs side effects (like data fetching) after a component
renders. In this project I actually used React's newer `use()` hook with
`Suspense` instead of `useEffect` to load `data.json`, which achieves a
similar goal — fetching data and showing a loading state — but lets
`Suspense` handle the loading UI declaratively instead of managing a
loading state manually.

**5. Why does every item in a .map() list need a unique key prop?**
The `key` prop helps React identify which items changed, were added, or
were removed between renders, so it can update the DOM efficiently instead
of re-rendering the whole list. Without a stable unique key, React may mix
up items and cause bugs or performance issues. I used `tech.id` as the key
for both the technology cards and the stack items.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI based on a condition. In
`SelectedTechnologies.tsx`, I check `isEmpty = selectedStack.length === 0`
and render a dashed empty-state box with "Your stack is empty." when true,
or the actual list of selected technologies when false.

**7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?**
Parent to child: data is passed as props, e.g. `Technologies.tsx` passes
`tech`, `isSelected`, and `onAdd` down to `TechnologyCard`. Child to
parent: the parent passes a *function* down as a prop (e.g. `onAdd`,
`onRemove`), and the child calls that function with data when something
happens (like a button click). This is how `TechnologyCard`'s "Add to
Stack" button tells `Technologies.tsx` to update its state.