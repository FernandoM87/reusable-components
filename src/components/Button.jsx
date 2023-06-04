function Button({ innerText, onClick }) {

    return (
        <button class="rounded-full" onClick={onClick}>{innerText}</button>
    )
  
}

export default Button;