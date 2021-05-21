function formPot() {
    formHolder = document.getElementById("formHolder");
	imPlotPlaceholder = document.getElementById("imPlotPlaceholder");
	choosen2.innerHTML = ""
    selectedValue = document.getElementById("singlePot").value


    if (selectedValue == "") {
    
    } else if (selectedValue == "0") {
        formHolder.innerHTML =`
        <label class="label-input100" for="omega">omega</label>
		<div class="wrap-input100">
			<input id="omega" class="input100" type="number" name="omega" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/singlePotential/image/harmonic.png" alt="Harmonic Potential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue == "1"){
        formHolder.innerHTML =`

        <label class="label-input100" for="tinggi">High</label>
		<div class="wrap-input100">
			<input id="tinggi" class="input100" type="number" name="tinggi" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="titik_tengah">The Midpoint</label>
		<div class="wrap-input100">
			<input id="titik_tengah" class="input100" type="number" name="titik_tengah" placeholder="0.5" value="0.5">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/singlePotential/image/triangle.png" alt="Triangle Potential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue == "2"){
        formHolder.innerHTML = `
        
        <label class="label-input100" for="tinggi">High</label>
		<div class="wrap-input100">
			<input id="tinggi" class="input100" type="number" name="tinggi" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>

        <label class="label-input100" for="titik_tengah">The Midpoint</label>
		<div class="wrap-input100">
			<input id="titik_tengah" class="input100" type="number" name="titik_tengah" placeholder="0.5" value="0.5">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/singlePotential/image/heavy_side.png" alt="Heavy Side Potential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    } else if (selectedValue == "3") {
        formHolder.innerHTML =`
        <label class="label-input100" for="omega">Constant</label>
		<div class="wrap-input100">
			<input id="omega" class="input100" type="number" name="omega" placeholder="1" value="1">
			<span class="focus-input100"></span>
		</div>
        `
		imPlotPlaceholder.innerHTML = `
		<img src="./filter/singlePotential/image/coulumb.png" alt="Coulumb Potential Function Illustration" >
		`
		runIlPlaceholder.innerHTML = ''
    }


    }