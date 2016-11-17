# Touchcode

Touchcode lets you easily perform custom actions after a sequence of clic / touch is executed.

## Usage

Load the script:

```html
<script type="text/javascript" src="path/to/touchcode.js"></script>
```

And add your touchcode:

```js
// Create a new Touchode instance ...
var tc = new Touchcode();

// ... and initialize it with your sequence, padding and you callback
tc.init([{x: 100, y: 100}, {x: 300, y: 400}, ...], 50, function(){
  console.log('Touchcode: You did it !');
});
```

## Documentation

<a name="Touchcode+init"></a>
### touchcode.init(sequence, padding, callback)
Initilization of the Touchcode.

| Param | Type | Description |
| --- | --- | --- |
| sequence | <code>Array</code> | Sequence to execute. |
| padding  | <code>Number</code>| The padding for the bouding box of your points. |
| callback | <code>function</code> | The callback function to be executed when the sequence is over. |

## TODO
  * Implement a timeout to reset the counter.
  * Define built-ins zone (e.g "top-left", "center", "bottom", "bottom-right", etc...)
