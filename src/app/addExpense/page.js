import { TextField } from "@mui/material";

export default function AddExpense() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <>
            <TextField label="Expense Name" sx={{width: '20rem'}} onChange={(e) => setName(e.target.value)} variant="outlined" />
            <TextField label="Amount" sx={{width: '20rem'}} onChange={(e) => setAmount(parseFloat(e.target.value))} variant="outlined" />
        </>
    );
}