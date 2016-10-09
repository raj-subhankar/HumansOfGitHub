# Contributing

In this guide I'll guide you thorugh the steps to fork a repository, create a branch and push your changes to the main repo.

### Step 1: Copying the repo to your computer
Firstly, press the fork button on the top-right of the project page. Next we are going to clone the repository into our computers typing the following in the Terminal:
```sh
$ git clone git@github.com:gtarraga/HumansOfGitHub.git
```
After this, we change directory to the new project folder and we set up the upstream (which is what updates the changes from the main repo to your forked one):
```sh
$ git remote add upstream git@github.com:raj-subhankar/HumansOfGitHub.git
```
### Step 2: Create a branch
We need to create a branch so when you make a pull request the owner of the project can see what the changes are. You can do that by typing:
```sh
$ git checkout master
$ git pull upstream master && git push origin master
$ git checkout -b feature/readme-contributors
```
### Step 3: Pull Request
When you want to get your changes into the original repository you send a pull request to the owner. That is done in as:
```
$ git git push -u origin feature/readme-contributors
```
When you are done with this, you go to your forked repository in https://www.github.com, where you should see a button that says Compare & pull request. You click there and should the owner accept your changes, those you made will end up in the original repository.