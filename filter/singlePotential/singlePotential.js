x = [],vpot = [];


class Vpot {

    harmonik(argHar,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        om    = argHar[0];
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);

      vpot[i] = (0.5 * om * x[i] * x[i]) + v0
        //console.log(vpot[i])
    }
    return vpot   
    }

    triangle(argTri,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        tgi   = argTri[0],
        tt    = argTri[1];
        var xkir = xmin - tt;
        var xkan = xmax - tt;
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);

      if (x[i] < tt) {
        
        vpot[i] = (tgi / xkir) * (x[i] - tt) + v0;
        //echo $xkir;
        //console.log(xkir,pot)
      } else {
        
        vpot[i] = (tgi / xkan) * (x[i] - tt) + v0;
        //echo $xkan;
        //console.log(xkan, pot)
            }
        //console.log(vpot[i])
    }
    return vpot   
    }

    heavySide (argTri,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        tgi   = argTri[0],
        tt    = argTri[1];
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);

      if (x[i] < tt) {
        
        vpot[i] = tgi + v0
        //echo $xkir;
        //console.log(xkir,pot)
      } else {
        
        vpot[i] =  v0;
        //echo $xkan;
        //console.log(xkan, pot)
            }
        //console.log(vpot[i])
    }
    return vpot

  }

    coulumb(argHar,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        om    = argHar[0];
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
        //console.log(x[i]);
      // if (x[i] == 0) {
      //     x[i] = 1e-2;
      // }

      // vpot[i] = ( om * - 1/(Math.sqrt(x[i] * x[i]))) + v0
      vpot[i] = ((om * -1)/(Math.sqrt(x[i] * x[i]+2)))+ v0
        //console.log(vpot[i])
    }
    return vpot   
    }
}
