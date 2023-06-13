+++
title = "Wait, how does memory work again?"
date = 2023-05-08
draft = true
+++

# Dr. Nullptr

### Or, how I learned to stop worrying and love dynamic memory allocation.

So, you're an ECE150 student at the University of Waterloo. Maybe you have a bit of experience programming, maybe not. Regardless, prepare yourself for some bad programming habits. Unfortunately, the course seems somewhat rife with opportunity to confuse yourself and end up with some pretty bad coding mistakes. Worse, even if you manage to do decently in the course, you may still completely misunderstand how it works.

This leads to cargo cult programming, where we worship the idea of setting a pointer in C++ to `nullptr` after `delete`ing it, without really ever knowing why.

The need for this struck me after I found myself trying to clear up what `delete` in C++ actually does and what memory "safety" actually means.

You'll certainly hear about "memory leaks" or "segfaults" in programming courses, but what do they actually refer to? And, more importantly, why are they actually a problem?

Before we start, we need to get a few things down. First we need to understand what the heap and the stack are, what "scopes" are in programming, and then what

#### Definition

##### The heap versus the stack.

Well, here you go again. Sorry to bother you with another explanation of something that's quite confusing.

Basically, the stack is a place to temporarily store things. Whenever you declare a normal variable, you use the stack. The stack exists for each different "scope" that you go to.

Woah there, a scope? What's a scope?

Here's a quick C example that I'll annotate. Notice that it could be compiled (turned into computer code) into C++. This is because C++ is **mostly** C plus other things.

```c
#include <stdio.h>

void g(void) {
	int a = 6;
}

int main(void) {
	int a = 4;
  int b = 3;
	g();
	printf("%d", a);  // this will print 4
	return 0;
}
```

Okay! Let's go through this example.

First we declare that we're including `stdio.h`. All you need to know is that that's the code where `printf()` is held. We can only print if we include this file. You might ask: why would I need to include something in order to use a print function?  Especially if you've started with Python, where `print()` is a piece of the base language. Basically, it's because C is a simple language. This means it often runs much faster, because it doesn't need to be prepared to do as much as something like Python does.

Next you'll notice the `void` keyword. It means that the function `g` doesn't take anything and doesn't return anything either. Sometimes you'll see people just write `void g()`, but technically this isn't good practice in C, because it interprets it as "you can give me as many arguments as you want!". Try it yourself!

From there, we declare an integer variable `a` and set it equal to four, declare an integer b equal to 3, call the `g()` function, and then print `a` out.

When we call `g()`, we go into the scope of the function `g()`. The one rule about this is that we can access anything in a "higher" scope than the current one. We don't in my example, but we could totally write `printf("%d", b);` and have it print out 3. This is because we have all the declared variables from earlier here. This is a really important concept (and one that will motivate this post later). We can access anything before it, but writing things inside it have **no** effect when we exit the function call. As soon as we reach the end of `g()`, we go back to `main()` and lose everything we have inside this function.

Okay, wait, we lose it all? I thought we could use functions to do things for us and then hand it back?

Yes, yes you can. But not for everything! Only specific things. Some things can be copied trivially. For example, an integer can be `return`ed at the end of a function, but something like an array cannot (in C and C++). This is because an array is a block of memory; not just one individual piece.

Now that we have lexical scopes down, let's talk about the heap.

The heap is the place where we can place things that we want to live until we tell them not to. Basically,

Unfortunately, ECE150 (and from what I know, other courses) don't often put much emphasis on what memory usage and safety in C++ actually consists of. I'll start with describing (for a novice, not someone more experienced) how memory works in C, which is a more simple language than C++. If you hear people complain about C++, it's often because it has a **lot** of features. Some of these features are good, some of these features are confusing, but most of the features have difficulties with compatibility between them.

In C, we use a function called `malloc` to access memory on the heap.

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int* array = (int*)malloc(5*sizeof(int));
	array[0] = 0;
  array[1] = 1;
  array[2] = 2;
  array[3] = 342;
  array[4] = 23;
  
  for (int i = 0; i < 5; i++) {
    printf("%d", array[i]);
  }
  
  array[5] = 43; // this is a memory error!
  
	return 0;
}
```

Inside of `malloc`, we pass 5 times the "sizeof" an integer in C. This allows us to specify how much we want to store in the memory. `malloc` will actually take just the number of bytes you want to store and then give you a pointer to that block of memory.

The `(int *)` tells `malloc` that we want it to refer to a pointer to an int.

###### A quick word about `printf`:

What's that weird `%d` I see in there? What does that mean?

Glad you asked! It's a "character code", which tells printf how you want to display the data. Keep in mind that things like the characters that a computer uses to print out "Hello, World!" are actually just numbers themselves. (They're called ASCII if you use a simple latin character set.) This means that sometimes we want to see what number the character corresponds to and therefore need to tell the function whether we want to see it as a character or as a number. In this case, we're asking for `%d`, which means "show me this data as an integer number". Another example would be `%f`, which means "show me this data as a floating point number (a number with decimal point like 5.4)".

##### What does `new` do?

Normally, for statically allocated things

Well, when do I need dynamically allocated things? Great question!

Dynamically allocated memory is useful when passing different

##### What does `delete` actually do?

##### A quick word on `null` and `nullptr`.

##### What is an array?

Arrays are everywhere! From keeping track of data from a user to
