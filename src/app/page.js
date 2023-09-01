import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user } = useAuthContext();
    const router = useRouter();
    return (
        <span>
            <button>Add Expense</button>
            <button>View Expenses</button>
        </span>
    );
};