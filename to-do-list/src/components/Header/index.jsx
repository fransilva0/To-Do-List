import "./styles.css";

export function Header() {
  return (
    <header id="header">
      <nav id="navbar">
        <h1 className="brand">To-Do<span>List</span></h1>

        <div className="right-side">
          <img src="https://avatars.githubusercontent.com/u/83087997?v=4" alt="Francileudo Profile" />
         <div className="profile">
           <p className="name">Francileudo Oliveira</p>
           <p className="welcome-message">Bem Vindo(a)</p>
         </div>
        </div>

      </nav>
    </header>
  );
}