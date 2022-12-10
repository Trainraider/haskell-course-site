Original Outline prompt:

Write an outline for a course to teach Haskell. The course should be structured according to modern teaching techniques to optimize for learning. The course should teach all the basic syntax and concepts to start writing useful programs in Haskell. Format the outline with Markdown. Put the whole thing in a code block.

Basic Section prompt:

Write out the "Declarations and scope" section. These are the requirements:

* Use a "hands on" learning approach by having the reader to follow along in ghci throughout the section with each example.
* Include code examples.
* Explain concepts so that they are clear and easily understandable, at a 3rd grade reading level. Don't assume knowledge of programming lingo unless they are part of previous sections in the outline. 
* Make the material engaging and possibly even fun by inserting images in the lesson to improve reader engagement, using the syntax ::\<image description\>::, for example:

::a boat on a lake at sunset::

You should use at least one image, to break up the wall of text if nothing else.

# Haskell Fundamentals

## Course Outline

* Introduction to functional programming and Haskell
	* What is functional programming?
	* Why learn Haskell?
* Getting started with Haskell
	* Setting up the Haskell environment
    * Hello World!
* Basic syntax
	* Declarations and scope
    	* Top-level declarations
    	* Local declarations with let and where
    * Variables and binding
    * Functions and function calls
        * Function composition
        * Higher-order functions
    * Comments and whitespace
* I/O and error handling
    * Basic input and output
    * Handling errors with Maybe and Either
* Basic types and operators
    * Built-in data types
    * Basic operators and functions
* Working with data
    * Lists and list operations
    * List comprehensions
    * Higher-order functions for working with lists (map, fold, filter)
    * Tuples
    * Pattern matching
* Algebraic data types
    * Defining and using algebraic data types
    * Data type hierarchies
    * Type synonyms
* Modularity and code organization
    * Defining and using modules
    * Import statements and qualified names
    * Reusing code in larger projects
* Recursion and recursive data structures
    * Recursive functions
    * Lists and trees as recursive data structures
* Type classes and polymorphism
    * What are type classes?
    * Defining and using type classes
    * Polymorphic functions
    * Type signatures and their role in ensuring correct behavior
* Concurrency
    * Basics of concurrent programming in Haskell
    * Working with threads and concurrent data structures
* Advanced concepts
    * Monads
    * Lazy evaluation
    * Performance optimization
* Testing and debugging
    * Writing unit tests for Haskell code
    * Debugging techniques and tools
* Putting it all together
    * Building a simple Haskell project (Blackjack)
    * Tips and best practices for writing Haskell code
    * Avoiding common mistakes when working with functional concepts
    * Common performance issues and how to avoid them