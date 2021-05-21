var efunction   = [],
    collectEf   = [],
    spekE       = [],
    vtemp       = [],
    arr         = [],
    deltaSpekE  = [],
    bandLabel   = [],
    deriEf      = [],
    peakEf      = [],
    ef_miniPeri = [],
    siPot       = [],
    bandMin     = [],
    bandMax     = [],
    iter        = 0,
    eLevel      = 0;

function makeArr(startValue, stopValue, step) {
        
        
  while (startValue <= stopValue) {
      arr.push(startValue)
      startValue += step;
  }
  return arr;
}

// function print2Smallest( arr, arr_size)
// {
//     let i, first, second;
 
//     /* There should be atleast two elements */
//     if (arr_size < 2)
//     {
//         document.write(" Invalid Input ");
//         return;
//     }
 
//     first=Number.MAX_VALUE ;
//     second=Number.MAX_VALUE ;
//     for (i = 0; i < arr_size ; i ++)
//     {
//         /* If current element is smaller than first
//         then update both first and second */
//         if (arr[i] < first)
//         {
//             second = first;
//             first = arr[i];
//         }
 
//         /* If arr[i] is in between first and second
//         then update second */
//         else if (arr[i] < second && arr[i] != first)
//             second = arr[i];
//     }

// }


// function getDeltaSpekE(minE,vpot,argPot) {
//     iSpekE      = 0
//     while (iSpekE < 2) {
//         iSpekE = iSpekE + 1
//         getEnergy(minE,vpot,argPot);
//         energy_new1 = energy_new;
//         deltaSpekE.push(energy_new);
//         // console.log(collectEf)
//         //console.log(efunction[1000])
//         if (energy_new <= 1) {
//             if (energy_new <= 0.5) {
//             siep = (energy_new - minE)*energy_new
//             }   else if (energy_new > 0.5){
//             siep = (energy_new - minE)*minE
//             }
        
//         } else if (energy_new > 1) {
//             siep = (energy_new - minE)/energy_new
//         }
//         if(minE == 0){
//             minE = energy_new1 + 0.1;
//             } else {
//             minE = energy_new1 + siep
//             }
        
//     }
// }

// function getBandgapCount(spekE,deltaSpekE) {

//     let bandCount = 0;
//     if (deltaSpekE[1] <= 1) {
//         if (deltaSpekE[1] <= 0.5) {
//             sic = (deltaSpekE[1] - deltaSpekE[0])*deltaSpekE[1]
//         } else if (deltaSpekE[1] > 0.5){
//             sic = (deltaSpekE[1] - deltaSpekE[0])*deltaSpekE[0]
//         }
        
//     } else if (deltaSpekE[1] > 1) {
//         sic = (deltaSpekE[1] - deltaSpekE[0])/deltaSpekE[0]
//     }
    
    
//     for (let i = 1; i < spekE.length; i++) {
//         si = (spekE[i] - spekE[i - 1]);

//         if (si < 0.1) {
//             bandCount += 1
//         }
//     }
//     bandCount_1 = spekE.length - bandCount
//     // console.log(bandCount_1)
// }

