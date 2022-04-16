const button = document.querySelector(".button");
const adviceContent = document.querySelector("#advice_content");
const adviceIdNumber = document.querySelector('#advice_number');

const getAdvice = async () => {
  try {
    const apiContent = await axios.get("https://api.adviceslip.com/advice");
    const adviceText = apiContent.data.slip.advice;
    const adviceNumber = apiContent.data.slip.id;
    adviceContent.innerHTML = adviceText;
    adviceIdNumber.innerHTML = `Advice #${adviceNumber}`;
  } catch (e) {
    console.log("Site is down", e);
  }
};

button.addEventListener('click', ()=>{
    getAdvice();
})

