# binaryclock
A binary clock app for your desktop. 

![Meow](https://github.com/alairock/binaryclock/blob/master/screenshot.png?raw=true?dl=0)

```
8:   -   -   -
4:   - X - - X
2: - X - X - -
1: X X X - - -
   H H M M S S
   1 3 5 2 0 4
```

It is in 24-hour time. Columns add up to the digit. Each digit of the time is represented by the column. (The above example is 13:52:04)

## Mac only - for now. 
Pull requests are welcome for this project. It is built on electron and ReactJS, and is all too simple of a project. The app was initialized and built with [electron-forge](https://electronforge.io/). Right now `npm@5` and `npm@4` do not work with developing and building this application, so you will need to make sure to drop to `npm@3`. I also had issues with `yarn`. 