function spekEnergyPeri(minE,initE,vpot,argPot,widthPot) {
let     xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4];
        
    // iSpekE      = 0
    // while (iSpekE < 2) {
    //     iSpekE = iSpekE + 1
    //     getEnergy(minE,vpot,argPot);
    //     energy_new1 = energy_new;
    //     deltaSpekE.push(energy_new);
    //     // console.log(collectEf)
    //     // console.log(efunction[1000])
    //     minE = energy_new1 + 0.1;
    // }

    makeArr(minE, initE, de);
    // console.log(arr[0])
    // e1 = singleEigen(argPot, vpot,iter,arr[0],vtemp)
    // console.log(e1)
    // console.log(singleEigen(argPot, vpot,iter,arr[0],vtemp))
    for (let i = 0; i < arr.length; i++) {
        singleEigen(argPot, vpot,iter,arr[i],vtemp)
        spekE.push(energy_new);
        //collectEf.push(efunction)
        //console.log(energy_new_c,energy_new)
    }
    // return spekE

    let bandCount = 0,
        siCount   = 1,
        peakCount = 0;
    // if (deltaSpekE[1] <= 1) {
    //     if (deltaSpekE[1] <= 0.5) {
    //         sic = (deltaSpekE[1] - deltaSpekE[0])
    //     } else if (deltaSpekE[1] > 0.5){
    //         sic = (deltaSpekE[1] - deltaSpekE[0])*deltaSpekE[0]
    //     }
    // } else if (deltaSpekE[1] > 1) {
    //     if (deltaSpekE[1] <= 2) {
    //         sic = (deltaSpekE[1] - deltaSpekE[0])*deltaSpekE[0]
    //     } else if (deltaSpekE[1] > 2){
    //         sic = (deltaSpekE[1] - deltaSpekE[0])/deltaSpekE[1]
    //     }
    // }
    // console.log(x)
    periX_start = x.indexOf(widthPot)
    periX_end = x.indexOf(2*widthPot)

    // console.log(periX_start, periX_end)

    for (let i = periX_start; i < periX_end; i++) {
            ef_miniPeri.push(efunction[i])
        }
    // console.log(ef_miniPeri)

    for (let i = 0; i < ef_miniPeri.length; i++) {
            deri = (ef_miniPeri[i+1] - ef_miniPeri[i])/dx
            //console.log(deri)
            deriEf.push(deri)
        }
    //console.log(deriEf)

    for (let i = 0; i < deriEf.length; i++) {
        if (deriEf[i] <0 && deriEf[i+1] > 0) {
            peakCount += 1
        }
        if (deriEf[i] >0 && deriEf[i+1] < 0) {
            peakCount += 1
        }
    }

    sortSpek = spekE.sort()
    
    for (let i = 0; i < sortSpek.length-1; i++) {
        siperi = (sortSpek[i+1] - spekE[i]);
        siPot.push(siperi)
    }
    siPot = siPot.sort(function(a, b) {
        return a - b;
    })
    siPot = siPot.reverse()
    //console.log(siPot[peakCount], peakCount)

    //console.log(sortSpek[peakCount], peakCount)
    sic = siPot[peakCount-1]
    
    // for (let i = 1; i < spekE.length; i++) {
    //     si = (spekE[i] - spekE[i - 1]);

    //     if (si < sic) {
    //         bandCount += 1
            
    //     }
    //     if (si > sic) {
    //         siCount += 1
    //         //console.log(si)
    //         bandLabel.push(spekE[i])
    //     }
    // }

    bandMin.push(sortSpek[0])
    for (let i = 0; i < sortSpek.length-2; i++) {
        if (sortSpek[i+1] - sortSpek[i] > sic) {
            
            bandMax.push(sortSpek[i])
            bandMin.push(sortSpek[i+1])
        }
    }
    bandMax.push('...')
    console.log(bandMin,bandMax)

    bandCount_1 = peakCount
}

function spekEnergy(minE,initE,vpot,argPot) {

    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4];

    // function energy(initE,vpot,argPot) {
    // singleEigen(argPot, vpot,iter,initE,vtemp)
    // while (initE - energy_new > 0) {
    //     initE = initE + ((initE - energy_new)/energy_new)
    //     singleEigen(argPot, vpot,iter,initE,vtemp)
    // }
    // }

    getEnergy(minE,vpot,argPot);
    energy_new1 = energy_new;
    // collectEf.push(efunction)
    
    while (energy_new1 < initE) {
        getEnergy(minE,vpot,argPot);
        eLevel = eLevel + 1;
        energy_new1 = energy_new;
        spekE.push(energy_new);
        //collectEf.push(efunction)
        // console.log(collectEf)
        // console.log(efunction[1000])
        if (energy_new <= 1 && energy_new >= 0) {
            if (energy_new <= 0.5) {
            sie = (energy_new - minE)*energy_new
            } else if (energy_new > 0.5){
            sie = (energy_new - minE)*minE
            }
        } else if (energy_new > 1) {
            sie = (energy_new - minE)/energy_new
        } else if (energy_new <= 0) {
            sie = 0.1
        }

        minE = energy_new1 + sie;
    }
    //console.log(eLevel)
}

function getEnergy(initE,vpot,argPot) {
    //console.log(argPot)
    singleEigen(argPot, vpot,iter,initE,vtemp)
    while (initE - energy_new > 0) {
        initE = initE + ((initE - energy_new)/energy_new)
        //console.log(initE)
        singleEigen(argPot, vpot,iter,initE,vtemp)
        //console.log(energy_new)
    }
}

// function Elevel(initE,vpot,argPot) {
//     // function energy(initE,vpot,argPot) {
//     // singleEigen(argPot, vpot,iter,initE,vtemp)
//     // while (initE - energy_new > 0) {
//     //     initE = initE + ((initE - energy_new)/energy_new)
//     //     singleEigen(argPot, vpot,iter,initE,vtemp)
//     // }
//     // }
    
