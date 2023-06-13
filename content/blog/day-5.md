+++
title = "Day 5"
date = 2023-05-12
draft = false
+++

I'm a little bit late on this post, which is unfortunate, but partially to be
expected. My grandmother's birthday held me back this time. I think as time goes
on, I'm going to get better and more consistent at tracking all of this, but for
the time being it's a little bit spotty.

Still no more work on mahampreter, which should change soon, but I started working
on the [DNS project][1] that Julia Evans designed and created. I've been enjoying
figuring out how to use Rust to do some basic bit manipulation. I might opt to try to use
less libraries on the second pass and do the work myself.

I started using `deku`, a Rust library for showing structs, but I found that `bitvec` has
a better public API for what I'm trying to do.

[1]: https://implement-dns.wizardzines.com/
