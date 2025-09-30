### Task Manager CLI (TypeScript)

A simple TypeScript project that demonstrates a minimal task manager you can run from the terminal. It constructs a `TaskManager`, adds a couple of tasks (with an optional deadline), and prints them.

This is a starting point you can extend into a full CLI (with argument parsing, persistence, etc.).

---

### Features
- **Add tasks**: Create tasks with a name and optional deadline
- **List tasks**: Print tasks with their deadlines (or “No deadline”)
- **Typed models**: Strongly typed `Task`, `TaskStatus`, and `TaskManagerConfig`

---

### Requirements
- **Node.js**: v18+ recommended
- **npm**: v8+ (or use `pnpm`/`yarn` if you prefer)

---

### Getting Started
1. Install dependencies:

```
npm install
```

2. Run the example (dev mode):

```
npm run dev
```

You should see output similar to:

```
Created a new task manager instance! Config: Alan
Strivers DSA Sheet (No deadline)
Zyntr local storage to clerk <some date/time>
```

3. Build the project:

```
npm run build
```

4. Run the built output:

```
npm run build:run
```

---

### NPM Scripts
- **dev**: Runs `src/index.ts` with `tsx` for fast iteration
- **start**: Alias to `dev`
- **build**: Compiles TypeScript to `dist/`
- **build:run**: Builds then runs `dist/index.js`

---

### Usage (Code)
Edit `src/index.ts` to add your own tasks or logic. Current example:

```ts
import { TaskManager } from "./TaskManager";

const myTaskManager = new TaskManager({
    username: "Alan",
});

myTaskManager.addTask("Strivers DSA Sheet");
myTaskManager.addTask(
    "Zyntr local storage to clerk",
    new Date(Date.now() + 2 * 60 * 60 * 1000)
);
myTaskManager.showTasks();
```

---

### API Overview
- **`TaskManager`** (in `src/TaskManager.ts`)
  - `constructor(config: TaskManagerConfig)`
  - `addTask(name: string, deadline?: Date): Task`
  - `showTasks(): void`

- **Types** (in `src/types.ts`)
  - `Task`: `{ id, name, timestamp, status, deadline? }`
  - `TaskStatus`: `"completed" | "dropped" | "pending"`
  - `TaskManagerConfig`: `{ username, filename?, autoSave?, defaultDeadline? }`

Note: There is no persistence layer or status update method implemented yet. Feel free to extend the `TaskManager` with saving/loading and status mutators.

---

### Project Structure
```
src/
  index.ts          # Entry point example
  TaskManager.ts    # Task manager class
  types.ts          # Shared types
```

---

### Roadmap Ideas
- Add CLI argument parsing (e.g., `commander`, `yargs`)
- Implement persistence (JSON file, SQLite, etc.)
- Add commands: complete/drop tasks, filter/sort, priorities
- Improve output formatting (tables, colors)

---

### License
ISC