import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { cornerstone, cornerstoneTools, cornerstoneWADOImageLoader } from 'meteor/custom:cornerstone';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  console.log('cornerstone: ', cornerstone);
  console.log('window.cornerstone: ', window.cornerstone);
  console.log('cornerstone.getStoredPixels: ', cornerstone.getStoredPixels());
  console.log('cornerstoneTools: ', cornerstoneTools);
  console.log('window.cornerstoneTools: ', window.cornerstoneTools);
  console.log('cornerstoneWADOImageLoader: ', cornerstoneWADOImageLoader);
  console.log('window.cornerstoneWADOImageLoader: ', window.cornerstoneWADOImageLoader);

  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
