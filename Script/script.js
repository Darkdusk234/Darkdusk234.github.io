document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("easterModal");
    const span = document.getElementById("closeModal");
    let inputT = false;
    let inputA = false;
    let inputR = false;
    let inputD = false;
    let inputI = false;
    let inputS = false;

    document.addEventListener("keydown", function() {
        if(event.key === "t" && !inputT || event.key === "T" && !inputT)
        {
            inputT = true;
        }
        else if(event.key === "a" && !inputA || event.key === "A" && !inputA)
        {
            inputA = true;
        }
        else if(event.key === "r" && !inputR || event.key === "R" && !inputR)
        {
            inputR = true;
        }
        else if(event.key === "d" && !inputD || event.key === "D" && !inputD)
        {
            inputD = true;
        }
        else if(event.key === "i" && !inputI || event.key === "I" && !inputI)
        {
            inputI = true;
        }
        else if(event.key === "s" && !inputS || event.key === "S" && !inputS)
        {
            inputS = true;
        }
        else
        {
        inputT = false;
        inputA = false;
        inputR = false;
        inputD = false;
        inputI = false;
        inputS = false;
        }

        if(inputT && inputA && inputR && inputD && inputI && inputS)
            {
                modal.style.display = "block";
            }
    })

    span.addEventListener("click", function() {
        modal.style.display = "none";
    })

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
})