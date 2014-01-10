# Cordova Starter

A command-line & node focused starter project.

## Motivation

It seems like there is a lot of scaffolding & busy-work involved with making a cordova app.  I want to generate all my splash/icon images from just a few  images, generate my platforms from a single webroot codebase, and ignore generated code in git.

## Installation

*  Fork this repo and clone that
*  Install npm/node
*  Install cordova command-line tools
*  Install prerequisites for your target platforms (Xcode, android-sdk, etc.)
*  Run `npm install` in project root.
*  Change name/app ID (see below)
*  Run `grunt init` in project root to initialize your cordova development environment

For image-generation, you will need imagemagick. Install it, like so:

Ubuntu:

```
$ apt-get install imagemagick
```

Mac OS X (using Homebrew):

```
$ brew install imagemagick
```


## Change name

Everything is named "cordova-starter". To change it to YOURPROJECT, do this:

Linux:

```
for i in `find . -type f`;do sed -i s/cordova-starter/YOURPROJECT/g $i;done
```

Mac:

```
for i in `find . -type f`;do sed -i '' s/cordova-starter/YOURPROJECT/g $i;done
```

You might also want to set the app ID (after above command):

Linux:

```
for i in `find . -type f`;do sed -i s/io.cordova.YOURPROJECT/com.YOURCOMPANY.YOURPROJECT/g $i;done
```

Mac:

```
for i in `find . -type f`;do sed -i '' s/io.cordova.YOURPROJECT/com.YOURCOMPANY.YOURPROJECT/g $i;done
```

## Building

Run `grunt` to watch for changes, and update your target platform directories.

### Available tasks

         watch  (default) Watch for changes, run update.
          init  Initialize the development environment.
        update  Update platforms.
         build  Build Platforms.
         serve  Serve webroot via cordova.
         clean  Clean files and folders.

You can get this list with `grunt --help`.