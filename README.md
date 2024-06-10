--------------------------------------------Write the answers to questions 1 and 2----------------------------------------

**_1_**: To handle the submission of a hotfix in the "Alex's Kitchen" project using Git, the following steps can be followed.
First of all, Naming the Hotfix Branch. Hotfix Branch are named "hotfix/<issue-number>-<short-description>". Example: "hotfix/016-fix-card-adding-issue".
Then Creating the Hotfix Branch. Assuming. I am on the master production branch, then execute the following commands: "git checkout master" "git pull origin master" "git checkout -b hotfix/016-fix-card-adding-issue".
After creating the hotfix branch, proceed with Implementing the Hotfix. First things make changes in the codebase to address the hotfix. After making the changes, commit them to hotfix branch using these commands: "git add .", git commit -m "Fix card adding issue by correcting sessions management".
Next, Pushing the Hotfix Branch to the Remote Repository using the following command: "git push origin hotfix/016-fix-card-adding-issue".
Then create a pull request. First go to the repository page on GitHub. Click on the create a new pull request button. Then select the base branch 'master'. Select the compare branch. Then fill out the Pull Request from with the title "Hotfix card adding issue" and provide a detailed description of the issues. After that request reviewers and submit the pull request by clicking the create pull request button.
Once the pull request has been reviewed and approved then proceed with Merging the Hotfix into Production. If you have merge permissions, I can merge the pull request. Otherwise, request a team member with the appropriate permissions to merge it. Typically, I will use the 'Squash and merge' or 'Rebase and merge' option to keep the commit history clean. After merging, delete the hotfix branch from the remote repository using the command: "git push origin –delete hotfix/016-fix-card-adding-issue".
Finally, ensure the local production branch is up to date by pulling the lates changes: "git checkout master” “git pull origin master".

**_2_**: Conceptual Approach to Identifying Menu Items by Category. This approach can be broken down into four steps for easy comprehension:
Step 1: Understanding the Data Structure provided data structure consists of an array of menu collections. Each menu collection object contains:
type: A string representing the type of menu "Vegetarian", "Non-Vegetarian".
menuItems: An array of objects, where each object represents a menu item with unique id, and other properties like name.
categories: An array of objects, where each object represents a category with a property name and a list of menuItemsIds. An array of integers representing the IDs of menu items that belong to this category.
Step 2: To find out which items belong to each category, we need to iterate through each menu collection in the array. For each menu collection: "Extract the menuItems array." "Extract the categories array."
Step 3: For each category within a menu collection and matching menu items to categories:
"Initialize an empty array to hold the menu items that belong to this category."
"Iterate through the menuItemsIds array of the category."
"For each menuItemsId, search the menuItems array to find the corresponding menu item."
"Add the found menu item to the initialized array for this category."
Step 4: Store the result in a new structure that maps category names to their corresponding menu items. This can be done by creating a dictionary or an object where the keys are category names and the values are arrays of menu items.

Here, this is the result:
{
"Vegetarian": {
"Starters": [
{ "id": 1, "name": "Salad" },
{ "id": 2, "name": "Veg Burger" }
]
},
"Non-Vegetarian": {
"Main Course": [
{ "id": 4, "name": "Chicken Wings" },
{ "id": 5, "name": "Beef Burger" }
]
}
}

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
