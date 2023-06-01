+++
title = "Day 13"
date = 2023-05-24
draft = false
+++

## This is like a transcript of my brain. Don't bother reading further.

Learned a bit about ELF binaries. They start with “magic numbers” which is basically a keyword for “numbers that represent a specific ASCII phrase”. In the case of ELF, it’s ?ELF, which is delightful.

Also, there are apparently a few components to binary formats.

According to the wikipedia page, ELF has most support (with extensions) for modern features in binaries.

One thing I think it actually pretty interesting is the extension support for “fat binaries”. Basically they’re binaries that can include both
[https://en.wikipedia.org/wiki/Comparison_of_executable_file_formats](https://en.wikipedia.org/wiki/Comparison_of_executable_file_formats)

https://jvns.ca/blog/2014/09/06/how-to-read-an-executable/

Symbols - function names
Sections - code, data
Segments - collected sections

I used Hexfiend on MacOS to view a binary I compiled on Multipass running underneath, but you can use xxd or really any other tool you’d like to use.

One thing I’m not sure about is the difference in x86_64 and AArch64 Linux binaries. I also don’t think I know much about what makes something specifically compatible for different distros.

Are they cross compatible —> IE something can be used on an old linux kernel, or just looking forward

Do binary sizes change all that much between different ones.

**Can I build a fat binary for linux and actually test it?**
**
**
I’ve built a fat binary for MacOS, but it seems fairly trivial.**
**

Julia Evans seems to recommend using `readelf`, which I can attest is kinda neat.

She also mentions `nm`, which seems to be a linux tool to list symbols from object files.

This leaves me to wonder what makes object files different from executable files.

Are object files something that uses ELF formatting?

Does `nm` actually work for both ELF and object files if they’re different?

Symbols are just functions found there? Or are they something a little bit more complex.

Example of the code I’m working on

```
a.out: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, BuildID[sha1]=e17f0960e53b0a20fea5234b35877027901e012a, for GNU/Linux 3.7.0, not stripped
```

LSB I think means little endian
SYSV is a system?
I think the interpreter is the part that finds the calls to specific stuff and calls it

Build ID I think is the sha1 of the source code

Stripped binary means that the debugging symbols are removed. Let’s try writing something with -g.

```
a.out: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, BuildID[sha1]=dd8adc0cf634b8da2f80796e130d5ddf9e96482d, for GNU/Linux 3.7.0, with debug_info, not stripped
```
^^ what’s up here? This has debug_info but isn’t stripped.

```
a.out: ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-aarch64.so.1, BuildID[sha1]=9d8535319d6853275bd349c91d9bee622640ee09, for GNU/Linux 3.7.0, stripped
```
Gcc -s main.c

So what’s the difference between having debug_info and no debug_info and being not stripped regardless
https://blogs.oracle.com/solaris/post/inside-elf-symbol-tables

SYSV
https://github.com/shinh/tel_ldr

I started reading
http://tom7.org/papers/epsilon.pdf

Linux networking
https://im.salty.fish/index.php/archives/linux-networking-shallow-dive.html

Svelte TS to JSDOC
https://news.ycombinator.com/item?id=35892250

https://github.com/sveltejs/svelte/pull/8569



http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html



LF graphic
https://imgur.com/a/JEObT



https://notes.andymatuschak.org/z6UZP7P4sRNgRKSvNj7tMV5uW6dDhwwbdZCy9?stackedNotes=z42J1vxsMjhkdbrqVfoqjiEesSzfaEqurBtoJ

https://andymatuschak.org/prompts/



Green threads


https://c9x.me/articles/gthreads/intro.html



Working through course on computability

https://busy-beavers.tigyog.app
Ooh, yes I should work on that!


Finished everyday data science