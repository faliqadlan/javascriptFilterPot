x = [],vpot = [],xp = [];
var si;


class Vpot2 {

    kronigPenney(argKro,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        vmax  = argKro[0],
        lks   = argKro[1],
        lpt   = argKro[2],
        de    = argKro[3];
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
      xp[i]   = x[i] - xmin,
      xp[i]   = xp[i] + lks/2;

      if(xp[i]%lpt < lks) {
        vpot[i] = vmax;
      } else {
        vpot[i] = v0
      }
    }
    return vpot   
    }

    harmonic(argPeriPot,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        vmax  = argPeriPot[0],
        lks   = argPeriPot[1],
        de    = argPeriPot[2];
        // si    = []
    
    var hk = 2*vmax/((lks/2)**2)
    
    for (let i = 0; i < ngrid; i++) { 
      x[i] = xmin + ((i)  * dx);
      xp[i]   = x[i] - xmin,
      xp[i]   = xp[i] + lks;

      si = xp[i]%lks - lks/2
      vpot[i] = hk*0.5*si*si + v0
      //console.log(vpot[i])
    }
    return vpot   
    }

    triangular(argPeriPot,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        vmax  = argPeriPot[0],
        lpt   = argPeriPot[1],
        de    = argPeriPot[2];

        let lks = lpt/2

        for (let i = 0; i < ngrid; i++) { 
          x[i] = xmin + ((i)  * dx);
          xp[i]   = x[i] - xmin,
          xp[i]   = xp[i] + lpt;

          si = xp[i]%lpt
          vpot[i] = vmax*Math.abs(si-lks)/lks + v0
      //console.log(vpot[i])
        }
    return vpot 
    }

    sinusoidal(argPeriPot,argPot){
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        vmax  = argPeriPot[0],
        lpt   = argPeriPot[1],
        de    = argPeriPot[2];


        for (let i = 0; i < ngrid; i++) { 
          x[i] = xmin + ((i)  * dx);
          xp[i]   = x[i] - xmin,
          xp[i]   = xp[i] + lpt;

          vpot[i] = vmax/2 *Math.sin(2*Math.PI*xp[i]/lpt + Math.PI/2)+vmax/2
      //console.log(vpot[i])
        }
    return vpot 
    }
}
