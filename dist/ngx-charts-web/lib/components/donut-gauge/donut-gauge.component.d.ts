import { OnChanges } from '@angular/core';
import { IDonutGaugeConfig } from './donut-gauge.interface';
import * as i0 from "@angular/core";
export declare class DonutGaugeComponent implements OnChanges {
    chartWidths: number[];
    gradientDirections: {
        x1: string;
        x2: string;
        y1: string;
        y2: string;
    }[];
    defaultConfig: IDonutGaugeConfig;
    config: IDonutGaugeConfig;
    value: number;
    chartConfig: IDonutGaugeConfig;
    calculatedValues: any;
    circleRadius: string;
    baseCircleStyles: any;
    gaugeStyles: any;
    fontStyles: any;
    gradient: Array<any>;
    gradientId: string;
    gradientSource: any;
    label: string;
    title: string;
    private baseGaugeStyle;
    constructor();
    create_UUID(): string;
    ngOnChanges(changes: any): void;
    calculateValues(config: any): {
        strokeWidth: number;
        circleRadius: number;
        dashArrayMax: number;
    };
    onConfigUpdate(): void;
    onValueUpdate(): void;
    getGradientPercentages(colors: any): any;
    getBaseCircleStyles(color: any, widthProportion: any): {
        stroke: any;
        'stroke-width': string;
    };
    getFontStyles(color: any): {
        fill: any;
    };
    updateGaugeStyles(oldStyle: any, calculatedValues: any): any;
    toPercent(num: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DonutGaugeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DonutGaugeComponent, "ngx-donut-gauge", never, { "config": "config"; "value": "value"; }, {}, never, never, false, never>;
}
