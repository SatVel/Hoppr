import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ui', {path: '/'});
  this.route('dashboard', function() {
    this.route('index', { path: '/' });
    this.route('dailyrevenue', function() {
      this.route('index', { path: '/' });
      this.route('rooms');
    });
  });
});

export default Router;
