# Projects

Some software and software-adjacent projects I've done, along with the lessons I've learnt from them.

<details>
<summary>[BetterPrep](https://github.com/huizhuansam/BetterPrep)</summary>

**Description:** BetterPrep is an application that helps technical interviewees practice LeetCode style questions with another person over the Internet. It is a ground-up rewrite of Peer Prep.

**My Role:** I'm the sole developer for this project, in charge of UI/UX design and implementation, backend system architecture and engineering, database management, DevOps etc.

**Why?:** I didn't have much experience building a full stack application, so this was a way for me to learn up React, microservice routing, Kubernetes, and deploying apps to the Internet. Plus since everyone is hiring Go engineers now...

**Status:** In progress

**Lessons Learnt:**

1. Don't obsess over perfect code.

**Technologies Used:**

- React.js
- Node.js
- Spring Boot
- Go
- PostgreSQL
- MongoDB
- Docker

</details>

<details>
<summary>[Static Program Analyzer](https://github.com/huizhuansam/CS3203-SPA)</summary>

**Description:** Coursework for [CS3203: Software Engineering Project](https://nusmods.com/courses/CS3203/software-engineering-project). In this project, a team of 6 software engineers are tasked to write a static analyzer for a fictional programming language called [SIMPLE](https://nus-cs3203.github.io/course-website/contents/basic-spa-requirements/simple-programming.html).

**My Role:** I co-designed and developed the Source Processor library, and took the initiative to manage the build toolchain with CMake. To improve developer experience and code quality, I:

- Configured clang-format to enforce a consistent code style.
- Tuned compiler settings for Clang on macOS and MSVC on Windows to maximize optimization and enable strict compile-time checks to catch potential bugs early.
- Set up GitHub Actions workflows to automatically validate code quality before release.

As the project leader, I guided the team to deliver features on time, established effective development workflows, and led SCRUM rituals, including biweekly sprint planning and twice-weekly standups.

**Status:** Completed and archived

**Lessons Learnt:**

1. For projects of this size and scope, SCRUM felt like a waste of time and energy. I’m not saying it’s unimportant—it probably works better when the requirements are vague, like in real-world software engineering. But in our case, most of the biweekly sprints were spent managing GitHub Issues (which tracked contributions for grading) and writing the project report—tasks that could have easily been done asynchronously.
2. (Not) C++. I now understand how OOP works in C++, along with smart, dumb, silly, and zany pointers (yes, all of them), plus the whole ordeal with file headers. However, this project just didn’t need most of the language's powerful features—and honestly, it felt like overkill given how cumbersome C++ can be.
3. The study of programming languages is very interesting. I wished I had another semester in school to learn more about how compilers work, because Clang is basically black magic to me.
4. Team synergy > individual skill.

**Technologies Used:**

- C++17
- CMake
- Catch2
- GitHub Actions

</details>

<details>
<summary>4-Way Classification of News Articles</summary>

**Description:** Team Project component for [CS4248: Natural Language Processing](https://nusmods.com/courses/CS4248/natural-language-processing).

**My Role:** Performed data cleaning, preparation, and feature engineering using word2vec and GloVe. Used naïve models for baseline performance benchmarking to evaluate and compare more complex models.

**Status:** Completed

</details>

<details>
<summary>[Peer Prep](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g51)</summary>

**Description:** Team Project component for [CS3219: Software Engineering Principles and Patterns](https://nusmods.com/courses/CS3219/software-engineering-principles-and-patterns)

**My Role:** Backend software engineer

**Status:** Completed and archived (no one wanted to pay the cloud bills)

**Technologies Used:**

- Node.js
- Express.js
- MongoDB
- PostgreSQL
- RabbitMQ
- Socket.io
- Docker

</details>

<details>
<summary>Weapon Detection in Images</summary>

**Description:** Team Project component for [CS4243: Computer Vision and Pattern Recognition](https://nusmods.com/courses/CS4243/computer-vision-and-pattern-recognition).

**My Role:** Performed data cleaning, preparation, and feature engineering using edge detection filters.

**Status:** Completed

</details>

<details>
<summary>ETF Price Prediction with ML Models</summary>

**Description:** Team Project component for [CS3244: Machine Learning](https://nusmods.com/courses/CS3244/machine-learning). Forecasting the price trend of exchange-traded funds using machine learning models.

**My Role:** Performed data cleaning, preparation, and pre-training analysis on time series data using Fast Fourier Transform (FFT). Used linear models for baseline performance benchmarking to evaluate and compare more complex models.

**Status:** Completed and archived

</details>

<details>
<summary>[Artificial Intelligence Search Algorithms](https://github.com/huizhuansam/CS3243-Projects)</summary>

**Description:** Individual project component for [CS3243: Introduction to Artificial Intelligence](https://nusmods.com/courses/CS3243/introduction-to-artificial-intelligence). It covers classic search algorithms, including Depth-First Search, Breadth-First Search, Dijkstra's Algorithm, A* Search, and adversarial search algorithms like Minimax, along with optimization techniques such as Alpha-Beta Pruning.

**My Role:** Algorithm designer

**Status:** Completed and archived

</details>

<details>
<summary>SparkSpace</summary>

**Description:** Entry for 2022 Huawei Cloud SPARK Hackathon. A mobile application for short-form educative video content.

**My Role:** UI/UX developer

**Status:** Completed and archived

**Technologies Used:**

- Figma
- FlutterFlow

</details>

<details>
<summary>Howdey</summary>

**Description:** Entry for NUS Hackers' 2022 Hack&Roll 24-hour Hackathon. A mobile application that sends push notifications containing arbitrary messages, a tool for friendly annoyance.

**My Role:** Mobile developer (for an hour, until I realized my laptop can't run Android device emulations without overheating and killing itself), demo slide deck designer, application tester.

**Status:** Incomplete and abandoned (we gave up)

**Lessons Learnt:**

1. Hackathons are meant to test the speed of developing new ideas into usable prototypes. Teams should use technologies that they are already familiar with to validate the ideas. Learning to program for an entirely unfamiliar platform (mobile) within 24 hours is commendable but also a footgun waiting to happen.
2. By midnight, it was obvious that there was only one programmer that had the hardware and skill to continue developing the app. The rest of us could not do much but to repackage our idea to fit the whatever limited functionality that the programmer could stuff into the codebase. That night, I learnt that Hack&Roll's freebies were pretty awesome and they've got crazy sponsors. I still have Jane Street's XS size t-shirt that fits like an XL.

**Technologies Used:**

- Flutter
- Google Slides

</details>

<details>
<summary>[S.P.A.M.](https://github.com/huizhuansam/tp)</summary>

**Description:** Team Project component for [CS2103T: Software Engineering](https://nusmods.com/courses/CS2103/software-engineering).

**My Role:** Software engineer, SCRUM master

**Status:** Completed and archived

**Technologies Used:**

- Java 11
- JavaFX
- Jackson
- JUnit
- GitHub Actions

</details>

<details>
<summary>[AinsleyBot](https://github.com/huizhuansam/ip)</summary>

**Description:** Individual Project component for [CS2103T: Software Engineering](https://nusmods.com/courses/CS2103/software-engineering). A silly chatbot-style todo list application, where Ainsley Harriot becomes your personal assistant.

**My Role:** Software engineer

**Status:** Completed and archived

**Technologies Used:**

- Java 11
- JavaFX

</details>

<details>
<summary>[Sponsorr!](https://github.com/huizhuansam/sponsorr-frontend)</summary>

**Description:** Completed as part of [CP2106: Independent Software Development Project](https://orbital.comp.nus.edu.sg/). A sponsor-matching platform for businesses and event organizers.

**My Role:** Frontend developer, UI/UX designer, tester

**Status:** Completed and archived

**Technologies Used:**

- TypeScript
- Vue.js
- Vuetify
- Figma
- Cypress
- GCP Firebase
- GitHub Actions

</details>
