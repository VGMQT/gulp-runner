# Gulp tasker v.1.1.0
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
2. If we do not want to minify our custom ```js``` — we should disable **js:app-minify** and enable **js:app**

Current (1.1.0) version contains following tasks:
* **clean**

  Deletes ```build``` folder

* **images:sprite**

  Creates a sprite from ```.png``` files placed in ```images/sprites/png``` folder

* **svg:sprite**

  Creates a sprite from ```.svg``` files placed in ```images/sprites/svg``` folder

* **images:minify**
  
    Minifies all images (and sprites) from ```images``` folder. Triggered only once per gulp run (can be runned manually)

* **html**

  Copies ```html``` files from ```dev``` folder to ```build```

* **pug**

  Compiles ```pug``` files from ```pug/pages``` folder to ```build```
  
  ```locals: JSON.parse($.fs.readFileSync('content.json', 'utf8'))``` can be enabled for using ```content.json``` for ```locals```

* **css:vendor**

  Merges and minimizes all vendor ```css``` files, which pathes are declared in ```gulp/configs/config.js```, and moves resulting ```vendor.min.css``` file to ```build/css```

* **sass**

  Compiles, prefixes css properties as indicated in ```gulp/configs/config.js``` and minimizes ```main.scss``` file from ```styles``` folder to ```build```

* **js:vendor**

  Merges and minimizes all vendor ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moves resulting ```vendor.min.js``` file to ```build/js```

* **js:app**

  Merges all custom ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moves resulting ```app.js``` file to ```build/js```

* **js:app-minify**

  Merges and minimizes all custom ```js``` files, which pathes are declared in ```gulp/configs/config.js```, and moves resulting ```app.min.js``` file to ```build/js```

* **fonts**

  Copies all files from ```dev/fonts``` folder to ```build/fonts```

* **images**

  Copies all files from ```dev/images``` folder to ```build/images```

* **watch**

  Watches for files and executes needed task on change

* **serve**

  Launches and configures browserSync
  
#### Dependencies
You **should** ```yarn upgrade --latest``` / ```npm update && npm audit fix -f``` as *Gulp tasker* will always work with the latest versions of dependencies, so it is **strongly recommended**.

```
"devDependencies": {
    "browser-sync": "^2.26.3",
    "del": "~3.0.0",
    "fs": "^0.0.1-security",
    "gulp": "^4.0.0",
    "gulp-autoprefixer": "~6.0.0",
    "gulp-cheerio": "~0.6.2",
    "gulp-concat": "~2.6.1",
    "gulp-concat-css": "~3.1.0",
    "gulp-csso": "^3.0.1",
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
    "merge-stream": "^1.0.1"
  },
"dependencies": {
    "jquery": "~3.3.1",
    "normalize.css": "~8.0.1"
}
```

#### License
Copyright © 2018, based on Loftschool 2017 Web Advanced course build.

Licensed under the MIT license.