//     initE0 = 0
//     getEnergy(initE0,vpot,argPot);
//     energy_new1 = energy_new;
//     while (energy_new1 < initE) {
//         eLevel = eLevel + 1;
//         getEnergy(initE0,vpot,argPot);
//         energy_new1 = energy_new;
//         initE0 = energy_new1 + 0.1;
//     }
    
// }



function singleEigen(argPot, vpot,iter,initE,vtemp)
{
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        nloop = argPot[5];
    // console.log(dx,ngrid,iter,nloop,initE)
    // for (let i = 0; i < ngrid; i++) {
    //     x[i] = xmin + ((i)  * dx);
    //     //console.log(x[i]);

    //     vpot[i] = potensial_function(xmin,leb,om,x[i], v0);
    //     idx[i] = i;
    //     //console.log(vpot[i])
    // }
    // console.log(xmin,xmax,ngrid)
    //console.log(x);
    eigenState(x,ngrid,efunction,vpot,initE,iter,nloop,dx,vtemp);

    //console.log(energy_new)
}

function spaceship(val1, val2) {
    if ((val1 === null || val2 === null) || (typeof val1 != typeof val2)) {
        return null;
    }
    if (typeof val1 === 'string') {
        return (val1).localeCompare(val2);
    }
    else {
        if (val1 > val2) { return 1 }
        else if (val1 < val2) { return -1 }
        return 0;
    }
}

function getSum(total, num) {
  return total + num;
}

function eigenState(x,ngrid,efunction,vpot,initE,iter,nloop,dx,vtemp)
{
    //initE = initE
    // console.log(dx,ngrid,iter,nloop,initE)
    //console.log(vpot[0],vpot[ngrid-1])
    initE = initE + 1e-16;
    
    // console.log(initE)
    x_tart = x[0];
    x_end  = x[ngrid - 1];
    if (x_tart < 0) {
        for (let i = 0; i < ngrid; i++) {
            efunction[i] = (Math.sin(x[i]) + Math.cos(x[i]));
           
        }

    } else {
        for (let i = 0; i < ngrid;i++) {
            efunction[i] = 1 + x[i] / x_end;
        }
    }
    //console.table(efunction)
    //Object.entries(efunction)
    vharm = vpot[ngrid - 1];
    //console.table(vpot)
    estart = initE;
    // console.table(estart)
    eps = 1e-10;
    if (estart > 0) eps = 1e-10;
    if (vharm > 1) eps = 1e-10;
    energy = initE;
    isig = 1;
    if (initE < 0) isig = -1;
    //console.table(isig)
    do {
        //console.log(initE);
        if (iter == 0) {
            nloop = nloop
        } else {
            nloop = 1
        }
        iter += iter;
        // console.log(efunction)
        invers(dx,vtemp,vpot,efunction,ngrid,nloop);
        //console.log(efunction[ngrid/2])
        //iter1 = 0
        // do {
        //     //iter1 += iter1
        //     efunction1 = efunction
        //     invers(dx,vtemp,vpot,efunction,ngrid,nloop)
        //     // delta_ef = Math.abs((efunction.reduce(getSum,0)-efunction1.reduce(getSum,0)/efunction1.reduce(getSum,0)))
        //     delta_ef = Math.abs(efunction[ngrid/2]-efunction1[ngrid/2])
        //     console.log(efunction[ngrid/2], efunction1[ngrid/2])
        //     //console.log(delta_ef)
        // } while (delta_ef < eps);

        sum = 0;
        for (let i = 0; i < ngrid; i++) {
            sum = sum + efunction[i] * efunction[i];
            //console.log(sum)
        }
        
        sum = Math.sqrt(sum * dx);
        //console.log(sum)
        for (i = 1; i < ngrid; i++) {
            efunction[i] = efunction[i] / sum;
            
        }
        //console.table(efunction)
        //console.log(x_tart)
        if (x_tart > 0) hamilton(dx,vtemp,vpot,efunction,ngrid);
        else hamilton5p(dx,vtemp,vpot,efunction,ngrid);
        //var_dump(global vtemp);
        //console.log(sum)
        sum = 0;
        //console.log(vtemp);
        for (let i = 1; i < ngrid - 1; i++) {
            sum = sum + vtemp[i] * efunction[i];
        }
        //console.log(sum)
        energy_new = sum * dx;
        //console.log(energy_new)
        delta = Math.abs((energy_new - energy) / energy);
        //console.log(eps,delta)
        energyN = energy_new;
        //console.log(iter)
        //console.log(energyN,initE)
        if (iter < 1) energyN = initE;
        energy = energyN;
        //console.log(energy,energyN)
    } while (delta <= eps);
    //console.log(initE, energy_new)
    initE = energy_new;

    // vtemp = [];
    let rsign = 1;
    if (x < 1e-8) rsign = (spaceship(efunction[1],0));
    //console.log(estart)
    ampl_max = 1;
    if (vharm <= 1) {
        if (estart > 0 && initE > 0) {
            ampl_max = 0;
            inode = 0;
            wb = efunction[ngrid - 1];
            //console.log(wb)
            i = ngrid;
            while (inode < 10) {
                i = i - 1;
                wf = efunction[i];
                //console.log(inode)
                if (i < 10) break;
                if (wf * wb < 0) inode = inode + 1;
                abswf = Math.abs(wf);
                //console.log(inode = inode + 1)
                if (abswf > ampl_max) ampl_max = abswf;
                wb = wf;
                //console.log(ampl_max)
            }
            //console.log(inode)
        }
    }
    //console.log(ampl_max)
    //console.log(efunction)
    ampl_max = ampl_max * rsign;
    for (let i = 0; i < ngrid; i++) {
        efunction[i] = efunction[i] / ampl_max;
    }
    //var_dump(efunction);
    //console.log(initE)
    // for (let i = 0; i < efunction.length; i++) {
    // return (
    //     cob.innerHTML = "hihia"
    // )
    

    // //     console.log(efunction[i]);
    // }
      //ef.innerHTML = efunction;

    //console.log("1")

    // Enew.innerHTML = initE;

    // efunction.forEach(function(item) {
    //     var listItem = document.createElement('li');
    //     listItem.className = "nostyle";
    //     listItem.innerText = item;
    //     document.getElementById("ef").appendChild(listItem);
    //  });
}

