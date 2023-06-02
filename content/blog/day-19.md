+++
title = "Day 19"
date = 2023-06-1
draft = false
+++


Today was impossible day at RC and my goal was to get started on contributing
to PyTorch. Basically it started from a desire to understand how things work
inside the magical device that is PyTorch, but I quickly realized there’s a lot
going on internally.

Here’s my first issue that I looked at:
https://github.com/pytorch/pytorch/issues/98139

This one was a simple fix of verifying the page. I wanted to warm up, but I got
one more issue closed, so that was a nice little shot of dopamine.

https://github.com/pytorch/pytorch/issues/102493 

This was the real core of the work I did. Basically, I was stuck trying to
figure out why calling the grad method on an operation didn’t work as it was
supposed to.

To sum it up, it was basically giving incoherent results. We expected the
identity matrix but got something that was quite unreasonable.

We tried to use `torchviz`, which wraps `graphviz`, but ultimately didn’t end
up on something that was all too coherent. 

I’m tired so I’m gonna write more about this tomorrow when I hopefully solve
it.

At cosine, we tried to get a server running. Unfortunately the main server
didn’t seem to want to post. I think it might be related to power consumption,
but I’m not sure.

Also, I’m trying to get a Rust user group going, so I’m hyped for that.
