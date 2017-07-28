# larceny
Command line interface to PostCSS theft plugin.

## NPX

```Bash

$ npx larceny -ca -u https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css -s .btn -t .my-button -f my-style.css


```

## NPM -g Installation

```Bash

$ npm -g install larceny

```

## Prepare a CSS file (optional if -ca is used)

You can skip this step if you use ```-c``` to create target file and ```-a``` to append then missing .my-button target selector.

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

## Usage

```

  -V, --version                     output the version number
  -u, --url [url]                   Url of remote file.
  -s, --source-selector [selector]  Source selector
  -t, --target-selector [selector]  Target selector (in local file)
  -f, --file [path]                 Add the specified type of cheese [styles.css]
  -c, --create-file                 Create css file if it does not exist
  -a, --append-target               Create target selector if missing
  -h, --help                        output usage information

```
