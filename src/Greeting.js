import { Button } from "react-bootstrap";

export function Greeting(){
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hola mundillo</h1>
                <Button variant="primary">Aceptar</Button>
            </header>
        </div>
    );
}

export function UserCard(){
    return (
        <div className="App">
            <header className="App-header">
                <h1>Chau mundillo</h1>
                <Button variant="primary">Explotar planeta</Button>
            </header>
        </div>
    );
    
}

