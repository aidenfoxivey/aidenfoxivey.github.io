+++
title = "AutoResume & Using SourceHut Builds"
date = 2023-15
draft = false
+++

I have a resume written using LaTeX. It's honestly quite a pain. There's a part of me that refuses to use easy solutions but also finds complex solutions to be too painful to use. I don't like the lack of obvious / fine-grained customization afforded to me in applications like LibreOffice, but then setting up something like a LaTeX template is too much effort.

This stupid conflict lead me down the path of finding someone's template. I had no idea what most of the template was there for. There are some obvious parts to LaTeX, like understanding what `\include{geometry}` might refer to, but a lot of it comes across as convoluted and produces mysterious error messages that are devoid of much context.

Admittedly, I can't claim to really grokking LaTeX in any respect - so, if you are so inclined, treat my thoughts with some skepticism here. My previous solution was to use Overleaf, but with my web blog based on `zola` being built using Sourcehut's build service, I had the both amazing and awful idea to try to automate it.

After all, (CLICHÉ PHRASE INBOUND!) why do something manually in 5 minutes when you could spend the better part of an afternoon struggling at it. I decided to add a small bit to my original build manifest on Sourcehut that would clone the resume repository and then install the texlive distribution onto the Alpine VMs that Sourcehut uses for builds.

I've included the manifest below. There could be some issues, but it's working fine for me so far.

```yaml
image: alpine/edge
packages:
  - hut
  - zola
  - texlive-full
  - texlive-xetex
oauth: pages.sr.ht/PAGES:RW
environment:
  site: aidenfoxivey.com
sources:
  - https://git.sr.ht/~aidenfoxivey/home
  - https://git.sr.ht/~aidenfoxivey/resume
tasks:
  - build: |
      cd home
      zola build
  - resume: |
      cd resume
      xelatex -interaction=nonstopmode cv.tex
      mv cv.pdf ../home/public/resume.pdf
  - package: |
      cd home
      tar -C public -cvz . > ../site.tar.gz
  - upload: |
      hut pages publish -d $site site.tar.gz

```

The `interaction=nonstopmode` prevents the `xelatex` command from halting at any warnings, but I'm not sure if this is entirely necessary considering that I believe the build will fail on any warnings.

Essentially, the image specifies the operating system to be used. You can also specify the architecture if some of your software is only built for ARM64, MIPS, etc. For each task listed, the VM moves back to the home directory and then runs the commands executed.

The sources are just git repos to be cloned for the build process.

I don't know internally how this is parsed, but it methodology wise is similar to Dockerfiles.

The result of this is that every time I finish a copy of my website and push it, Sourcehut will automatically generate the latest version of my resume and publish it to the website.

The next issue is to figure out why in the world the PDF doesn't load on Safari.

Keep on rocking in the free world.