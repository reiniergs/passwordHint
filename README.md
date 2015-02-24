# passwordHint component

<a href="http://reiniergs.github.io/passwordHint">Demo</a>

#Usage

<h3>script Tag</h3>
```
<input type="password" id="pass" />
  
<script  src="path/to/passwordHint.js">
  passwordHint.init('#pass');
</script>
  
```
<h3>requireJS</h3> 
```
<input type="password" id="pass" />
  
<script  src="path/to/require.js">
    define(['path/to/passwordHint'],function (passwordHint) {
      passwordHint.init('#pass');
    });
</script> 
```
<h3>revelex data-module</h3>
```
<input type="password" data-module="path/to/passwordHint" />
```
###CSS easy to change
[example SASS file](https://github.com/reiniergs/passwordHint/blob/master/asset/css/src/components/_passwordHint.scss)

