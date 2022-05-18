import React, { useState } from 'react'
import styles from './Converter.module.css'
export const Home = () => {
  const [text, setText] = useState("")
  const [emojis, setEmojis] = useState([])

  React.useEffect(() => {
    fetch("http://localhost:8000/emoji")
      .then(res => res.json())
      .then(res => setEmojis(res))
      .catch(err => console.log(err))
  }, [])
  function checkingSubmit(givenText) {
   
    for (let i = 0; i < givenText.length; i++) {
      for (let j = 0; j < emojis.length; j++) {
        if (givenText[i] === emojis[j].feeling) {
          givenText[i] = emojis[j].emoticon
        }
      }
    }
    return givenText.join(" ")
  }
  
  const handleChange = (e) => {
    setText(e.currentTarget.value);
    var array = text.split(" ")
    checking(array)
    function checking(givenText) {
      for (let i = 0; i < givenText.length; i++) {
        for (let j = 0; j < emojis.length; j++) {
          if (givenText[i] === emojis[j].feeling) {
            givenText[i] = emojis[j].emoticon
            setText(givenText.join(" "))
          }
        }
  
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text === ""){
      alert("Please Add Post ")
      return
    }
   let dat = checkingSubmit(text.split(" "));
    var data = {
      textInput: dat
    }
    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .catch(err => console.log(err))

    setText("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" className={styles.input} placeholder='Add Text here' value={text} onChange={handleChange} />
        <input type="submit" className={styles.submit} value="ADD POST" />
      </form>
    </div>
  )
}
