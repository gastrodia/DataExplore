var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/angular2/angular2.d.ts"/>
/// <reference path="../../../typings/jquery/jquery.d.ts"/>
var ng2Helper = require('../../library/ng2Helper');
var angular2_1 = require('angular2/angular2');
var angular2 = require('angular2/angular2');
var baseChartShower = require('./baseChartShower');
var YesterdayLogShower = (function (_super) {
    __extends(YesterdayLogShower, _super);
    function YesterdayLogShower(viewContrainer) {
        _super.call(this, viewContrainer);
        this.option = {
            title: {
                text: '某楼盘销售情况',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['意向', '预购', '成交']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '成交',
                    type: 'line',
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name: '预购',
                    type: 'line',
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name: '意向',
                    type: 'line',
                    smooth: true,
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };
        this.drawChart();
    }
    YesterdayLogShower = __decorate([
        angular2_1.Component({
            selector: 'yesterday-log-shower'
        }),
        angular2_1.View({
            templateUrl: ng2Helper.getTemplateUrlByComponentPath('shower/log-shower'),
        }), 
        __metadata('design:paramtypes', [angular2.ViewContainerRef])
    ], YesterdayLogShower);
    return YesterdayLogShower;
})(baseChartShower);
module.exports = YesterdayLogShower;
//# sourceMappingURL=YesterdayLogShower.js.map