function hamilton(dx,vtemp,vpot,efunction,ngrid)
{
    let dtr = 1 / (dx * dx) / 2;
    let a = -dtr;
    let b = 2 * dtr;
    let c = -dtr;
    vtemp[0] = (b + vpot[0]) * efunction[0] + c * efunction[1];
    for (let i = 1; i < ngrid; i++) {
        vtemp[i] = (b + vpot[i]) * efunction[i] + c * (efunction[i - 1] + efunction[i + 1]);
    }
    vtemp[ngrid] = (b + vpot[ngrid]) * efunction[ngrid] + a * efunction[ngrid - 1];
    //console.log(vtemp);
}
function hamilton5p(dx,vtemp,vpot,efunction,ngrid)
{
    let dtr = 1 / (dx * dx) / 24;
    let a = dtr;
    let b = 30 * dtr;
    let c = -16 * dtr;
    let i = 0;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * efunction[i + 1]
        + a * efunction[i + 2];
    i = 1;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * (efunction[i - 1] + efunction[i + 1])
        + a * efunction[i + 2];
    for (let i = 2; i < ngrid - 3; i++) {
        vtemp[i] = (b + vpot[i]) * efunction[i]
            + c * (efunction[i - 1] + efunction[i + 1])
            + a * (efunction[i - 2] + efunction[i + 2]);
    }
    i = ngrid - 3;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * (efunction[i - 1] + efunction[i + 1])
        + a * efunction[i - 2];
    i = ngrid - 2;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * efunction[i + 1]
        + a * efunction[i - 2];
    //console.table(efunction);
}

function invers(dx,vtemp,vpot,efunction,ngrid,nloop)
{
    //console.table(ngrid)
    let dtr = 1 / (dx * dx) / 2;
    let a = -dtr;
    let b = [];
    let bb = 2 * dtr;
    let c = -dtr;
    for (let k = 0; k < nloop; k++) {
        for (i = 0; i < ngrid; i++) {
            b[i] = (bb + vpot[i] - energy);
            // console.log(b[i])
        }
        //console.table(b)
        temp = b[0];
        //console.log(temp)
        efunction[0] = efunction[0] / temp;
        //console.table(efunction[0])
        //console.table(efunction[1])
        for (let j = 1; j < ngrid; j++) {
            temp1 = b[j];
            //console.table(temp1)
            b[j] = c / temp;
            // console.log(b[1])
            temp = temp1 - a * b[j];
            //console.log(temp)
            //console.table((efunction[j] - a * efunction[j - 1]) / temp)
            //console.log(efunction[1-1])
            efunction[j] = (efunction[j] - a * efunction[j - 1]) / temp;
            //console.log(efunction[1])
        }
        for (j = ngrid - 2; j > 1; j--) {
            
            efunction[j] = efunction[j] - b[j + 1] * efunction[j + 1];
            
        }
       // console.table(efunction)
    }
    // console.table(b)
}

// function getEnergy()
// {
//     return initE;
// }

// console.log(initE);