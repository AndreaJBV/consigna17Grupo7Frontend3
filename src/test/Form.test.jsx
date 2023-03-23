import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Form from "../components/Form";

describe("Form testing - events", () => {
    test("input not numbers", () => {
        render(<Form/>)
        const noNumbers = screen.getByTestId("noNumbers")
        fireEvent.change(noNumbers,{target: {value: "Andrea"}})
        const password = noNumbers.value
    

        const evaluar = (password, () => {
            let regex = new RegExp("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$");
            
            for(let i = 0; i <= password.length -1; i++){
                let letra = password[i]
    
                if(!regex.test(letra) || !letra === " "){
                    return false
                }
                else{
                    return true
                }
                
            }
        }) 
        expect(evaluar(password)).toBe(true);
    })

    test("Button send", () => {
        const handleClick = vi.fn()
        render(<Form handleClick={handleClick}/>)
        const btn = screen.getByText("Enviar")
        fireEvent.click(btn)
        expect(handleClick).toBeCalledTimes(1)
    })
})