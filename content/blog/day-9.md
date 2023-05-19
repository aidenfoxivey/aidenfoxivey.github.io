+++
title = "Day 9"
date = 2023-05-18
draft = false
+++

alright, well, no luck compiling the kernel. I got kind of bored of it and decided
that I would spend some of my time doing "cryptopals", which I'm apparently not that 
good at. Tomorrow I want to work more on it and actually sit down to write more code.
I think I might have a talk with RC?

For your perusal, here are my notes:

```
The native MacOS M1 way

https://github.com/riscv-software-src/homebrew-riscv

They're compiled with multilib, so they can work for this as well. If we just straight up cross compile it, it takes some time.

Time taken

I also cross compiled it within a VM, with some delay

export CC=riscv64-unknown-elf-gcc
export LD=riscv64-unknown-elf-ld

these are since we're compiling ourselves

it keeps saying that 

"-mcmodel=medany" is undefined but I don't think it is

ugh, still no luck for some reason
I'm not sure what's up
```

Oh also, I'm following the German duolingo track pretty well. Hilariously, it's the thing I'm doing
most consistently at this point.

Gotta go to bed nowish, but thanks for listening to the lowest quality blog post yet. I promise I'll
give you more to chew on tomorrow. :) Just hang in there.
