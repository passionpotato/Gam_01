# Blueprint: Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. Users can click a button to generate a new set of numbers and view a history of previously generated numbers.

## Project Outline

### Style and Design

*   **Layout:** Centered, single-column layout.
*   **Color Palette:** A modern and clean color scheme with a primary accent color for buttons and highlights.
*   **Typography:** Clear and readable fonts.
*   **Responsiveness:** The layout will adapt to different screen sizes.

### Features

*   **Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Number Display:** Displays the generated numbers in a clear and visually appealing way.
*   **Generate Button:** A button to trigger the generation of new numbers.
*   **Ad Section & History:** A list of previously generated number sets.
*   **Theme Toggle:** Switch between dark and light (white) modes to customize the visual appearance.

## Current Plan

*   **`index.html`:**
    *   Set up the basic HTML structure with a title, a container for the app, a display area for the numbers, a "Generate" button, a history section, and a theme toggle switch.
*   **`style.css`:**
    *   Style the main layout, number display, button, and history section using CSS variables for easy theme switching.
    *   Define dark and light theme colors.
*   **`main.js`:**
    *   Implement the JavaScript logic for generating random numbers, displaying them, managing history, and toggling between dark and light modes.
    *   Persist the user's theme preference in `localStorage`.
