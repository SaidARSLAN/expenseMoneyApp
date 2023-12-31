# Expense Tracker Context API

This is a simple Expense Tracker application using React Context API and `useReducer` for state management.

## Context Structure

### GlobalContext

The `GlobalContext` provides the state and dispatch functions to manage the `money` in the application.

### State Type

The state consists of a `money` field representing the current balance.

### Action Type

The application supports the following action:

- `EXPENSE`: Deducts the specified amount from the current balance.

### Reducer

The `reducer` function handles state transitions based on the provided actions.

## Usage

### Installation

Make sure you have React and any other dependencies installed.

```bash
npm install
```

### Running the Application

To run the application:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Context API Usage

### Importing the Context

```javascript
import { useContext } from 'react';
import GlobalContext, { childrenType } from './path/to/GlobalContext';
```

### Providing the Context

Wrap your application or the relevant components with the `Provider`.

```javascript
import { Provider } from './path/to/GlobalContext';

const App = () => {
  return (
    <Provider>
      {/* Your components go here */}
    </Provider>
  );
};
```

### Using the Context in Components

```javascript
import { useContext } from 'react';
import GlobalContext from './path/to/GlobalContext';

const MyComponent = () => {
  const { money, dispatch } = useContext(GlobalContext);

  // Your component logic using money and dispatch
};
```
