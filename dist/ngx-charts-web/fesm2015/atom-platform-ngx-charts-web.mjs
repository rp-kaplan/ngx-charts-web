import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const DonutWidth = {
    Thin: 0,
    Medium: 1,
    Thick: 2
};
const DonutGradientOrigin = {
    Top: 0,
    Left: 1,
    Bottom: 2,
    Right: 3,
    TopLeft: 4,
    TopRight: 5,
    BottomLeft: 6,
    BottomRight: 7
};

class DonutGaugeComponent {
    constructor() {
        this.chartWidths = [0.03, 0.06, 0.09];
        this.gradientDirections = [
            { x1: '100%', x2: '0%', y1: '50%', y2: '50%' },
            { x1: '50%', x2: '50%', y1: '0%', y2: '100%' },
            { x1: '0%', x2: '100%', y1: '50%', y2: '50%' },
            { x1: '50%', x2: '50%', y1: '100%', y2: '0%' },
            { x1: '100%', x2: '0%', y1: '0%', y2: '100%' },
            { x1: '100%', x2: '0%', y1: '100%', y2: '0%' },
            { x1: '0%', x2: '100%', y1: '0%', y2: '100%' },
            { x1: '0%', x2: '100%', y1: '100%', y2: '0%' } // BottomRight
        ];
        this.defaultConfig = {
            strokeWidth: DonutWidth.Thin,
            gradientColors: ['#1951c1', '#c90cb3'],
            baseColor: '#B4B4B4',
            textColor: '#000000',
            gradientDirection: DonutGradientOrigin.TopLeft,
            title: 'Add your accessible title here for your Donut Chart'
        };
        this.config = {};
        this.value = 0;
        this.chartConfig = this.defaultConfig;
        this.gradientId = 'gradient-' + this.create_UUID();
        this.baseGaugeStyle = { stroke: `url(${location.href}#${this.gradientId})` };
        this.onConfigUpdate();
    }
    create_UUID() {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    ngOnChanges(changes) {
        if (changes.config) {
            this.onConfigUpdate();
        }
        if (changes.value) {
            this.onValueUpdate();
        }
    }
    calculateValues(config) {
        const strokeWidth = this.chartWidths[config.strokeWidth];
        const circleRadius = .5 - strokeWidth / 2;
        const dashArrayMax = 2 * Math.PI * circleRadius;
        return {
            strokeWidth,
            circleRadius,
            dashArrayMax
        };
    }
    onConfigUpdate() {
        this.chartConfig = Object.assign(Object.assign({}, this.defaultConfig), this.config);
        this.calculatedValues = this.calculateValues(this.chartConfig);
        this.gradient = this.getGradientPercentages(this.chartConfig.gradientColors);
        this.baseCircleStyles = this.getBaseCircleStyles(this.chartConfig.baseColor, this.calculatedValues.strokeWidth);
        this.circleRadius = this.toPercent(this.calculatedValues.circleRadius);
        this.fontStyles = this.getFontStyles(this.chartConfig.textColor);
        this.gaugeStyles = this.updateGaugeStyles(this.gaugeStyles, this.calculatedValues);
        this.gradientSource = this.gradientDirections[this.chartConfig.gradientDirection];
        this.label = this.chartConfig.label;
        this.title = this.chartConfig.title;
    }
    onValueUpdate() {
        this.gaugeStyles = this.updateGaugeStyles(this.gaugeStyles, this.calculatedValues);
    }
    getGradientPercentages(colors) {
        return colors.map((color, index, arr) => ({
            percent: this.toPercent((index) ? index / (arr.length - 1) : 0),
            color: color
        }));
    }
    getBaseCircleStyles(color, widthProportion) {
        return {
            'stroke': color,
            'stroke-width': this.toPercent(widthProportion),
        };
    }
    getFontStyles(color) {
        return {
            'fill': color
        };
    }
    updateGaugeStyles(oldStyle = this.baseGaugeStyle, calculatedValues) {
        const gaugeStyle = Object.assign({}, oldStyle);
        const dashArrayMax = calculatedValues.dashArrayMax;
        const dashArrayMaxPercent = this.toPercent(dashArrayMax);
        const gaugeLength = this.toPercent(this.value * dashArrayMax);
        gaugeStyle['stroke-width'] = this.toPercent(calculatedValues.strokeWidth);
        gaugeStyle['stroke-dasharray'] = `${gaugeLength} ${dashArrayMaxPercent}`;
        return gaugeStyle;
    }
    toPercent(num) {
        return `${num * 100}%`;
    }
}
DonutGaugeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DonutGaugeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DonutGaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: DonutGaugeComponent, selector: "ngx-donut-gauge", inputs: { config: "config", value: "value" }, usesOnChanges: true, ngImport: i0, template: "<div class='donut-gauge'>\n  <svg class='donut-gauge__graphic' width='100px' height='100px' viewBox='0 0 100 100'>\n    <title>{{title}}</title>\n    <defs>\n      <linearGradient [attr.id]=\"gradientId\" \n        [attr.x1]=\"gradientSource.x1\" [attr.y1]=\"gradientSource.y1\"\n        [attr.x2]=\"gradientSource.x2\" [attr.y2]=\"gradientSource.y2\">\n        <stop *ngFor=\"let item of gradient\" [attr.offset]=\"item.percent\" [attr.stop-color]=\"item.color\" />\n      </linearGradient>\n    </defs>\n\n    <circle class='donut-gauge__background' \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"baseCircleStyles\" />\n    <circle class='donut-gauge__gauge' \n      transform=\"rotate(-90,50,50)\" \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"gaugeStyles\" />\n    \n      <text \n      class='donut-gauge__value' \n      text-anchor=\"middle\" \n      x=\"50\" \n      attr.y=\"{{label? 54 : 59 }}\" \n      font-size=\"23px\"\n      [ngStyle]=\"fontStyles\">\n      {{value |percent: '.0-0'}}\n    </text>\n    <text *ngIf='label'\n      class='donut-gauge__label' \n      text-anchor=\"middle\" \n      x=\"50\" \n      y=\"68\" \n      font-size=\"12px\"\n      [ngStyle]=\"fontStyles\">\n      {{label}}\n    </text>\n  </svg>\n</div>\n", styles: [".donut-gauge{height:100%;width:100%}.donut-gauge__graphic{width:100%;height:100%}.donut-gauge__background{fill:transparent}.donut-gauge__gauge{fill:transparent;transition:stroke-dasharray .3s ease-in-out,stroke .3s ease-in-out}.donut-gauge__value{font-weight:700}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "pipe", type: i1.PercentPipe, name: "percent" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: DonutGaugeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-donut-gauge', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class='donut-gauge'>\n  <svg class='donut-gauge__graphic' width='100px' height='100px' viewBox='0 0 100 100'>\n    <title>{{title}}</title>\n    <defs>\n      <linearGradient [attr.id]=\"gradientId\" \n        [attr.x1]=\"gradientSource.x1\" [attr.y1]=\"gradientSource.y1\"\n        [attr.x2]=\"gradientSource.x2\" [attr.y2]=\"gradientSource.y2\">\n        <stop *ngFor=\"let item of gradient\" [attr.offset]=\"item.percent\" [attr.stop-color]=\"item.color\" />\n      </linearGradient>\n    </defs>\n\n    <circle class='donut-gauge__background' \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"baseCircleStyles\" />\n    <circle class='donut-gauge__gauge' \n      transform=\"rotate(-90,50,50)\" \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"gaugeStyles\" />\n    \n      <text \n      class='donut-gauge__value' \n      text-anchor=\"middle\" \n      x=\"50\" \n      attr.y=\"{{label? 54 : 59 }}\" \n      font-size=\"23px\"\n      [ngStyle]=\"fontStyles\">\n      {{value |percent: '.0-0'}}\n    </text>\n    <text *ngIf='label'\n      class='donut-gauge__label' \n      text-anchor=\"middle\" \n      x=\"50\" \n      y=\"68\" \n      font-size=\"12px\"\n      [ngStyle]=\"fontStyles\">\n      {{label}}\n    </text>\n  </svg>\n</div>\n", styles: [".donut-gauge{height:100%;width:100%}.donut-gauge__graphic{width:100%;height:100%}.donut-gauge__background{fill:transparent}.donut-gauge__gauge{fill:transparent;transition:stroke-dasharray .3s ease-in-out,stroke .3s ease-in-out}.donut-gauge__value{font-weight:700}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class NgxChartsWebModule {
}
NgxChartsWebModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxChartsWebModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxChartsWebModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: NgxChartsWebModule, declarations: [DonutGaugeComponent], imports: [CommonModule], exports: [DonutGaugeComponent] });
NgxChartsWebModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxChartsWebModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxChartsWebModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [DonutGaugeComponent],
                    exports: [DonutGaugeComponent]
                }]
        }] });

/*
 * Public API Surface of ngx-charts-web
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DonutGaugeComponent, DonutGradientOrigin, DonutWidth, NgxChartsWebModule };
//# sourceMappingURL=atom-platform-ngx-charts-web.mjs.map
