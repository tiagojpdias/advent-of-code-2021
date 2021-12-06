# Day 1

## Problem

Find how many times a measure increases since last read.

## Solution

In this case I choose to:

- Read the sample data from a text file
- Transform data from string -> string[] -> number[]
- Cycle through all the values using [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and increment a variable
  - For part#2 an intermediate step was done to sum values in 3 at a time
