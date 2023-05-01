# Branches

## Main Branches
1. **main**: The production-ready branch
* Contains the stable, tested, and deployed code
* Merges come from the 'develop' branch (and occasionally from hotfix branches, if necessary) via Pull Request

2. **develop**: The main development branch
* Contains the latest completed and tested features
* Merges come from the individually named branches (moore, foreman, brennan, billy)

## Supporting Branches
1. **Named branches**: Branches created by each SWE to house their feature branches
* Branch off from: `develop`
* Merge back into: `develop`
* If a SWE feels a certain way about their code, and would like a code review before merging code into develop from a named branch, request a code review prior to merging into develop branch

2. **Feature Branches**: Branches created to implement a new feature/component
* Branch off from: `name`
* Merge back into: `name`
* Naming convention `feature/feature-name`

## If branch is made in wrong place
* checkout to the parent branch
* git branch --delete (name of branch)

## Workflow Steps
1. Create a feature branch from your individual named branch
2. Write code 
3. Commit changes (often) to the feature branch and push to the remote repository

**Committing a branch change**
* git add .
* git commit -m "Added new feature"
* git push origin feature/feature-name
4. When the feature is complete, follow the above steps again, followed by this:

**Adding the feature branch to your named branch**
* git checkout name
* git merge feature/feature-name
* git push origin name
**(if a code review is requested, do not do these next steps until after the code review)**

**Adding your named branch to the develop branch**
* git checkout develop
* git merge name
* git push origin develop
5. If you have merged code into develop, update the Kanban board, and inform the team that they will need to pull the changes down locally before making additional changes to develop:

**Pulling from develop branch(Commit your changes before!)**
* git checkout develop
* git pull origin develop
6. If a team member has pushed code into the develop branch, and you have pulled those changes down with the above steps, in order to get those changes to your local named branch do the following:
* git checkout name
* git merge develop
7. If you create a new feature branch from here you don't need to do anything further, creating a new feature branch from your named branch will carry all the changes you just pulled into your named branch. To create a new feature branch inside your named branch, remember:
* git checkout -b feature/feature-name
8. If you want to make sure those changes are applied to one of your feature branches you will need to do that same thing with your feature branch with:
* git checkout feature/feature-name
* git merge name 
9. If code in `develop` branch is ready for production, submit a pull request for DevOps to review, and merge. DevOps will do this:
* Review the pull request
* Review the code
* Approve the pull request with comments e.g. 'Code is ready for production'
