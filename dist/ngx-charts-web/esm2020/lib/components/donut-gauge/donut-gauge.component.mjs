import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DonutWidth, DonutGradientOrigin } from './donut-gauge.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DonutGaugeComponent {
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
        this.chartConfig = {
            ...this.defaultConfig,
            ...this.config
        };
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
        const gaugeStyle = { ...oldStyle };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQtZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNoYXJ0cy13ZWIvc3JjL2xpYi9jb21wb25lbnRzL2RvbnV0LWdhdWdlL2RvbnV0LWdhdWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jaGFydHMtd2ViL3NyYy9saWIvY29tcG9uZW50cy9kb251dC1nYXVnZS9kb251dC1nYXVnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRixPQUFPLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQVExRSxNQUFNLE9BQU8sbUJBQW1CO0lBd0M5QjtRQXZDQSxnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyx1QkFBa0IsR0FBRztZQUNuQixFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7WUFDOUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO1lBQzlDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtZQUM5QyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDOUMsRUFBRSxF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SSxtQkFBbUIsRUFBRSxDQUFDO1FBRXpFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBRztRQUNYLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7aUhBNUlVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDBIQ1ZoQywwekNBMkNBOzRGRGpDYSxtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsaUJBQWlCLG1CQUdWLHVCQUF1QixDQUFDLE1BQU07MEVBd0J0QyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSURvbnV0R2F1Z2VDb25maWcgfSBmcm9tICcuL2RvbnV0LWdhdWdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEb251dFdpZHRoLCBEb251dEdyYWRpZW50T3JpZ2luIH0gZnJvbSAnLi9kb251dC1nYXVnZS5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZG9udXQtZ2F1Z2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9udXQtZ2F1Z2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb251dC1nYXVnZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEb251dEdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY2hhcnRXaWR0aHMgPSBbMC4wMywgMC4wNiwgMC4wOV07XG4gIGdyYWRpZW50RGlyZWN0aW9ucyA9IFtcbiAgICB7IHgxOiAnMTAwJScsIHgyOiAnMCUnLCB5MTogJzUwJScsIHkyOiAnNTAlJyB9LCAvLyBUb3BcbiAgICB7IHgxOiAnNTAlJywgeDI6ICc1MCUnLCB5MTogJzAlJywgeTI6ICcxMDAlJyB9LCAvLyBMZWZ0XG4gICAgeyB4MTogJzAlJywgeDI6ICcxMDAlJywgeTE6ICc1MCUnLCB5MjogJzUwJScgfSwgLy8gQm90dG9tXG4gICAgeyB4MTogJzUwJScsIHgyOiAnNTAlJywgeTE6ICcxMDAlJywgeTI6ICcwJScgfSwgLy8gUmlnaHRcbiAgICB7IHgxOiAnMTAwJScsIHgyOiAnMCUnLCB5MTogJzAlJywgeTI6ICcxMDAlJyB9LCAvLyBUb3BMZWZ0XG4gICAgeyB4MTogJzEwMCUnLCB4MjogJzAlJywgeTE6ICcxMDAlJywgeTI6ICcwJScgfSwgLy8gVG9wUmlnaHRcbiAgICB7IHgxOiAnMCUnLCB4MjogJzEwMCUnLCB5MTogJzAlJywgeTI6ICcxMDAlJyB9LCAvLyBCb3R0b21MZWZ0XG4gICAgeyB4MTogJzAlJywgeDI6ICcxMDAlJywgeTE6ICcxMDAlJywgeTI6ICcwJScgfSAgLy8gQm90dG9tUmlnaHRcbiAgXTtcblxuICBkZWZhdWx0Q29uZmlnOiBJRG9udXRHYXVnZUNvbmZpZyA9IHtcbiAgICBzdHJva2VXaWR0aDogRG9udXRXaWR0aC5UaGluLFxuICAgIGdyYWRpZW50Q29sb3JzOiBbJyMxOTUxYzEnLCAnI2M5MGNiMyddLFxuICAgIGJhc2VDb2xvcjogJyNCNEI0QjQnLFxuICAgIHRleHRDb2xvcjogJyMwMDAwMDAnLFxuICAgIGdyYWRpZW50RGlyZWN0aW9uOiBEb251dEdyYWRpZW50T3JpZ2luLlRvcExlZnQsXG4gICAgdGl0bGU6ICdBZGQgeW91ciBhY2Nlc3NpYmxlIHRpdGxlIGhlcmUgZm9yIHlvdXIgRG9udXQgQ2hhcnQnXG4gIH07XG5cbiAgQElucHV0KCkgY29uZmlnOiBJRG9udXRHYXVnZUNvbmZpZyA9IHt9O1xuICBASW5wdXQoKSB2YWx1ZSA9IDA7XG5cbiAgY2hhcnRDb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIGNhbGN1bGF0ZWRWYWx1ZXM6IGFueTtcblxuICBjaXJjbGVSYWRpdXM6IHN0cmluZztcbiAgYmFzZUNpcmNsZVN0eWxlczogYW55O1xuICBnYXVnZVN0eWxlczogYW55O1xuICBmb250U3R5bGVzOiBhbnk7XG4gIGdyYWRpZW50OiBBcnJheTxhbnk+O1xuICBncmFkaWVudElkOiBzdHJpbmc7XG4gIGdyYWRpZW50U291cmNlOiBhbnk7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBiYXNlR2F1Z2VTdHlsZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ3JhZGllbnRJZCA9ICdncmFkaWVudC0nICsgdGhpcy5jcmVhdGVfVVVJRCgpO1xuICAgIHRoaXMuYmFzZUdhdWdlU3R5bGUgPSB7IHN0cm9rZTogYHVybCgke2xvY2F0aW9uLmhyZWZ9IyR7dGhpcy5ncmFkaWVudElkfSlgIH07XG4gICAgdGhpcy5vbkNvbmZpZ1VwZGF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlX1VVSUQoKSB7XG4gICAgbGV0IGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgIGNvbnN0IHIgPSAoZHQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgZHQgPSBNYXRoLmZsb29yKGR0IC8gMTYpO1xuICAgICAgcmV0dXJuIChjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHV1aWQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29uZmlnKSB7XG4gICAgICB0aGlzLm9uQ29uZmlnVXBkYXRlKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uVmFsdWVVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVWYWx1ZXMoY29uZmlnKSB7XG4gICAgY29uc3Qgc3Ryb2tlV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGhzW2NvbmZpZy5zdHJva2VXaWR0aF07XG4gICAgY29uc3QgY2lyY2xlUmFkaXVzID0gLjUgLSBzdHJva2VXaWR0aCAvIDI7XG4gICAgY29uc3QgZGFzaEFycmF5TWF4ID0gMiAqIE1hdGguUEkgKiBjaXJjbGVSYWRpdXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cm9rZVdpZHRoLFxuICAgICAgY2lyY2xlUmFkaXVzLFxuICAgICAgZGFzaEFycmF5TWF4XG4gICAgfTtcbiAgfVxuXG4gIG9uQ29uZmlnVXBkYXRlKCkge1xuICAgIHRoaXMuY2hhcnRDb25maWcgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi50aGlzLmNvbmZpZ1xuICAgIH07XG5cbiAgICB0aGlzLmNhbGN1bGF0ZWRWYWx1ZXMgPSB0aGlzLmNhbGN1bGF0ZVZhbHVlcyh0aGlzLmNoYXJ0Q29uZmlnKTtcblxuICAgIHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50UGVyY2VudGFnZXModGhpcy5jaGFydENvbmZpZy5ncmFkaWVudENvbG9ycyk7XG5cbiAgICB0aGlzLmJhc2VDaXJjbGVTdHlsZXMgPSB0aGlzLmdldEJhc2VDaXJjbGVTdHlsZXModGhpcy5jaGFydENvbmZpZy5iYXNlQ29sb3IsIHRoaXMuY2FsY3VsYXRlZFZhbHVlcy5zdHJva2VXaWR0aCk7XG5cbiAgICB0aGlzLmNpcmNsZVJhZGl1cyA9IHRoaXMudG9QZXJjZW50KHRoaXMuY2FsY3VsYXRlZFZhbHVlcy5jaXJjbGVSYWRpdXMpO1xuXG4gICAgdGhpcy5mb250U3R5bGVzID0gdGhpcy5nZXRGb250U3R5bGVzKHRoaXMuY2hhcnRDb25maWcudGV4dENvbG9yKTtcblxuICAgIHRoaXMuZ2F1Z2VTdHlsZXMgPSB0aGlzLnVwZGF0ZUdhdWdlU3R5bGVzKHRoaXMuZ2F1Z2VTdHlsZXMsIHRoaXMuY2FsY3VsYXRlZFZhbHVlcyk7XG5cbiAgICB0aGlzLmdyYWRpZW50U291cmNlID0gdGhpcy5ncmFkaWVudERpcmVjdGlvbnNbdGhpcy5jaGFydENvbmZpZy5ncmFkaWVudERpcmVjdGlvbl07XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMuY2hhcnRDb25maWcubGFiZWw7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuY2hhcnRDb25maWcudGl0bGU7XG4gIH1cblxuICBvblZhbHVlVXBkYXRlKCkge1xuICAgIHRoaXMuZ2F1Z2VTdHlsZXMgPSB0aGlzLnVwZGF0ZUdhdWdlU3R5bGVzKHRoaXMuZ2F1Z2VTdHlsZXMsIHRoaXMuY2FsY3VsYXRlZFZhbHVlcyk7XG4gIH1cblxuICBnZXRHcmFkaWVudFBlcmNlbnRhZ2VzKGNvbG9ycykge1xuICAgIHJldHVybiBjb2xvcnMubWFwKChjb2xvciwgaW5kZXgsIGFycikgPT4gKFxuICAgICAge1xuICAgICAgICBwZXJjZW50OiB0aGlzLnRvUGVyY2VudCgoaW5kZXgpID8gaW5kZXggLyAoYXJyLmxlbmd0aCAtIDEpIDogMCksXG4gICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgfVxuICAgICkpO1xuICB9XG5cbiAgZ2V0QmFzZUNpcmNsZVN0eWxlcyhjb2xvciwgd2lkdGhQcm9wb3J0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzdHJva2UnOiBjb2xvcixcbiAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlzLnRvUGVyY2VudCh3aWR0aFByb3BvcnRpb24pLFxuICAgIH07XG4gIH1cblxuICBnZXRGb250U3R5bGVzKGNvbG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmaWxsJzogY29sb3JcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlR2F1Z2VTdHlsZXMob2xkU3R5bGUgPSB0aGlzLmJhc2VHYXVnZVN0eWxlLCBjYWxjdWxhdGVkVmFsdWVzKSB7XG4gICAgY29uc3QgZ2F1Z2VTdHlsZSA9IHsgLi4ub2xkU3R5bGUgfTtcblxuICAgIGNvbnN0IGRhc2hBcnJheU1heCA9IGNhbGN1bGF0ZWRWYWx1ZXMuZGFzaEFycmF5TWF4O1xuICAgIGNvbnN0IGRhc2hBcnJheU1heFBlcmNlbnQgPSB0aGlzLnRvUGVyY2VudChkYXNoQXJyYXlNYXgpO1xuICAgIGNvbnN0IGdhdWdlTGVuZ3RoID0gdGhpcy50b1BlcmNlbnQodGhpcy52YWx1ZSAqIGRhc2hBcnJheU1heCk7XG5cbiAgICBnYXVnZVN0eWxlWydzdHJva2Utd2lkdGgnXSA9IHRoaXMudG9QZXJjZW50KGNhbGN1bGF0ZWRWYWx1ZXMuc3Ryb2tlV2lkdGgpO1xuICAgIGdhdWdlU3R5bGVbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGAke2dhdWdlTGVuZ3RofSAke2Rhc2hBcnJheU1heFBlcmNlbnR9YDtcblxuICAgIHJldHVybiBnYXVnZVN0eWxlO1xuICB9XG5cbiAgdG9QZXJjZW50KG51bSkge1xuICAgIHJldHVybiBgJHtudW0gKiAxMDB9JWA7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz0nZG9udXQtZ2F1Z2UnPlxuICA8c3ZnIGNsYXNzPSdkb251dC1nYXVnZV9fZ3JhcGhpYycgd2lkdGg9JzEwMHB4JyBoZWlnaHQ9JzEwMHB4JyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+XG4gICAgPHRpdGxlPnt7dGl0bGV9fTwvdGl0bGU+XG4gICAgPGRlZnM+XG4gICAgICA8bGluZWFyR3JhZGllbnQgW2F0dHIuaWRdPVwiZ3JhZGllbnRJZFwiIFxuICAgICAgICBbYXR0ci54MV09XCJncmFkaWVudFNvdXJjZS54MVwiIFthdHRyLnkxXT1cImdyYWRpZW50U291cmNlLnkxXCJcbiAgICAgICAgW2F0dHIueDJdPVwiZ3JhZGllbnRTb3VyY2UueDJcIiBbYXR0ci55Ml09XCJncmFkaWVudFNvdXJjZS55MlwiPlxuICAgICAgICA8c3RvcCAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmFkaWVudFwiIFthdHRyLm9mZnNldF09XCJpdGVtLnBlcmNlbnRcIiBbYXR0ci5zdG9wLWNvbG9yXT1cIml0ZW0uY29sb3JcIiAvPlxuICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICA8L2RlZnM+XG5cbiAgICA8Y2lyY2xlIGNsYXNzPSdkb251dC1nYXVnZV9fYmFja2dyb3VuZCcgXG4gICAgICBbYXR0ci5yXT1cImNpcmNsZVJhZGl1c1wiIFxuICAgICAgY3g9XCI1MCVcIiBcbiAgICAgIGN5PVwiNTAlXCIgXG4gICAgICBbbmdTdHlsZV09XCJiYXNlQ2lyY2xlU3R5bGVzXCIgLz5cbiAgICA8Y2lyY2xlIGNsYXNzPSdkb251dC1nYXVnZV9fZ2F1Z2UnIFxuICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC05MCw1MCw1MClcIiBcbiAgICAgIFthdHRyLnJdPVwiY2lyY2xlUmFkaXVzXCIgXG4gICAgICBjeD1cIjUwJVwiIFxuICAgICAgY3k9XCI1MCVcIiBcbiAgICAgIFtuZ1N0eWxlXT1cImdhdWdlU3R5bGVzXCIgLz5cbiAgICBcbiAgICAgIDx0ZXh0IFxuICAgICAgY2xhc3M9J2RvbnV0LWdhdWdlX192YWx1ZScgXG4gICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIFxuICAgICAgeD1cIjUwXCIgXG4gICAgICBhdHRyLnk9XCJ7e2xhYmVsPyA1NCA6IDU5IH19XCIgXG4gICAgICBmb250LXNpemU9XCIyM3B4XCJcbiAgICAgIFtuZ1N0eWxlXT1cImZvbnRTdHlsZXNcIj5cbiAgICAgIHt7dmFsdWUgfHBlcmNlbnQ6ICcuMC0wJ319XG4gICAgPC90ZXh0PlxuICAgIDx0ZXh0ICpuZ0lmPSdsYWJlbCdcbiAgICAgIGNsYXNzPSdkb251dC1nYXVnZV9fbGFiZWwnIFxuICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIiBcbiAgICAgIHg9XCI1MFwiIFxuICAgICAgeT1cIjY4XCIgXG4gICAgICBmb250LXNpemU9XCIxMnB4XCJcbiAgICAgIFtuZ1N0eWxlXT1cImZvbnRTdHlsZXNcIj5cbiAgICAgIHt7bGFiZWx9fVxuICAgIDwvdGV4dD5cbiAgPC9zdmc+XG48L2Rpdj5cbiJdfQ==