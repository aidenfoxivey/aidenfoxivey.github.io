+++
title = "Day 18"
date = 2023-05-31
draft = false
+++

Okay so [this][2] is a pain in the ass. I started trying to get a `build.rs` file to compile for three different architectures, but then realized that the package lock that cargo puts on the target directory prevents another cargo instance from being able to be run. Purportedly there’s some sort of magic that can fix this through using `-target-dir` (something like that), but I honestly had no luck implementing that.

In the hopes of trying to use a native tool I ended up futzing around and realizing that a  script is actually the least stupidly complex or error-prone way to do things. I toyed with some other tools but I think there’s too much complexity in them.

A few concepts I read about today:
* global value numbering
* strength reduction
* loop invariant code motion
* scalar replacement of aggregates

I might write about them?

I’m also considering trying to implement my own hash table. I’m not sure that’s going to go particularly well.

I read something about [C’s delightful syntax][1] today, which I think is worth sharing.

Tomorrow I’m probably going to work on PyTorch contributions. It would make me really happy to finish something off by end of day tomorrow.

[1]: https://softwareengineering.stackexchange.com/questions/117024/why-was-the-c-syntax-for-arrays-pointers-and-functions-designed-this-way
[2]: https://github.com/rust-lang/cargo/issues/6412

