# About
This is a proof of concept to create a shared npm library/framework to be reused by n applications.

This repository contains two separate node modules:
* shared: a module that should is intended to be shared and reused
* app: an application that makes use of the shared module

My goal is to create a shared library (more of a framework actually) that will be reused across projects and will integrate:
* shared code (TypeScript)
* type definitions for the shared code
* external dependencies (e.g., AngularJS, redux, ...)
* typings for the external dependencies
* build configuration & build tasks for the shared library
* build configuration & build tasks for the applications using the shared library

With such a shared library, the goal is that an application that depends on it must only define/load things that it specifically needs and not repeat everything (dependencies, typings configuration, build and build configuration, etc).

Ultimately, I want to limit the impact of changes to the client applications as much as possible and maximize reusability (e.g., build & build config). Also, I don't want to have to fix bugs/apply improvements to n applications when I could factor the common parts out in a shared library.

To achieve this, I thus want to:
* put shared code (TypeScript) in the shared module and export typings for those APIs
* define most if not all dependencies in the shared module
* define as few peerDependencies as possible for cases where it cannot be avoided
* configure typings in the shared module so that typings of all dependencies exposed by the shared module are available to client applications
* (bonus) add a CLI to the shared module for the build tasks and for scaffolding
* have the app module depend only on the shared module and load things from the shared module

# Usage
* clone the repo
* run npm run setup on the shared module
* run npm run setup on the app module
* run npm start on the app module

If all works well then the app module should start without complaining about missing classes/types/variables, ...

Bonus points if we minimize the amount of required configuration in the app module.
