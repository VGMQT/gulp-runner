# Gulp tasker
> "gulp": "^4.0.0"

#### How to launch:

1. ```git clone``` or download, if you want to use it for your own project
2. ```npm i```
3. ```npm i gulp-cli -g```
4. ```gulp```
5. Navigate to your localhost address
(default is http://localhost:3000/)

#### What is this?
Gulp tasker is an easy editable gulp build with a flexible and convenient choice of tasks to run.
It means, for any project you about to start, you can choose only those tasks that you need for it,
changing anything you want inside.

Some tasks are doing the same job, but with different conditions. Such duplicate tasks are disabled (commented) in ```gulpfile.js```.
For example:
1. If we are using ```pug``` instead of ```html``` — we should disable **html** task
2. If we do not want to minify our custom ```js``` — we should disable **js:app-minify** and enable **js:app-lint**

Current (1.0.0) version contains following tasks:
* **clean**

  Deleting ```build``` folder

* **images:sprite**

  Creating a sprite from ```.png``` files placed in ```images/sprites``` folder

* **svg:sprite**

  Creating a sprite from ```.svg``` files placed in ```images/sprites``` folder

* **html**

  Copying ```html``` files from ```dev``` folder to ```build```

* **pug**

  Compiling ```pug``` files from ```pug/pages``` folder to ```build```

* **css:vendor**

  Merging and minimizing all vendor ```css``` files, which pathes are declared in ```gulp/configs/config.js```, and moving resulting ```vendor.min.css``` file to ```build/css```

* **sass**

  Compiling, prefixing css properties as indicated in ```gulp/configs/config.js``` and minimizing ```main.scss``` file from ```styles``` folder to ```build```

* **js:vendor**

  Merging and minimizing all vendor ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moving resulting ```vendor.min.js``` file to ```build/js```

* **js:app-lint**

  Merging and linting all custom ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moving resulting ```app.js``` file to ```build/js```
  
  You can change ```.eslintrc``` as you want or add your own. For more information visit [Configuring ESLint](https://eslint.org/docs/user-guide/configuring "ESLint")

* **js:app-minify**

  Merging and minimizing all custom ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moving resulting ```app.min.js``` file to ```build/js```

* **fonts**

  Copying all files from ```dev/fonts``` folder to ```build/fonts```

* **images**

  Copying all files and minimizing images from ```dev/images``` folder to ```build/images```

* **watch**

  Watching for files and executing needed task on change

* **serve**

  Launching and configuring browserSync
  
#### Dependencies
You **should** ```npm update``` and ```npm audit fix -f``` as *Gulp tasker* will always work with latest versions of dependencies, so it is **strongly recommended**.

```
"devDependencies": {
  "browser-sync": "^2.26.3",
  "del": "~3.0.0",
  "gulp": "^4.0.0",
  "gulp-autoprefixer": "~6.0.0",
  "gulp-cheerio": "~0.6.2",
  "gulp-concat": "~2.6.1",
  "gulp-concat-css": "~3.1.0",
  "gulp-csso": "^3.0.1",
  "gulp-eslint": "~5.0.0",
  "gulp-imagemin": "^5.0.3",
  "gulp-load-plugins": "~1.5.0",
  "gulp-minify": "^3.1.0",
  "gulp-notify": "~3.2.0",
  "gulp-pug": "~4.0.1",
  "gulp-rename": "^1.4.0",
  "gulp-replace": "~1.0.0",
  "gulp-sass": "~4.0.2",
  "gulp-sourcemaps": "~2.6.0",
  "gulp-svg-sprite": "~1.5.0",
  "gulp-svgmin": "~2.1.0",
  "gulp.spritesmith": "^6.9.0",
  "merge-stream": "^1.0.1",
  "vinyl-buffer": "^1.0.1"  
},
"dependencies": {
  "jquery": "~3.3.1",
  "normalize.css": "~8.0.1"
}
```

#### License
Copyright © 2018, based on Loftschool 2017 Web Advanced course build.

Licensed under the MIT license.
