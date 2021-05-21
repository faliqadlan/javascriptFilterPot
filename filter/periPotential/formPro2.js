function formPot2() {
    formHolder2 = document.getElementById("formHolder2");
    choosen.innerHTML = "";
    selectedValue2 = document.getElementById("periPot").value


    if (selectedValue2 == "") {
    } else if (selectedValue2 == "0") {
        formHolder2.innerHTML =`
		<label class="label-input100" for="de">delta energy</label>
		<div class="wrap-input100">
			<input id="de" class="input100" type="number" name="de" placeholder="0.01" value="0.01">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="vmax">Vmax</label>
		<div class="wrap-input100">
			<input id="vmax" class="input100" type="number" name="vmax" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="lks">Lattice Width</label>
		<div class="wrap-input100">
			<input id="lks" class="input100" type="number" name="lks" placeholder="1" value="2">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="lpt">Potential Width</label>
		<div class="wrap-input100">
			<input id="lpt" class="input100" type="number" name="lpt" placeholder="1" value="10">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/periPotential/image/kronigPenney.png" alt="Kronig PenneyPotential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue2 == "1") {
        formHolder2.innerHTML = `
		<label class="label-input100" for="de">delta energy</label>
		<div class="wrap-input100">
			<input id="de" class="input100" type="number" name="de" placeholder="0.01" value="0.01">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="vmax">Vmax</label>
		<div class="wrap-input100">
			<input id="vmax" class="input100" type="number" name="vmax" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="lks">Lattice Width</label>
		<div class="wrap-input100">
			<input id="lks" class="input100" type="number" name="lks" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/periPotential/image/harmonic.png" alt="Kronig PenneyPotential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue2 == "2") {
        formHolder2.innerHTML = `
		<label class="label-input100" for="de">delta energy</label>
		<div class="wrap-input100">
			<input id="de" class="input100" type="number" name="de" placeholder="0.01" value="0.01">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="vmax">Vmax</label>
		<div class="wrap-input100">
			<input id="vmax" class="input100" type="number" name="vmax" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="lpt">Lattice Width</label>
		<div class="wrap-input100">
			<input id="lpt" class="input100" type="number" name="lpt" placeholder="1" value="2">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/periPotential/image/triangular.png" alt="Kronig PenneyPotential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue2 == "3") {
        formHolder2.innerHTML = `
		<label class="label-input100" for="de">delta energy</label>
		<div class="wrap-input100">
			<input id="de" class="input100" type="number" name="de" placeholder="0.01" value="0.01">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="vmax">Vmax</label>
		<div class="wrap-input100">
			<input id="vmax" class="input100" type="number" name="vmax" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="lpt">Lattice Width</label>
		<div class="wrap-input100">
			<input id="lpt" class="input100" type="number" name="lpt" placeholder="1" value="2">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/periPotential/image/sinusoidal.png" alt="Kronig PenneyPotential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    }

    }