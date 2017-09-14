# Installation

{{Name}} theme uses [Gulp](http://gulpjs.com) to compile Sass. Gulp needs Node.

#### Step 1
Make sure you have Node and npm installed.
You can read a guide on how to install node here: https://docs.npmjs.com/getting-started/installing-node

#### Step 2
Install bower: `npm install -g bower`.
also install graphicsmagic to unretinize images  `apt-get install graphicsmagick`[for ubuntu]
also need to install scss linter that has a dependency with ruby: `gem install scss_lint`


#### Step 3
Go to the root of {{Name}} theme and run the following commands: `npm run setup`.

#### Step 4
Run the following command to compile Sass and watch for changes: `gulp`.
