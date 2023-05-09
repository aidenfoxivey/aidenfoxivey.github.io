+++
title = "GPT4 and the End of Programming"
date = 2023-03-14
draft = false
+++

# Are developers really going to be replaced by LLMs?

Today GPT4 has been released. It's looking pretty damn cool. It could apply to
some of the top universities in the USA and probably have decent odds of getting
in. Its performance with the bar is impressive and that's probably not something
that's going to regress.

Naturally, people are back to the classic trend of freaking out when new things
appear. They're kept at bay by the "safety measures"[^1] put in place by the
engineers working at OpenAI. I think this is probably for good reason. LLMs
could make broad swaths of people less employable by outcompeting them. It takes
less time to review something than it does to create something in the first
place. Let's be honest too: a lot of what we say isn't original. LLMs have a
specific pattern of speaking, but that pattern of speaking is a weird subset of
how humans speak.  There's not that much that just sounds completely strange.

The average human communicates with a lot of diction that is just copy-pasted
from another conversation. There's nothing incredibly wrong about this. It's
just more efficient to take small snippets and put them together. I think people
with autism might even have more of an idea about this, given the usage of
scripting. It's not uncommon to memorize small phrases in order to appear
cordial or simply get your message across.

The concept of replacing programmers starts with the idea that progamming is
something replaceable. This I believe to be somewhat true. There's a lot of
cruft that could just automatically be generated. Now, people who are eager to
replace all their programmers should be rather cautious. Just because you can
buy something that "does it all" doesn't mean you won't end up spending
ludicrous amounts trying to get it fixed. Part of software development is more
for the legal aspect of having a contracting company with responsibility than it
is actually delivering something. If you have no customer service because you
have no devs who actually worked on the project, then you'll soon be cursing the
fact that you just generated all your code instead of paying someone to write
it.

Not to mention, I think this actually ends up opening more options as time goes
on. We started from the perspective of having to write individual machine
instructions and eventually worked to the point of being able to tell someone
that `print("Hello, World!")` is all you really need to make your computer do
cool things. We already have compilers which will take high level code and
translate it to native instructions. This is, to some degree, a blackbox process
to begin with. Literally blackbox? No. But practically? Yes, of course. LLMs
have a long way to go in ensuring they actually do have some aspect of
deterministic output. Or at least more predictable output, but I don't see them
as being much more than another implement used in software development. We
already do a tonne of metaprogramming. Introducing LLMs is like metaprogramming
with a very inconsistent tool. Not to mention, this is something that will
likely develop uses. Maybe small chunks of software can be developed and then
integrated. If a software engineer doesn't have to worry about small pieces of
an API[^2] and can focus at high level orchestration, then maybe that's a
decision that has some merit.

I don't see us actually getting rid of programmers any time soon, but the idea
that programmers are "irreplaceable" if they keep doing *exactly* what they're
doing now is a little silly. There aren't that many software engineers writing
bytecode manually these days. :)


[^1]: I have no idea what safety measures actually entails with these models. I
would assume it's something *more* sophisticated than just matching for
concepts, phrases, or words that lead to unfortunate conclusions, but I have no
way (that I know of) to figure out what happens whenever I call the API.

[^2]: Or better yet, can delegate an LLM that is trained on code effective for that purpose, then it can 
effectively shield a high level implementer from having to worry about little things.

