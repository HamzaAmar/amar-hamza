# Contributing

Thanks for being willing to contribute!

Working on your first Pull Request? You can learn how from this free series [How to Contribute to an Open Source Project on GitHub](https://opensource.guide/how-to-contribute/)

## Code Contribution Guidelines

1.  [Fork](https://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone git@github.com/<your-username>/ui_lego.git
# Navigate to the newly cloned directory
cd ui_lego
# Assign the original repo to a remote called "upstream"
git remote add upstream git@github.com:HamzaAmar/ui_lego.git
# Fetch the code and branches from remote repo "upstream"
git fetch upstream
```

2.  Create a branch: for your PR with `git switch -c feat_nameYouWantHere` please follow the naming convention for creating branch all the time prefix with feat\_

3.  Run `yarn validation` before push to check if every thing OK To Make sure that you CI not yelling at you

4.  Push To Your Current Directory And From Then Make A pull Request To Our Repository and Thanks

## Codebase Structure

1. Components
   - Core (Button , Input , Avatar)
   - Icons
   - UI ( ButtonGroup , FormInput , AvatarGroup , Pagination)
   - Section ( Register , HeroSection , Articles List)
   - Pages ( SignUp/SignUp , Home , Checkout , Product List)
2. SCSS
3. Hooks
4. Utils
