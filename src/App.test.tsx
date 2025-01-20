// import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Example check for any key element
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});



