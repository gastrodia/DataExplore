/// <reference path="../../../typings/angular2/angular2.d.ts"/>
/// <reference path="../../../typings/jquery/jquery.d.ts"/>


import {Component, Directive, View, Parent} from 'angular2/angular2';
import ng2Helper = require('../../library/ng2Helper');

@Component({
  selector: 'top-title'
})

@View({
  templateUrl: ng2Helper.getTemplateUrlByComponentName('top-title'),
  directives: []
})

class TopTitle {
  
}

export = TopTitle;
