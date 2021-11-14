import { useState } from "react";
import ReactDOM from 'react-dom';

function RegisterForm() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [street, setStreet] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        alert('${firstName} sent a registery form')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
            </label>
            <br />
            <label>Last name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />
            </label>
            <br />
            <label>street:
                <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </label>
            <br />
            <label>neighborhood:
                <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                />
            </label>
            <br />
            <label>city:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <br />
            <label>mail:
                <input
                    type="text"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
            </label>
            <br />
            <label>phone:
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br />
            <input type="submit" />
        </form>
    )
}

ReactDOM.render(<RegisterForm />, document.getElementById('root'));
export default RegisterForm