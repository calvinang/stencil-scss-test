# K12 Class Grade Component
  ** Provides a class grade component with percentage grade and letter grade. **  

## How To Use

###### To run locally
```
npm install
npm run start
```

###### To install SVN Support
``` npm install http://subversion.k12.com/svn/sis/isis/trunk/stencil-components/bin/k12-class-grade-container/k12-k12-class-grade-container-0.0.1.tgz --save ```

###### To install from local copy
``` npm install /path/to/local --save ```

###### To Use in Angular App
- Add the following in the main.ts file
  - ``` import {defineCustomElements as k12classgradecontainer} from _'@k12/k12-class-grade-container'; ```
  - ``` k12classgradecontainer(window); ```
    
  - Use the tag (Angular v2+):
    - ```<app-class-grade-container [score]="score" [gradeLabel]="gradeLabel"></app-class-grade-container>```
  - Updated depends to the reactiveness of the app

###### Pre-assigned CSS Classes
  - Please see components/k12.class.grade.container.component.css. All styles may be overridden as desired. The provided styles format the score and gradeLabel items and provide the appropriate background colors for the container.

###### Making new changes
  - Checkout the project
  - Make changes
  - ** Update the version **
  - cd to the project folder
  - run the following to create the tgz file:
    - ``` npm run build ```
    - ``` npm pack . ```
  - add tgz file in the bin directory in repository
