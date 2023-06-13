+++
title = "Day 4"
date = 2023-05-11
draft = false
+++

Today was a relatively normal day. I worked a little bit on ECE252 notes in the morning,
completed some stuff for PD22, and then trained the dog.

No work done on mahampreter unfortunately.

I got to play sysadmin setting up the server that we're using for development at Cosine Networks.

Alongside that I attended an "innovation mixer" (free pizza event) held by Velocity. Admittedly,
too many people for my liking, but good to see happy people.

I also learned that apparently having an SSH key for every different remote server is not
necessary! Perhaps I'm wrong here (email me at me@aidenfoxivey.com if I am), but if it's true
then that dramatically simplifies my process.

Other interesting point, GPG keys actually have subkeys sometimes for encryption alongside
signing. I learned this my trying to input it into Sourcehut and having it reject my messages.

Lastly, I ended up turning off the automatic rebuild of the resume. It was taking a solid 6 minutes
to build the site, which I think it honestly too much. I could probably do it locally on my
machine, but the Sourcehut builds service is just really convenient and uses the latest versions
of everything. Now it takes roughly 6 seconds, which is much better. I'm trying to brainstorm a
way to keep that relatively low time **and** have a resume updating service.
