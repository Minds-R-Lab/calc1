# Calculus 1 — Interactive Learning Website

An interactive website for teaching and learning **Calculus 1** at the university level. The goal is to move beyond static notes and worked examples toward a site where students *do* calculus — graphing, manipulating, solving, and getting instant feedback — rather than just reading about it.

## Goals

- Give university Calc 1 students a single, modern resource that covers the standard syllabus.
- Replace passive reading with **interaction**: every concept should have something the student can drag, plot, click, or solve.
- Provide **immediate feedback** on practice so students can learn from mistakes without waiting for office hours.
- Keep the site **free, open, and easy to host** so it can be used inside or outside any particular course.

## Audience

University students taking Calculus 1 (single-variable differential calculus, with an introduction to integration). The content assumes a working knowledge of high-school algebra and trigonometry.

## Planned topics

The site will cover the standard Calc 1 progression:

1. Functions, graphs, and review of precalculus essentials
2. Limits and continuity
3. The derivative — definition, rules, and interpretation
4. Applications of the derivative (related rates, optimization, curve sketching, linearization)
5. The Mean Value Theorem and L'Hôpital's Rule
6. Antiderivatives and the indefinite integral
7. The definite integral and the Fundamental Theorem of Calculus
8. Basic techniques and applications of integration

## Interactive features

The site is built around four kinds of interaction:

- **Graphing & visualizations** — interactive plots of functions, limits, secants converging to tangents, Riemann sums, and so on. Students change parameters and immediately see the effect.
- **Practice problems & quizzes** — auto-graded exercises with instant feedback, hints, and the ability to retry with new randomized values.
- **Step-by-step solutions** — worked examples where each step is hidden until the student asks for it, encouraging them to try first.
- **Video / animated lessons** — short embedded videos and animations explaining the harder conceptual jumps (e.g. the epsilon-delta definition, the FTC).

## Tech stack

Static **HTML / CSS / JavaScript**, hosted on **GitHub Pages** directly from this repository. This keeps the project:

- free to host,
- easy for anyone to fork and contribute to,
- fast for students (no backend, no login required),
- simple to maintain.

Likely libraries:

- **MathJax** or **KaTeX** for rendering mathematical notation
- **Desmos API**, **JSXGraph**, or **Plotly** for interactive graphs
- Vanilla JS (or a light framework) for quizzes and step-by-step reveal logic

## Repository layout (planned)

```
/                index.html and top-level pages
/topics/         one folder per topic (limits, derivatives, …)
/assets/         shared CSS, JS, images
/components/     reusable interactive widgets (graphers, quizzes)
/videos/         embedded or linked video lessons
```

## Status

Early scaffolding. This README defines the direction; content and interactive components are being added topic by topic.

## License

To be decided (likely an open educational license such as CC BY 4.0 for content and MIT for code).

## Author

Mohamed Mabrok — Minds R Lab
