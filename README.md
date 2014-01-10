# Cordova Starter

A command-line & node focused starter project.

## Motivation

It seems like there is a lot of scaffolding & busy-work involved with making a cordova app.  I want to generate all my splash/icon images from just a few images, generate my platforms from a single webroot codebase, and ignore generated code in git.

## Installation

*  Fork this repo and clone that
*  Install npm/node
*  Install prerequisites for your target platforms (Xcode, android-sdk, etc.)
*  Run `npm install` in project root.
*  Edit all your app's meta-data in package.json (project-name, email, git repo, etc.) Use the same format, as the template-parsing is a bit fussy.
*  Run `grunt init` in project root to initialize your cordova development environment

### Image Generation

For image-generation, you will need imagemagick. Install it, like so:

Ubuntu:

```
$ apt-get install imagemagick
```

Mac OS X (using Homebrew):

```
$ brew install imagemagick
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