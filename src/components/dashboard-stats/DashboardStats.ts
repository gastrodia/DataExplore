/// <reference path="../../../typings/angular2/angular2.d.ts"/>
/// <reference path="../../../typings/jquery/jquery.d.ts"/>


import {Component, Directive, View, Parent} from 'angular2/angular2';
import ng2Helper = require('../../library/ng2Helper');
import rpc = require('../easy-rpc/index');

@Component({
  selector: 'dashboard-stats'
})

@View({
  templateUrl: ng2Helper.getTemplateUrlByComponentName('dashboard-stats'),
  directives: []
})

class DashboardStats {
  userAddNumber:number = null;
  moneyAddNumber:number = null;
  leaveAndLeftPercent:number = null;
  constructor(){

    rpc.call('money.getYesterdayAddCount',{},(money)=>{
      this.moneyAddNumber = money;
    });

    rpc.call('user.getYesterdayAddCount',{},(count)=>{
      this.userAddNumber = count;
    });

    rpc.call('user.getLeastLeaveAndLeft',{},(percent)=>{
      this.leaveAndLeftPercent = Math.round(percent * 10000)/100;
    })

  }

}

export = DashboardStats;
