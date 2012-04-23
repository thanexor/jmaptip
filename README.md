# jmaptip.js -- tooltips for image maps

HEY, remember image maps?  No?  Well they're not used for much anymore, so I don't blame you.

I was tasked with creating a world map with tooltips with info about the different regions of the world.  Since there's no cross-browser compatible way to get HTML to recognize complex shapes, I was forced to use image maps, and there were no plugins out there for jQuery to do something like that, so I wrote one.  Pretty simple.  Requires jQuery.

## Usage

    $('#imagemap').maptips();

An example is included.

## Options

* animation -- supports toggle (default), slideToggle, and fadeToggle
* speed -- speed of animation
* offset -- as x, y in pixels (eg. offset: '0, -10')

## Known Issues

* IE6/7/8 the tips are a little blinky still
* No idea how this will work with shapes other than 'poly'