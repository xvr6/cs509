# Task Master

Task Master is a task management system built with React, TypeScript.

## Project Structure

```plaintext
src/
├── components/
│   ├── AssignedComponents/
│   ├── CompletedComponents/
│   ├── EngineerComponents/
│   ├── OverviewComponents/
│   └── TaskComponents/
├── context/
├── domain/
└── tests/
```

### Key Directories

- **components/**: Contains React components for different parts of the application.
- **context/**: Implements the Context API for state management.
- **domain/**: Contains domain models such as `Task`, `Engineer`, and `TaskManager`.
- **tests/**: Contains unit tests for components and functionality.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xvr6/cs509.git
   cd cs509/Assignments/2. Task Master/p2 - application/task-master
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. **Add Engineers**: Navigate to the Engineer section to add engineers.
2. **Create Tasks**: Use the Task Create form to add new tasks.
3. **Assign Tasks**: Assign tasks to engineers and track their progress.
4. **View Overview**: Use the dashboard to monitor task distribution and completion.

## Testing

This project uses Vitest for testing. To run the tests:

```bash
npm run test
```

To check test coverage:

```bash
npm run test -- --coverage
```
