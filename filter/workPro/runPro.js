// enewPlaceholder = document.getElementById('enewPlaceholder')
// elevPlaceholder = document.getElementById('elevPlaceholder')

function run() {
    let nloop   = parseFloat(document.getElementById('nloop').value),
        xmin    = parseFloat(document.getElementById('xmin').value),
        xmax    = parseFloat(document.getElementById('xmax').value),
        dx      = parseFloat(document.getElementById('dx').value),
        initE   = parseFloat(document.getElementById('initE').value),
        minE    = parseFloat(document.getElementById('minE').value),
        v0      = parseFloat(document.getElementById('v0').value);

    leb     = xmax - xmin,
    ngrid   = leb/dx;

    argPot = [xmin,xmax,dx,v0,ngrid,nloop,leb]

    if (document.getElementById("singlePot") === null) {
        selectedValue2 = document.getElementById("periPot").value
        selectedValue = ""
    } else if(document.getElementById("periPot") == null){
        selectedValue = document.getElementById("singlePot").value
        selectedValue2 = ""
    }

    // selectedValue = document.getElementById("singlePot").value
    // selectedValue2 = document.getElementById("periPot").value
    

    if (selectedValue == "") {
        //console.log(selectedValue, "nothing")
    } else if (selectedValue == "0") {
        om = parseFloat(document.getElementById('omega').value)
        
        argHar = [om]

        potHarm = new Vpot
        potHarm = potHarm.harmonik(argHar,argPot)

        //getEnergy(initE,potHarm,argPot);
        spekEnergy(minE,initE,potHarm,argPot)
        //Elevel(initE,potHarm,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Level energy: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;
        
    } else if (selectedValue == "1"){
        // load("./potential/tringale.js")
        tgi     = parseFloat(document.getElementById('tinggi').value);
        tt     = parseFloat(document.getElementById('titik_tengah').value)

        argTri = [tgi,tt]

        potTri = new Vpot
        potTri = potTri.triangle(argTri,argPot)

        //getEnergy(initE,potTri,argPot);
        spekEnergy(minE,initE,potTri,argPot)
        //Elevel(initE,potTri,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Level energy: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;

    } else if (selectedValue == "2"){
        // load("./potential/tringale.js")
        tgi     = parseFloat(document.getElementById('tinggi').value);
        tt     = parseFloat(document.getElementById('titik_tengah').value)

        argTri = [tgi,tt]

        potTri = new Vpot
        potTri = potTri.heavySide(argTri,argPot)

        //getEnergy(initE,potTri,argPot);
        spekEnergy(minE,initE,potTri,argPot)
        //Elevel(initE,potTri,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Level energy: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;

    } else if (selectedValue == "3") {
        om = parseFloat(document.getElementById('omega').value)
        
        argHar = [om]

        potHarm = new Vpot
        potHarm = potHarm.coulumb(argHar,argPot)

        //getEnergy(initE,potHarm,argPot);
        spekEnergy(minE,initE,potHarm,argPot)
        //Elevel(initE,potHarm,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Level energy: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;
        
    }

    if (selectedValue2 == "") {
        //console.log(selectedValue, "nothing")
    } else if (selectedValue2 == "0") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lks = parseFloat(document.getElementById('lks').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de  = parseFloat(document.getElementById('de').value)
        
        argKro = [vmax,lks,lpt,de]

        potKro = new Vpot2
        potKro = potKro.kronigPenney(argKro,argPot)

        indexMiniX_start = x.indexOf(-2*lpt)
        indexMiniX_end = x.indexOf(2*lpt)

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potKro,argPot);
        spekEnergyPeri(minE,initE,potKro,argPot,lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)
        

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;
        
    } else if (selectedValue2 == "1") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lks = parseFloat(document.getElementById('lks').value)
        de  = parseFloat(document.getElementById('de').value)
        
        argPeriPot = [vmax,lks,de]

        potPeri = new Vpot2
        potPeri = potPeri.harmonic(argPeriPot,argPot)

        indexMiniX_start = x.indexOf(-2*lks)
        indexMiniX_end = x.indexOf(2*lks)

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE,initE,potPeri,argPot,lks)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)
        

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;
        
    } else if (selectedValue2 == "2") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de  = parseFloat(document.getElementById('de').value)
        
        argPeriPot = [vmax,lpt,de]

        potPeri = new Vpot2
        potPeri = potPeri.triangular(argPeriPot,argPot)

        indexMiniX_start = x.indexOf(-2*lpt)
        indexMiniX_end = x.indexOf(2*lpt)

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE,initE,potPeri,argPot,lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;
        
    } else if (selectedValue2 == "3") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de  = parseFloat(document.getElementById('de').value)
        
        argPeriPot = [vmax,lpt,de]

        potPeri = new Vpot2
        potPeri = potPeri.sinusoidal(argPeriPot,argPot)

        indexMiniX_start = x.indexOf(-2*lpt)
        indexMiniX_end = x.indexOf(2*lpt)

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE,initE,potPeri,argPot,lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;
        
    }

    enewPlaceholder.innerHTML = `
    <h1 class="text-light">Eigen energy: <span id="Enew"></span> </h1>
    `


    imPlotPlaceholder.innerHTML = ''

    Enew.innerHTML = energy_new;
    

    chartPlaceholder1.innerHTML = `
    <br>
	<div id="chartContainer1" style="height: 1000px; width: 1250px;"></div>
	<br>
    `
    chartPlaceholder2.innerHTML=`
    <br>
    <div id="chartContainer2" style="height: 1000px; width: 1250px;"></div>
	<br>
    `
    chartPlaceholder3.innerHTML=`
    <br>
    <div id="chartContainer3" style="height: 1000px; width: 1250px;"></div>
	<br>
    `

    var xt = [],
        xt1 = [];

    for (let index = 0; index < spekE.length; index++) {
        xt.push(0)
        xt1.push(100)
    }
    // console.log(xt,xt1)

    
    //console.log(x_mini)

    var vpot_plot = {
    x: x,
    y: vpot,
    type: 'scatter',
    name: 'potential'
    };

    var efunction_plot = {
    x: x,
    y: efunction,
    type: 'scatter',
    name: 'psi'
    };

    var spekE_plot = {
    type: "scatter",
    mode: "markers",
    marker: {
        // sizemin: 100,
        size: 30,
        // arearatio: 100,
    },
    x: xt,
    y: spekE,
    name : "spectrum energy"
    }

    var vpot_layout = {
        title:{ 
            text:"Potential Function",
        font: {
            family: 'Courier New, monospace',
            size: 30
                }
            },
        annotations: [
        {
            x: xmin,
            y: Math.min.apply(null, vpot),
            xref: 'x',
            yref: 'y',
            text: 'xmin',
            showarrow: true,
            ax: 0,
            ay: -40,
            font: {
                family: 'Courier New, monospace',
                size: 24
                }
        },
        {
            x: xmax,
            y: Math.min.apply(null, vpot),
            xref: 'x',
            yref: 'y',
            text: 'xmax',
            showarrow: true,
            ax: 0,
            ay: -40,
            font: {
                family: 'Courier New, monospace',
                size: 24
                }
        },
        {
            x: xmin,
            y: Math.max.apply(null, vpot),
            xref: 'x',
            yref: 'y',
            text: 'vmax',
            showarrow: true,
            ax: 0,
            ay: -40,
            font: {
                family: 'Courier New, monospace',
                size: 24
                }
        }
                    ],
        xaxis: {
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth:4,
            ticks:'outside',
            title:{
            text: "x",
            font: {
                family: 'Courier New, monospace',
                size : 24
            }},
        },
        yaxis: {
            title:{
            text:"potential(x)",
            font: {
                family: 'Courier New, monospace',
                size : 24
            }},
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            tickfont: {
                family:'Old Standard TT, serif',
                size:14,
                color:"black"
            }
        }
     }

     var efunction_layout = {
        title:{ 
            text:"Wave Function",
            font: {
                family: 'Courier New, monospace',
                size: 30
                }
            },
        xaxis: {
            title:{
            text:"x",
            font: {
                family: 'Courier New, monospace',
                size: 24
            }},
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth:4,
            ticks:'outside'
        },
        yaxis: {
            title:{
            text:"psi(x)",
            font: {
                family: 'Courier New, monospace',
                size : 24
            }},
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            tickfont: {
                family:'Old Standard TT, serif',
                size:14,
                color:"black"
            }
        }
     }

    var spekE_layout = {
        title:{ 
            text:"Spektrum Energy",
            font: {
                family: 'Courier New, monospace',
                size: 30
                }
            },
        xaxis: {
            title:{
            text:"x",
            font: {
                family: 'Courier New, monospace',
                size: 24
            }},
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth:4,
            ticks:'outside'
        },
        yaxis: {
            title:{
            text : "Energy Level",
            font: {
                family: 'Courier New, monospace',
                size : 24
            }},
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth:4,
            ticks:'outside',
            tickfont: {
                family:'Old Standard TT, serif',
                size:14,
                color:"black"
            }
            
        },
        hovermode:'closest'
    }

    Plotly.newPlot( 'chartContainer1',[vpot_plot],vpot_layout)
    

    if (selectedValue2 == "") {
        Plotly.newPlot( 'chartContainer2', [efunction_plot],efunction_layout)
        Plotly.newPlot( 'chartContainer3', [spekE_plot],spekE_layout)
    } else if(selectedValue == "") {

        let x_mini = [],
        ef_mini = [],
        vpot_mini = [],
        xBand = []
        ;
        //console.log(indexMiniX_start, indexMiniX_end)
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            x_mini.push(x[i])
        }
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            ef_mini.push(efunction[i])
        }
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            vpot_mini.push(vpot[i])
        }

        for (let index = 0; index < bandLabel.length; index++) {
            xBand.push(x[indexMiniX_end]/4)
        }

        var vpot_miniPlot = {
            x: x_mini,
            y: vpot_mini,
            type: 'scatter',
            name: 'potential'
        };

        var ef_miniPlot = {
            x: x_mini,
            y: ef_mini,
            type: 'scatter',
            name: 'psi'
        };

        // var bandLabel_plot = {
        //     x : xBand,
        //     y : bandLabel,
        //     type: 'scatter',
        //     mode: "markers",
        //     marker: {
        //         // sizemin: 100,
        //         size: 30,
        //         // arearatio: 100,
        //         symbol: "arrow-left"
        //     },
        //     name : 'band border'
        // }

        Plotly.newPlot( 'chartContainer2', [ef_miniPlot,vpot_miniPlot],efunction_layout)
        Plotly.newPlot( 'chartContainer3', [spekE_plot, vpot_miniPlot],spekE_layout)
    }
}