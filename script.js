// document.getElementById('btn_toggle').addEventListener('click', function () {

//     const buttons = document.querySelectorAll('.btn')
//     buttons.forEach(button => {
//         if (button.style.display == 'none') button.style.display = "block";
//         else button.style.display = "none";
//     });

//     var var1 = document.getElementsByClassName('btn')[0];
//     var1.setAttribute('id', 'arrow1-para');

//     var var2 = document.getElementsByClassName('btn')[1];
//     var2.setAttribute('id', 'arrow1');

//     var var3 = document.getElementsByClassName('btn')[2];
//     var3.setAttribute('id', 'arrow2-para');

//     var var4 = document.getElementsByClassName('btn')[3];
//     var4.setAttribute('id', 'arrow2');

//     var var5 = document.getElementsByClassName('btn')[4];
//     var5.setAttribute('id', 'arrow3-para');

//     var var6 = document.getElementsByClassName('btn')[5];
//     var6.setAttribute('id', 'arrow3');

//     var var7 = document.getElementsByClassName('btn')[6];
//     var7.setAttribute('id', 'para-4');

// });

const Stack = document.querySelector('#btn_toggle');
const StackBox = document.querySelector('.btnStack');
Stack.addEventListener('click', () => {
    StackBox.classList.toggle('active');

    var var1 = document.getElementsByClassName('btn')[0];
    var1.setAttribute('id', 'arrow1-para');

    var var2 = document.getElementsByClassName('btn')[1];
    var2.setAttribute('id', 'arrow1');

    var var3 = document.getElementsByClassName('btn')[2];
    var3.setAttribute('id', 'arrow2-para');

    var var4 = document.getElementsByClassName('btn')[3];
    var4.setAttribute('id', 'arrow2');

    var var5 = document.getElementsByClassName('btn')[4];
    var5.setAttribute('id', 'arrow3-para');

    var var6 = document.getElementsByClassName('btn')[5];
    var6.setAttribute('id', 'arrow3');

    var var7 = document.getElementsByClassName('btn')[6];
    var7.setAttribute('id', 'para-4');

})

const togglebtn = document.querySelector('.btnq1');
const para = document.querySelector('.ans1');
togglebtn.addEventListener('click', () => {
    para.classList.toggle('active');
})

const togglebtn1 = document.querySelector('.btnq2');
const para1= document.querySelector('.ans2');
togglebtn1.addEventListener('click', () => {
    para1.classList.toggle('active');
})

const togglebtn2 = document.querySelector('.btnq3');
const para2 = document.querySelector('.ans3');
togglebtn2.addEventListener('click', () => {
    para2.classList.toggle('active');
})

const boxModel = document.querySelector('.btnexample');
const diagram = document.querySelector('.exm1');
boxModel.addEventListener('click', () => {
    diagram.classList.toggle('active');
})

const boxDemonstration = document.querySelector('.btndemon');
const demonsBox = document.querySelector('.exm2');
boxDemonstration.addEventListener('click', () => {
    demonsBox.classList.toggle('active');
})