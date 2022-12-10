# Introduction to functional programming and Haskell

## What is Functional Programming?

Functional programming is a style of programming that is based on mathematical functions. In this type of programming, we write programs by defining and combining simple functions. This is different from other styles of programming, where we often write instructions that tell the computer what to do step by step.

One of the key benefits of functional programming is that it can make our programs easier to understand and reason about. This is because functional programs are made up of small, modular pieces that can be tested and understood independently. This makes it easier to find and fix bugs, and to make changes to our programs without breaking them.

Functional programming also allows us to write programs that are more concise and expressive. Because we can define and reuse functions, we can write programs that do more with less code. This can make our programs faster to write and easier to read and understand.

Here is an example of a simple mathematical function in Haskell:

    add x y = x + y

This function takes two numbers, x and y, and returns their sum. We can use this function by calling it with two arguments, like this:

    add 3 4

This would return the result 7.

In functional programming, we often define functions like this, and then combine them to create more complex programs. This allows us to break down our programs into small, manageable pieces that are easy to understand and work with.

Overall, functional programming is a powerful and expressive way to write programs. It can help us create programs that are more reliable, easier to understand, and more concise. In this course, we will learn how to use the Haskell programming language to write functional programs.

## Why learn Haskell?

Haskell is a powerful and versatile programming language that has many benefits. Here are just a few reasons why you should learn Haskell:

Haskell is a **functional** language, which means that it is designed to make it easy to write programs that manipulate data and perform complex operations. This makes Haskell a great choice for many types of applications, such as data analysis and machine learning.

Haskell is **concise** and **readable.** Because Haskell is a functional language, you can often write programs in fewer lines of code than you would need in other languages. This means that you can write programs quickly and easily, and it's easy for other people to understand your code.

Haskell is **type-safe**. This means that the Haskell compiler will catch many common mistakes and bugs in your code, making it easier to write programs that work correctly.

Haskell has a **rich ecosystem** of libraries and tools. This means that you can use Haskell to solve many different types of problems, and you can easily find code and libraries that can help you do so.

Here's an example of a simple Haskell program that calculates the average of a list of numbers:

    average :: [Double] -> Double
    average xs = sum xs / fromIntegral (length xs)

This program is only two lines long, but it's powerful and easy to understand. It takes a list of numbers (xs) and calculates the average of those numbers. You can see how concise and readable the code is, even if you don't know Haskell yet.

Overall, learning Haskell is a great investment of your time and effort. It can open up new opportunities for you and help you become a better programmer.

# Getting started with Haskell

## Setting up the Haskell environment

To start writing Haskell programs, you'll need to set up a Haskell development environment. This involves installing the Haskell compiler and a program called Stack that will help us manage Haskell projects.

### Installing Stack on Mac and Linux

To install Stack on Mac or Linux, open a terminal and run the following command:

curl -sSL https://get.haskellstack.org/ | sh

This will download and run the Stack installation script, which will automatically install Stack on your computer.

Once the installation is complete, you should be able to open a terminal and type stack --version to verify that Stack is installed and working correctly.

### Installing Stack on Windows

First, visit https://get.haskellstack.org/stable/windows-x86_64-installer.exe in your web browser. This will download the Stack installation program to your computer.

Once the download is complete, run the installer and follow the on-screen instructions to install Stack.

Once the installation is complete, you should be able to open a command prompt or terminal and type stack --version to verify that Stack is installed and working correctly.

### Configuring Stack

Before you can use Stack to create Haskell projects, you'll need to configure some basic settings in the ~/.stack/config.yaml file (on Mac and Linux) or the %APPDATA%\local\stack\config.yaml file (on Windows). This file controls settings such as your author name, email, and GitHub username.

To configure these settings, open the ~/.stack/config.yaml file (on Mac and Linux) or the %APPDATA%\local\stack\config.yaml file (on Windows) in a text editor and find the following lines:

```
templates:
  params:
#    author-name:
#    author-email:
#    copyright:
#    github-username:
```

Uncomment each line shown here by removing the '#' symbol. Then add your information so that it looks like this:

```
templates:
  params:
    author-name: <your-name>
    author-email: <your-email>
    copyright: 'Copyright (c) <year> <your-name>'
    github-username: <your-github-username>
```

Replace \<your-name\>, \<your-email\>, \<your-github-username\>, and \<year\> with your own name, email, GitHub username, and the current year.

## Hello World!

Now that you have Stack installed and configured, you can use it to create a new Haskell project. This will create a new directory for your project and set up the necessary files and folders for you to start writing Haskell code.

To create a new project, open a terminal and navigate to the directory where you want to create your project.

Run the following command to create a new project using the simple-hcap template:

    stack new hello-world simple-hcap

This will create a new directory called hello-world and set up all the necessary files and folders for you to start writing Haskell code.

You can now navigate to the hello-world directory and open the src/Main.hs file. It should look like this:

```
module Main (main) where

main :: IO ()
main = do
  putStrLn "hello world"
```

Now, you can run the project using the `stack run` or `stack ghci` commands.

### Running a project with stack run

The stack run command will compile and run your Haskell project. This is useful for testing and debugging your code, or for running simple programs that don't require any additional input or interaction.

To run your Haskell project with stack run, open a terminal and navigate to the directory where your project is located. Then, run the following command:

    stack run

This will compile your project and run the main entry point of your program, which is typically defined in the app/Main.hs file. You should see your program output "hello world" in the terminal.

