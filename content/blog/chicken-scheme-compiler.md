+++
title = "Chicken Scheme Compiler"
date = 2023-05-08
draft = true
+++

# Chicken Scheme Compiler

Disclaimer: I'm extremely new to compilers and the construction of them. I may
make many errors. I will note errata at the bottom of this page. Please don't
rely on this as actual advice - this is made by someone who's never taken a
course on compilers in their life before. You can reach me at `abfoxive at
uwaterloo dot ca` with any mistakes you find. Thank you for your
understanding!

I've been really busy working on exams so far, which has led me to not spent
as much time as I would like to on this compiler project I'm working on.

I decided the best step in building a compiler would be looking at an existing 
one and seeing how it works. I've been mostly contemplating implementing
a compiler for Scheme, seeing as though it's a simple but ultimately interesting language.

CHICKEN Scheme is a compiler and interpreter bundle that's available for many
different platforms. You can find it at <https://call-cc.org/>.

Now, the CHICKEN Scheme Compiler generates C which it then compiles to
assembly. Technically, it's a transpiler, since it moves from one HLL
(high level language) to another without actually touching the assembly
generating part of a compiler.

The compiler component (which moves from HLL to machine language) is just whatever the 
default C compiler for the plaform that CSC is run on.

## The way a compiler normally works.

A compiler, according to the definition found in *Crafting a Compiler* by
Fischer et al. is a program that transforms a human oriented language to a
computer-executable language. 

A compiler operates in stages:
1. The scanner
2. The parser
3. Symbol table creation
4. Semantic analysis
5. Code generation

I'll describe all of these steps below. 

### Scanner

