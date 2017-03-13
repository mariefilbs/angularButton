import angular from 'angular';
import CounterController from './controllers/counter';

angular
  .module('buttonular', [])
  .controller('CounterController', CounterController);
