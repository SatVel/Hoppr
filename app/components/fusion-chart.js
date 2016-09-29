import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        charttype:'';
        renderat: '';
        myData:'';
    },

    didInsertElement() {
        var appData = this.get('data');        
        var myData=appData.data;
        var configData = this.get('config');
        var height=configData.height;
        var width=configData.width;
        var chartType = configData.charttype;
        var divName = configData.renderat;
        var paletteColors = configData.paletteColors;
         
        FusionCharts.ready( function() {
            var fusioncharts = new FusionCharts({   
                type: chartType,
                renderAt: divName,
                width: width,
                height: height,
                dataFormat: 'json',
                dataSource: {
                    chart: {
                        paletteColors: paletteColors,     
                        bgColor: "#ffffff",
                        showBorder: "0",
                        use3DLighting: "0",
                        enableSmartLabels: "1",
                        startingAngle: "310",
                        showLabels: "1",
                        showPercentValues: "0",
                        showLegend: "1",
                        defaultCenterLabel: "64.08K",
                        centerLabel: "Revenue from $label",
                        centerLabelBold: "1",
                        showTooltip: "1",
                        decimals: "0",
                        useDataPlotColorForLabels: "1",
                        enableMultiSlicing :"1"
                    },
                    "data": myData
                }
            });

            fusioncharts.render();
        });
    }
});
