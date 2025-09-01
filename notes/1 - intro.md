# Intro - What is Software Engineering?

Mainly, it is Modeling and Problem Solving. User interaction is also an important concept.

- Modeling represents information in appropriate abstractions *(UML models, Object-relational model (ORM))*
  - Maintain models as software process progression
  - Traceability from start to finish
- Problem Solving is when you learn how to make important design decisions *(Architecture (High-Level), Design Patterns (Low-Level))*
  - Flexibility and Extensibility
  - Maximize return on Investment
- User Interaction is finding out exactly waht the software is supposed to do *(Use Cases, GUI Mockups)*
  - Engage customer early and often
  - Alpha and beta test with key customers early.

## Modeling

Abstract representation of a system where one focuses on relevant details and may hide non-interesting details

- Application Domain Model
  - Model of real-world system, as observed and relevant
  - A much higher level representation of a system. (May not even include references to DBs, etc.)
  - Specifically:
    - It represents the **users** problem
    - May change due to the changing nature of the world
      - New puzzles, new requirements
- Solution Domain Model
  - Model of the construction of an application which can readily be executable
  - Much lower level representation of a system (includes DBs, specific functions and helpers, etc.)
  - Specifically:
    - It produces a model of the **desired system** with more rich details
    - May change due to technology changing
      - New languages, tools, standards
      - Standards upgrade
      - Platforms become unavailable

### Object-oriented Paradigm (OOP)

- Combines application and SOlution domain modeling
  - No longer separate activities
- Start with Application domain model
  - Objects and Relationships
- Introduce Solution DomainModel as objects
- Solution Domain is transformation of Application Domain

## Use Case in One Sentence

Identify discrete transformation of system from one consistent state to another consistent state.

- Start mapping out application at this level of granularity
- Quickly come to global consensus on problem
- At this stage you should answer "what" questions:
  - what should users see?
  - What capabilities exist that can be taken advantage of?
  - What is the structure of data?
  - What constatns and invariants exist?

### Structure of a Use Case

Use Case: [Verb Noun]

- Participating Actor: Initiated by *Actor1*
- Entry Condition
  - *List here*
- Exit Criteria
  - *Updated state of system (NOT a function return)*
- Flow of events: 
  - *Initiating Actor* Performs action
  - System respond in kind and updated display [Even Step]
  - *Actor* performs action
  - System responds... [Even Step]
  - etc... (most use cases only have 4 steps; remember, this is an abstraction. )