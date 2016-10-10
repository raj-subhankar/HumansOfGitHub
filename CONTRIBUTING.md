# Contributing

This is a guide which will help you, while contributing to open source project. You will need to follow these steps:

### Step 1: Set up your system locally
Firstly, You need to press the fork button on the top-right of the project page to create a copy of the repository on your Github account.
Now , Type the following on the terminal for cloning the repo to create copy of the repo locally on your system.
```sh
$ git clone git@github.com:gtarraga/HumansOfGitHub.git
```
After this, Change your current directory to the new project's directory.
```sh
$ cd HumansOfGitHub/
```
 Set up the upstream (which is what updates the changes from the main repo to your forked ones):
```sh
$ git remote add upstream git@github.com:raj-subhankar/HumansOfGitHub.git
```
### Step 2: Let's do some work by "Creating a branch"
For creating a new branch, You need to ensure you're on the master branch. Then the git pull command will sync our local copy with the upstream project and the git push syncs it to our forked GitHub project. Follow these commands on the terminal: 
```sh
$ git checkout master
$ git pull upstream master && git push origin master
$ git checkout -b feature/readme-contributors
```
### Step 3: Creating Pull Request
For creating a pull request, Push your branch to the origin remote, which can be done as:
```sh
$ git push -u origin feature/readme-contributors
```
This will create the branch on your GitHub project. The -u flag links this branch with the remote one, so that in the future, you can simply type git push origin.

Swap back to the browser and navigate to your fork of the project and you'll see that your new branch is listed at the top with a handy "Compare & pull request" button. Press the button!



