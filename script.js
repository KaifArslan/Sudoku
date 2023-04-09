const puzzleBoard= document.querySelector('#puzzle')
const solveButton= document.querySelector('#solve-button')
const values = 81;
const submission= [];
for(let i=0; i<values;i++){
  const inputElement=document.createElement("input");
  inputElement.setAttribute("type",'number');
  inputElement.setAttribute('min',1);
  inputElement.setAttribute('max',9);
  puzzleBoard.appendChild(inputElement);
}

const joinValues = ()=>{
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input=>{
    if(input.value){
      submission.push(input.value);
    }else{
      submission.push(0);
    }
  });
  console.log(submission);
}

const solve = ()=>{
  joinValues();
  const data = submission;
  console.log("this is our data", data);
//---------------------
const options = {
  method: 'POST',
  url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '2bdb722bdamsh2258e1305c38fe6p108390jsn2487966d047b',
    'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
  },
  data: {input:data}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

solveButton.addEventListener("click",solve);