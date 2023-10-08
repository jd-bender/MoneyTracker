"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import addData from "../../firebase/firestore/addData.js";

export default function AddExpense() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameHelperText, setNameHelperText] = useState("");
    const [amount, setAmount] = useState(0);
    const [amountError, setAmountError] = useState(false);
    const [amountHelperText, setAmountHelperText] = useState("");

    const router = useRouter();

    const resetExpenseForm = () => {
        setName("");
        setNameError(false);
        setNameHelperText("");
        setAmount(0);
        setAmountError(false);
        setAmountHelperText("");
    };
    
    const submitExpense = async () => {
        resetExpenseForm();

        if (typeof name !== 'string') {
            setNameError(true);
            setNameHelperText("Name can only contain alphabetical characters.");
        }

        if (typeof amount !== 'number' || amount <= 0) {
            setAmountError(true);
            setAmountHelperText("Amount can only contain numeric characters.");
        }

        if (nameError || amountError) {
            return;
        } else {
            const {result, error} = await addData("expenses",  {name, amount});

            if (error) {    
                return console.log(error);
            } else {
                resetExpenseForm();
            }
        }
    };

    const goToHomePage = () => {
        router.push("/");
    };

    return (
        <span className="flex">
            <TextField 
                label="Expense Name" 
                sx={{width: '20rem'}} 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                error={nameError} 
                variant="outlined" 
                helperText={nameHelperText}
            />
            <TextField 
                label="Amount" 
                sx={{width: '20rem'}}
                value={amount} 
                onChange={(e) => setAmount(parseFloat(e.target.value))} 
                error={amountError} 
                variant="outlined" 
                helperText={amountHelperText}
            />

            <Button onClick={submitExpense}>Submit</Button>
            <Button onClick={goToHomePage}>Back</Button>
        </span>
    );
}