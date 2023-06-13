+++
title = "Getting Started with Haskell on M1 Mac"
date = 2023-06-12
draft = false
+++

Getting Started with Haskell on M1 Mac

I started by using GHCUP

https://www.haskell.org/ghcup/

I’m not entirely sure what it’s supposed to be, but it seemed to offer a nicer experience than just installing `cabal-install` view `brew`.  One thing I notice is that `cabal install` seems to actually be compiling the new packages. It took a really long time to install so I went to shower while I waited.

Okay so I came back from the shower and still no progress. I realized you have to press enter. Yeah - sometimes I’m not entirely sure I’m cut out for software engineering. An embarrassing button press later, I saw ghcup curling tarballs across the wide open inter webs. It took like maybe 15 seconds? 😳

I used `hls` with Sublime Text 4.

The resources I’m using are “Learn You a Haskell For Great Good”, which is available online at {insert link} and “Learn Physics With Functional Programming”. 

I’m going to use this somewhat as a live journal as to what I learn with Haskell. I’ll put the time stamp that I’ve added to it as I go. Hopefully it should be somewhat educational!

So, monads. You know how Haskell has the promise of no side-effects? Well, that’s really only true to a point. The promise of no side-effects is fun for a make-believe system, but eventually we want out programs to do actual things. Things like printing to the console, reading IO, or even unwrapping return values are done using a monad. 

— in progress
