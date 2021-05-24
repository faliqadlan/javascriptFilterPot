function load(file) {
    var src = document.createElement("script")
    // src.setAttribute("type", "module")
    src.setAttribute("src", file)
    // src.setAttribute("async", "false");
    // let head = document.head;
    // head.prepend(src);
    document.getElementsByTagName("body")[0].appendChild(src)
}

load("./filter/singlePotential/singlePotential.js")
load("./filter/singlePotential/formPro.js");
load("./filter/periPotential/periPotential.js")
load("./filter/periPotential/formPro2.js");
load("./filter/workPro/filter.js");
load("./filter/workPro/runPro.js");



function start() {
    startPlaceholder    = document.getElementById("startPlaceholder");
    startIlPlaceholder  = document.getElementById("startIlPlaceholder")
    startPlaceholder.innerHTML = "";
    startIlPlaceholder.innerHTML = "";

    runIlPlaceholder    = document.getElementById("runIlPlaceholder")
    runIlPlaceholder.innerHTML  =`
        <img src="./images/run_Illustration.png" alt="run_Illustration" srcset="" style="height: 1000px; width: 1250px">
    `
    
    //console.log(Harmonik.arg)

    choosen = document.getElementById("choosen");
    choosen.innerHTML = `
    <select id="singlePot" name="singlePot" onchange="formPot();">
                    <option value="">--Select Single Potential--</option>
                    <option value="0">Harmonic</option>
                    <option value="1">Triangle</option>
                    <option value="2">Heavy Side</option>
                    
    </select>

    `

    choosen2 = document.getElementById("choosen2");
    choosen2.innerHTML = `
    <select id="periPot" name="periPot" onchange="formPot2();">
                    <option value="">--Select Periodic Potential--</option>
                    <option value="0">Kronig Penney</option>
                    <option value="1">Harmonic</option>
                    <option value="2">Triangular</option>
                    <option value="3">Sinusoidal</option>
    </select>`

    runPlaceholder.innerHTML = `
        <div class="container-contact100-form-btn">
			<button type="submit" name="run" id="run" onclick= run() class="contact100-form-btn">
				Run Program
			</button>
		</div>
    
    `
}