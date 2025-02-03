# React useEffect Infinite Rendering Bug
This repository demonstrates a common error in React's `useEffect` hook, leading to infinite re-rendering.  The issue arises from incorrectly managing dependencies within the useEffect's second argument (the dependency array).

## The Problem
The `bug.js` file contains a component that uses `useState` and `useEffect`.  Without `count` in the dependency array, the effect runs on every render, causing an infinite loop because setting the count triggers another render, which in turn triggers the effect, and so on.

## The Solution
The `bugSolution.js` file shows the corrected code.  By including `count` in the dependency array, the effect only runs when the value of `count` changes.