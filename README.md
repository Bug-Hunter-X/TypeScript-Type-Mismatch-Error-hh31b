# TypeScript Type Mismatch Error

This repository demonstrates a common type mismatch error in TypeScript and provides a solution.

## The Bug

The `greeter` function expects a string argument, but an array of strings is passed to it, resulting in a type error during runtime.

## The Solution

The solution modifies the `greeter` function to accept an array of strings or iterates through the array to greet each element separately.  The solution also includes input validation to handle unexpected data types.