# Aliveforms Plugins

This is list of first party plugins for Aliveforms.

## NewAlert
- NewAlert Notification Library
- Version 1.0
- Written by Nabeel Ali

This is to add new JS Popups.

### Installation
In local logic unit, at boot or screen -1, at this code

```
$.ImportScript('https://cdn.jsdelivr.net/gh/nabeelalihashmi/aliveformsplugins@master/js/PNewAlert.min.js', function() {
    window.newAlert = window newAlert || new PNewAlert();
    window.newAlert.init();
});
```

### Usage

Once Initialized, it can be used in next logic units as:

```
window.newAlert.alert(message, default|success|danger, timeout)
```
___
