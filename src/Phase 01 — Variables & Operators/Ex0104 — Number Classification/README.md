# 🧩 Exercise #0104 — Number Classification

> **Difficulty:** 🟢 Easy  
> **Phase:** 01 — Fundamentals  
> **Concepts:** Conditionals · Comparisons · Modulo operator · Logical reasoning

---

## 🎯 Problem

Given an integer, classify it according to its sign and parity.

Return `"positive-even"`, `"positive-odd"`, `"negative-even"`, `"negative-odd"`, or `"zero-even"`.

Remember: **zero is an even number.**

## 💻 Function

    function classifyNumber(n) {
        // ...
    }

## 🧪 Examples

    classifyNumber(8);
    // "positive-even"

    classifyNumber(7);
    // "positive-odd"

    classifyNumber(-4);
    // "negative-even"

    classifyNumber(-3);
    // "negative-odd"

    classifyNumber(0);
    // "zero-even"

## 📌 Constraints

- `n` is an integer.

## 🎯 Goal

Combine comparison and modulo logic to handle multiple conditions.
