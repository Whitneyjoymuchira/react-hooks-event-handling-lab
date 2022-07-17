// Code Keypad Component Here
import React from "react"
export default function Keypad(){
    function handleEvent(event){
    console.log('Entering password...')
    }
        return (
            <form onChange={handleEvent}>
              <input type="password" name="password" placeholder="Enter password..." />
              <button>Login</button>
            </form>
          );
        }

    

