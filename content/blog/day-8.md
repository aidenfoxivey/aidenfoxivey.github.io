+++
title = "Day 8"
date = 2023-05-17
draft = false
+++

Today the main focus is figuring out how to compile the Linux kernel for RISCV
with either Darwin ARM64 or maybe Linux ARM64. Admittedly, I'm not entirely
sure which is preferable. I have a suspicion that it will be easier to
compile on Linux than on Darwin, but I'm not entirely sure.

I know I definitely need a version of GCC that's native for ARM64 but compiles
RISCV code. This is the "cross" compiler part of things. I think there might
be some funny file system business as well. The TLDR is that I don't really
know what I'm doing. I'll try to post a guide here once I've figured some of
it out.

*Much time later...*

Okay, well it definitely wasn't that simple. I managed to get an ARM64 Linux
version of the toolchain, but I'm still working on the specific kernel. There
are apparently different flags to compile the actual kernel with `-march=
{insert long complicated string}` and there's a whole `.config` file that
needs to be configured. I got a little bit of it saved, but it's definitely
not figured out for today. I'm learning a fair bit about what RISCV entails.

It has two modes: unprivileged and privileged, which determine whether it has
memory protection and other neat features. 

Also, I didn't end up finishing the DNS Resolver but I wrote a few more tests.
Sadly no pairing, but I think I'm set to do that tomorrow with some other
Recursers.

I think I'm really putting off studying Leetcode and working through Sedra &
Smith 8th edition. Something about those having tangible deadlines and needs
makes me more anxious about doing them, even though I realize they're
probably the most important things for me, at least career and academics
wise.

If you want to check out the RISCV emulator that I'm trying to compile the
RISCV kernel for, take a look here <https://github.com/JZJisawesome/irve>.
It's honestly pretty neat. I hope I manage to see it actually boot Linux,
because that would be really fun to see it culminate in something neat. 

I'm also looking forward to contributing to the descendent project, since Rust
is more my language than C++. Unfortunately, I can't find myself wanting to
actively work on anything using C++, so that will have to wait for the day
I'll lose my mind. 

I didn't actually touch the compiler project today. I wanted to mess about
with the Tries that I think are useful for doing a DFA for the scanner, but
I didn't end up writing all too much. I'm hoping tomorrow there's more 
finishing of code than there was today. Or, at least, a bit more progress.
As it stands, I'm not really moving all too quickly.