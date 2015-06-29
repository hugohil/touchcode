# Touchcode

Touchcode lets you easily perform custom actions after a sequence of clic / touch is executed.

## Usage

Load the script:

`<script type="text/javascript" src="path/to/touchcode.js"></script>`

And add your touchcode:

```
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

<a name="Touchcode+zone"></a>
### touchcode.zone(x, y) &rarr; <code>Boolean</code>
Zone detection function. It is called on the event handler, you won't have to deal with it.

**Returns**: <code>Boolean</code> - Will return true or false, depending if the event was triggered on the correct point in your sequence at the right index.

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | clientX. |
| y | <code>Number</code> | clientY. |

## TODO
  * Define custom touch point with a custom padding.
  * Implement a timeout to reset the counter.
