# larceny
Command line interface to PostCSS theft plugin.

## Installation

```Bash

$ npm -g install larceny

```
## Prepare a CSS file

```Bash

$ echo '.my-button {}' > style.css

```
## Perpetrate Larceny <3

```Bash

$ larceny -u https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css -s .btn -t .my-button -f style.css

```

## The perfect crime.

```Bash

$ cat style.css

.my-button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    border: 1px solid transparent;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: .25rem;
    -webkit-transition: all .2s ease-in-out;
         -o-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
}

```