### Running a project with stack ghci

The stack ghci command will start an interactive Haskell REPL (read-eval-print loop) for your project. This is useful for experimenting with Haskell code and trying out new ideas.

To run your Haskell project with stack ghci, open a terminal and navigate to the directory where your project is located. Then, run the following command:

    stack ghci

This will start the Haskell REPL and load your project into it. You can then enter Haskell expressions and statements and see their results immediately. For example, you could try entering a simple arithmetic expression like 2 + 2 to see the result.

The stack ghci command also allows you to load specific Haskell modules from your project. This is useful for testing and debugging specific parts of your code. To load a module, use the :l (short for "load") command followed by the module name. For example, to load the Main module from the src directory, you would run the following command:

    :l src/Main

This would load the App module and make its functions and data types available in the REPL. You can then call functions from the App module and see their results immediately.

After loading src/Main, try running the main function like this:

    main

Your program should then output "hello world" in the terminal.

In summary, the stack run command is useful for running Haskell programs, while the stack ghci command is useful for experimenting with Haskell code and trying out new ideas. Both commands are essential tools for Haskell development.

Congratulations! You have now set up a Haskell development environment and are ready to start writing Haskell programs.

# Basic syntax

## Functions and function calls

In Haskell, functions are one of the most important concepts to understand. A function is a piece of code that takes some input and produces some output based on that input. In Haskell, we can define our own functions and use them in our programs, just like we can use the built-in functions that are provided by the language.

When we define a function in Haskell, we give it a name, specify the input it takes, and define what it does with that input. For example, we might define a function called double that takes a number and returns that number multiplied by 2. Here's how we could define that function:

    double x = x * 2

To call this function and use it in our program, we simply write its name followed by the input value we want to use. For example, if we want to double the number 4, we could write this:

    double 4

This would return the value 8, because 4 * 2 = 8.

In Haskell, we can also compose functions together to create new functions that do more complex things. For example, if we have a function double and a function triple that multiplies its input by 3, we can create a new function that first doubles its input and then triples it. Here's how we could do that:

    doubleAndTriple x = triple (double x)

We can also define functions that take other functions as input. These are called higher-order functions. For example, we might define a function that takes a function and an input value, applies the function to the input value, and then doubles the result. Here's how we could do that:

    applyAndDouble f x = double (f x)

Now, we can use this applyAndDouble function to apply a function of our choice to an input value and then double the result. For example, we could use it to double the result of calling the double function with the input value 4:

    applyAndDouble double 4

This would return the value 16, because double 4 is 8, and 8 * 2 = 16.

When we define a function in Haskell, we can specify whether its input and output should be visible only within the function (this is called local scope) or whether they should be visible outside the function as well (this is called global scope). To define a function with local scope, we use the let keyword. For example, we could define a function with local scope like this:

    let add x y = x + y

This function is only visible and usable within the block of code where it is defined. If we try to use it outside that block, Haskell will throw an error.

On the other hand, if we want to define a function with global scope, we don't use the let keyword. For example, we could define a global function like this:

    add x y = x + y

This function is visible and usable throughout our program, not just within the block of code where it is defined.

In summary, functions are a powerful and essential concept in Haskell. They allow us to define our own code that takes input and produces output based on that input. We can compose functions together to create more complex functions, and we can define higher-order functions.

## Variables and Binding

In this section, we'll be learning about variables and binding in Haskell. But before we dive into that, let's talk about something that might seem a little bit strange at first: the similarity between variables and functions.

In Haskell, a variable is a way to store a value so that we can refer to it later. For example, we might define a variable x like this:

    x = 10

This code says that x should be given the value 10. Now, whenever we use x in our code, it will be replaced with the value 10. For example, if we wrote the following code:

    y = x * 2

Then the value of y would be 20, because x is 10 and 10 * 2 is 20.

But here's where things start to get a little bit strange. In Haskell, a function is just a special kind of variable. In other words, a function is a way to store a piece of code so that we can use it later. For example, we might define a function like this:

    double x = x * 2

This code says that the double function should take a value x and return the result of x * 2. Now, whenever we call the double function, it will take the value we give it and multiply it by 2. For example, if we wrote the following code:

    y = double 10

Then the value of y would be 20, because double 10 is the same as 10 * 2 which is 20.

So, as you can see, there's a very close relationship between variables and functions in Haskell. Both are ways to store and refer to values, and both can be used in very similar ways.

Now, let's move on to the topic of this section: variables and binding in Haskell. When we define a variable in Haskell, we're creating a "binding" between the variable name and the value it refers to. For example, in the code we saw earlier:

    x = 10

The x variable is "bound" to the value 10. This means that whenever we use x in our code, it will be replaced with the value 10.

One important thing to note is that in Haskell, once a variable is bound to a value, it can't be changed. For example, if we wrote the following code:

    x = 10
    x = 20

The second line would be an error, because we're trying to change the value of x after it's already been bound to 10. In Haskell, once a variable is bound, it stays bound to that value for the rest of the program.

This might seem a little strange at first, but it's actually a very powerful idea. Because variables can't be changed once they're bound, we can be sure that the value of a variable will always be the same. This makes it much easier to reason about our code and to avoid some common programming errors.

Now, let's look at a code example to see how binding works in practice. Suppose we have the following code:

    x = 10
    y = x * 2

The first line binds the variable x to the value 10. The