Originally, the code is found in text files as just characters. Every tab is
just a `'\t'` character, every newline (on Linux and modern MacOS) a `'\n'`,
and every space a `' '` character. If you look up their equivalents on
[ASCII table](https://www.asciitable.com), you'll see that `'t'` is
represented by the number 9, `'\n'` is represented by 10, and `' '` is 32. We
call this an "encoding". Now, we often use UTF-8 as our encoding for file
formats - due to its ability to represent a lot of different characters
(even those outside English), but most programming languages don't use
extended characters.

Think about it, what's the last time you saw an *accent aigu* in your code?
You may even think: jeez, there are even more characters on the ASCII table
than I've seen in most computer writings! The reason is because everything
inside ASCII is also inside UTF-8. We have the ability to render some special
things with UTF-8, but we choose often to just use ASCII. This means that
every character in the ASCII system can be represented within a byte. 

So wait, my code is just numbers? Yes, yes exactly. Everything you use on a
computer is just numbers. When you move from human code to computer code, you
are still using numbers! Except, the computer works with more fine-grained
code that you can't read as text. 

I promise I'll get to what a scanner actually is in a second, but first I need
to linger a little bit longer on the idea of code being just a bunch of
numbers in a computer.

Try using a text editor to open up a compiled file. If you're on Linux or
MacOS, mabye an `a.out` that you've compiled before. Just open the `a.out`
and look at it. Gibberish right? That's because your text editor is reading
each byte in the file as if it were text! But it's not. It's compiled
computer code. If you instead use the command `objdump -D a.out`, you can see
the disassembled code in a human readable form.

A scanner basically just reads every character in and then translates them into 
tokens, which are the basic units of every programming language. Let's use an 
example from C.

```
for (int i = 0; i < 5; i++) {}
```

In this snippet (which does nothing), `for` is a token. When we read it as a file,
it's three different characters: `f`,  `o`, and `r`, but we want to turn it into a
special object inside our code that recognizes it as a whole construct. This is
because, in C at least, you can't use `for` to do anything other than be a for loop.
It's a keyword in the C language. 

So in essence, that's what we're trying to do - trying to convert a series of characters
into the objects they represent inside a programming language.

### Parser

Now that we have a series of tokens, we need to check them to make sure they are actually can be turned into valid code in the grammar of the language. Here's an example of invalid code with correct tokens:

```c
for {} while ; int
```

While all of these tokens are valid in C, they aren't actually a valid expression in C, notice that the `for` statement has no arguments for example. The parser's job is making sure that the collection of tokens is actually something that the language can express. This is important, because the parser generates something called an AST or abstract syntax tree. 

An abstract syntax tree is sort of like PEMDAS (parentheses, exponents, mulitplication, divison, addition, subtract) but for code. 

### Symbol table creation
### Semantic analysis

*Crafting a Compiler* puts this the best way I understand
### Code generation


## What's a transpiler then?

Here's the original Scheme code:

```lisp
(+ 1 1)
```

And the C code that's generated from it.

I've annotated it with comments but the condensed thoughts will also be found below.

The code includes the C header `chicken.h`. This contains all the concepts that C uses to map Scheme operation to C. 

The actual sourcecode of the file is here <http://code.call-cc.org/cgi-bin/gitweb.cgi?p=chicken-core.git;a=blob;f=chicken.h;h=f5a103ee14314f7c679e01dd8e11c0404043791a;hb=HEAD> and the guide to using it is here <https://wiki.call-cc.org/notes-on-chicken.h#notes-on-chickenhfile>.

```c
/* Generated from define.scm by the CHICKEN compiler
   http://www.call-cc.org
   Version 5.3.0 (rev e31bbee5)
   macosx-unix-clang-arm64 [ 64bit dload ptables ]
   command line: define.scm -output-file define.c
   uses: eval library
*/
// ^ This is not my comment. It's just autogenerated by CSC.

#include "chicken.h"

static C_PTABLE_ENTRY *create_ptable(void);
C_noret_decl(C_eval_toplevel) 
C_externimport void C_ccall C_eval_toplevel(C_word c,C_word *av) C_noret;
C_noret_decl(C_library_toplevel)
C_externimport void C_ccall C_library_toplevel(C_word c,C_word *av) C_noret;

static C_TLS C_word lf[2];
static double C_possibly_force_alignment;

// (toplevel) with zero padding 
static C_char C_TLS li0[] C_aligned={C_lihdr(0,0,10),40,116,111,112,108,101,118,101,108,41,0,0,0,0,0,0};


C_noret_decl(f_118)
static void C_ccall f_118(C_word c,C_word *av) C_noret;
C_noret_decl(f_121)
static void C_ccall f_121(C_word c,C_word *av) C_noret;
C_noret_decl(f_128)
static void C_ccall f_128(C_word c,C_word *av) C_noret;
C_noret_decl(C_toplevel)
C_externexport void C_ccall C_toplevel(C_word c,C_word *av) C_noret;

/* k116 */
static void C_ccall f_118(C_word c,C_word *av){
C_word tmp;
C_word t0=av[0];
C_word t1=av[1];
C_word t2;
C_word t3;
C_word *a;
C_check_for_interrupt;
if(C_unlikely(!C_demand(C_calculate_demand(3,c,2)))){
C_save_and_reclaim((void *)f_118,c,av);}
a=C_alloc(3);
t2=(*a=C_CLOSURE_TYPE|2,a[1]=(C_word)f_121,a[2]=((C_word*)t0)[2],tmp=(C_word)a,a+=3,tmp);{
C_word *av2=av;
av2[0]=C_SCHEME_UNDEFINED;
av2[1]=t2;
C_eval_toplevel(2,av2);}}

/* k119 in k116 */
static void C_ccall f_121(C_word c,C_word *av){
C_word tmp;
C_word t0=av[0];
C_word t1=av[1];
C_word t2;
C_word t3;
C_word t4;
C_word *a;
C_check_for_interrupt;
if(C_unlikely(!C_demand(C_calculate_demand(3,c,2)))){
C_save_and_reclaim((void *)f_121,c,av);}
a=C_alloc(3);
t2=C_set_block_item(lf[0] /* a */,0,C_fix(4));
t3=(*a=C_CLOSURE_TYPE|2,a[1]=(C_word)f_128,a[2]=((C_word*)t0)[2],tmp=(C_word)a,a+=3,tmp);
C_trace(C_text("chicken.base#implicit-exit-handler"));
{C_proc tp=(C_proc)C_fast_retrieve_symbol_proc(lf[1]);
C_word *av2=av;
av2[0]=*((C_word*)lf[1]+1);
av2[1]=t3;
tp(2,av2);}}

/* k126 in k119 in k116 */
static void C_ccall f_128(C_word c,C_word *av){
C_word tmp;
C_word t0=av[0];
C_word t1=av[1];
C_word t2;
C_word *a;
C_check_for_interrupt;
if(C_unlikely(!C_demand(C_calculate_demand(0,c,1)))){
C_save_and_reclaim((void *)f_128,c,av);}
t2=t1;{
C_word *av2=av;
av2[0]=t2;
av2[1]=((C_word*)t0)[2];
((C_proc)C_fast_retrieve_proc(t2))(2,av2);}}

/* toplevel */
static C_TLS int toplevel_initialized=0;
C_main_entry_point

void C_ccall C_toplevel(C_word c,C_word *av){
C_word tmp;
C_word t0=av[0];
C_word t1=av[1];
C_word t2;
C_word t3;
C_word *a;
if(toplevel_initialized) {C_kontinue(t1,C_SCHEME_UNDEFINED);}
else C_toplevel_entry(C_text("toplevel"));
C_check_nursery_minimum(C_calculate_demand(3,c,2));
if(C_unlikely(!C_demand(C_calculate_demand(3,c,2)))){
C_save_and_reclaim((void*)C_toplevel,c,av);}
toplevel_initialized=1;
if(C_unlikely(!C_demand_2(14))){
C_save(t1);
C_rereclaim2(14*sizeof(C_word),1);
t1=C_restore;}
a=C_alloc(3);
C_initialize_lf(lf,2);
lf[0]=C_h_intern(&lf[0],1, C_text("a"));
lf[1]=C_h_intern(&lf[1],34, C_text("chicken.base#implicit-exit-handler"));
C_register_lf2(lf,2,create_ptable());{}
t2=(*a=C_CLOSURE_TYPE|2,a[1]=(C_word)f_118,a[2]=t1,tmp=(C_word)a,a+=3,tmp);{
C_word *av2=av;
av2[0]=C_SCHEME_UNDEFINED;
av2[1]=t2;
C_library_toplevel(2,av2);}}

#ifdef C_ENABLE_PTABLES
static C_PTABLE_ENTRY ptable[5] = {
{C_text("f_118:define_2escm"),(void*)f_118},
{C_text("f_121:define_2escm"),(void*)f_121},
{C_text("f_128:define_2escm"),(void*)f_128},
{C_text("toplevel:define_2escm"),(void*)C_toplevel},
{NULL,NULL}};
#endif

static C_PTABLE_ENTRY *create_ptable(void){
#ifdef C_ENABLE_PTABLES
return ptable;
#else
return NULL;
#endif
}

/*
(o e)|assignments to immediate values: 1 
o|safe globals: (a) 
o|replaced variables: 1 
o|removed binding forms: 3 
o|removed binding forms: 1 
*/
/* end of file */

```
